<template>
  <div>
    <p>
      <code>{{endpoint.method}} {{endpoint.url}}</code>
      <span v-if=endpoint.endpoint_deprecated class="endpoint-details-deprecated">DEPRECATED</span>
    </p>
    <p v-if=endpoint.deprecated_url>
      <code>{{endpoint.method}} {{endpoint.deprecated_url}}</code>
      <span class="endpoint-details-deprecated">DEPRECATED</span>
    </p>
    <slot name="description">
      <p>{{endpoint.description}}</p>
    </slot>
    <button
      class="collapsible"
      :class="{ 'active': expand }"
      @click="toggle"
      >
      {{ expand ? 'Hide details' : 'Show details'}}
    </button>
    <div class="section-container content" ref="content">
      <div class="details-content">
        <h4 class="details-heading">Required Parameters</h4>
        <div class="param-section">
          <div
            v-for="param in requiredParams"
            :key="endpoint.name + param.name"
            class="endpoint-details"
          >
            <div class="endpoint-details-heading">
              <span class="endpoint-details-name">{{param.name}}</span>
              <span class="endpoint-details-type">{{param.type}}</span>
              <span v-if="param.deprecated" class="endpoint-details-deprecated">DEPRECATED</span>
            </div>
            <div v-if="typeof param.default !== 'undefined'" class="endpoint-details-default">
              Default: {{param.default}}
            </div>
            <div
              v-if="typeof param.deprecated_message !== 'undefined'"
              class="endpoint-details-deprecated-message"
              v-html="transform(param.deprecated_message)"
            ></div>
            <div class="endpoint-details-description" v-html="transform(param.description)">
            </div>
              <input
                v-if="testingMode && param.name !== 'auth_token'"
                class="testing-input"
                v-model="paramValues[param.name]"
                :placeholder="param.placeholder || `Enter ${param.name}`"
                :type="'text'"
              >
          </div>
        </div>
        <slot name="required-parameters-notes"></slot>
        <template v-if="optionalParams.length > 0">
          <h4 class="details-heading">Optional Parameters</h4>
          <div class="param-section">
            <div
              v-for="param in optionalParams" :key="endpoint.name + param.name"
              class="endpoint-details"
            >
              <div class="endpoint-details-heading">
                <span class="endpoint-details-name">{{param.name}}</span>
                <span class="endpoint-details-type">{{param.type}}</span>
                <span v-if="param.deprecated" class="endpoint-details-deprecated">DEPRECATED</span>
              </div>
              <div v-if="typeof param.default !== 'undefined'" class="endpoint-details-default">
                <span class="heading">Defaults to: </span>
                <span>{{param.default}}</span>
              </div>
              <div
                v-if="typeof param.deprecated_message !== 'undefined'"
                class="endpoint-details-deprecated-message"
                v-html="transform(param.deprecated_message)"
              ></div>
              <div class="endpoint-details-description" v-html="transform(param.description)">
              </div>
              <input
                v-if="testingMode"
                class="testing-input"
                v-model="paramValues[param.name]"
                :placeholder="param.placeholder || `Enter ${param.name}`"
                :type="'text'"
              >
            </div>
          </div>
          <slot name="optional-parameters-notes"></slot>
        </template>
        <h4 class="details-heading">Response</h4>
        <slot name="response">
          <p>{{endpoint.response}}</p>
        </slot>
      </div>

      <div v-if="!testingMode" class="example-content">
        <h4 v-if="$slots.example" class="details-heading">
          Example
          <div class="tooltip-container">
            <button type="button" class="toggle-testing" @click.stop="toggleTestingState()">
              <img src="../assets/flask.png" alt="Test Endpoint">
            </button>
            <span class="tooltip">{{ testingMode ? 'Finish testing' : 'Test this endpoint' }}</span>
          </div>
        </h4>
        <slot name="example"></slot>
      </div>

      <!-- Dynamic Code Examples -->
      <div v-else class="example-content">
        <h4 class="details-heading">Test your endpoint
          <div class="tooltip-container">
            <button type="button" class="toggle-testing" @click.stop="toggleTestingState()">
              <img src="../assets/flask.png" alt="Test Endpoint">
            </button>
            <span class="tooltip">{{ testingMode ? 'Finish testing' : 'Test this endpoint' }}</span>
          </div>
        </h4>

        <div class="console-details">
          <!-- <div class="input-group">
            <label for="subdomain">Canary Subdomain</label>
            <input type="text" name="subdomain" v-model="subDomain" placeholder="Console subdomain">
          </div> -->
          <div class="input-group">
            <label for="authToken">API Key</label>
            <input type="password" name="authToken" v-model="authToken" placeholder="API Auth Key">
          </div>
        </div>
        <div class="testing-code-block">
          <div class="tabs">
            <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
              :class="['tab-button', { active: activeTab === tab.id }]">
              {{ tab.label }}
            </button>
            <button class="tab-button copy-code" @click="copyCodeToClipboard"><img src="../assets/copy.svg" alt=""></button>
          </div>

          <div class="tab-content">
            <pre v-if="activeTab === 'curl'" class="code-block language-curl"><code>{{ curlExample }}</code></pre>
            <pre v-else-if="activeTab === 'python'"
              class="code-block language-python"><code>{{ pythonExample }}</code></pre>
            <pre v-else-if="activeTab === 'javascript'" class="code-block"><code>{{ javascriptExample }}</code></pre>
          </div>
        </div>

       <div class="send-request">
        <span class="api-error" v-if="errorMessage">Oops! An error occured when making the request!</span>
         <button
          type="button"
          class="test-endpoint-btn"
          @click="submitTestingRequest()">
          Send Request</button>
       </div>

        <div v-if="apiResponse" class="api-response">
          <h4 class="text-md font-semibold mb-2">Response</h4>
          <pre class="code-block response"><code>{{ apiResponse }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sendAPIRequest, { getReghost } from '../api';
export default {
  props: {
    endpoint: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      expand: false,
      testingMode: false,
      paramValues: {},
      activeTab: 'curl',
      tabs: [
        { id: 'curl', label: 'cURL' },
        { id: 'python', label: 'Python' },
      ],
      apiResponse: null,
      errorMessage: false,
      authToken: '',
      subDomain: '',
    };
  },
  mounted() {
    this.endpoint.params?.forEach(param => {
      this.$set(this.paramValues, param.name, '')
    })
    getReghost()
    .then((res) => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  },
  computed: {
    requiredParams() {
      return this.endpoint.params.filter(p => p.required);
    },
    optionalParams() {
      return this.endpoint.params.filter(p => !p.required);
    },
    baseUrl() {
      console.log(this.getCookie('reghost'));
      if (this.getCookie('reghost')) return this.getCookie('reghost');
      return `https://${this.subDomain ? this.subDomain : 'EXAMPLE'}.canary.tools`
    },
    fullUrl() {
      return `${this.baseUrl}${this.endpoint.url}`
    },
    curlExample() {
      const params = this.formatParametersForCurl()
      return `curl ${this.fullUrl} \\${params ? '\n  ' + params : ''}`
    },
    pythonExample() {
      const payload = this.formatParametersForPython()
      return `import requests

url = '${this.fullUrl}'

payload = {${payload}
}

r = requests.${this.endpoint.method.toLowerCase()}(url, ${this.endpoint.method === 'GET' ? 'params' : 'data'}=payload)

print(r.json())`
    },
    responseExample() {
      return JSON.stringify(this.endpoint.response || {
        "result": "success",
        "message": "Operation completed successfully"
      }, null, 2)
    }
  },
  methods: {
    transform(description) {

      // replace code
      description = description.replace(/`(.*?)`/g, "<code>$1</code>");
      // replace links
      description = description.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
      return description
    },
    to_array(s) {
      return s.split(',')
    },
    toggle() {
      this.expand = !this.expand;
      if (this.$refs.content.style.maxHeight) {
        this.$refs.content.style.maxHeight = null;
      } else {
        // We add an extra 500px here to cater for python examples being longer.
        // Since it is `max-height` this wan't make a difference to the rendered layout,
        // but if there is a cleaner way, feel free to replace this hastily put together
        // hack.
        this.$refs.content.style.maxHeight = this.$refs.content.scrollHeight + 500 + "px";
      }
    },
    toggleTestingState() {
      this.testingMode = !this.testingMode;
    },
    async submitTestingRequest() {
      this.errorMessage = false
      const params = { };
      Object.keys(this.paramValues).forEach(param => {
        if (this.paramValues[param] !== '') params[param] = this.paramValues[param]
      })

      sendAPIRequest(this.endpoint.url, this.endpoint.method, this.authToken, params)
      .then(res => {
        console.log(res)
        this.apiResponse = res
      })
      .catch((err) => {
        console.log(err);
        this.errorMessage = true;
        this.apiResponse = null;
      })
    },
    formatParametersForCurl() {
      const params = this.endpoint.params
        .map(param => {
          const value = this.paramValues[param.name] || param.placeholder || `EXAMPLE_${param.name.toUpperCase()}`
          if (param.name === 'auth_token' && this.authToken) return `-d ${param.name}=${'*'.repeat(this.authToken.length)}`;
          return `-d ${param.name}=${value}`
        })
        .join(' \\\n  ')

      return params
    },
    formatParametersForPython() {
      return this.endpoint.params
        .map(param => {
          const value = this.paramValues[param.name] || param.placeholder || `EXAMPLE_${param.name.toUpperCase()}`
          if (param.name === 'auth_token' && this.authToken) return `\n  '${param.name}': '${'*'.repeat(this.authToken.length)}'`;
          return `\n  '${param.name}': '${value}'`
        })
        .join(',') + (this.endpoint.params.length > 0 ? '\n' : '')
    },
    copyCodeToClipboard() {
      navigator.clipboard.writeText(this.activeTab === 'curl' ? this.curlExample :  this.pythonExample).then(function() {
        console.log('Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy code: ', err);
      });
    },
    getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  }
}
</script>

<style scoped>
.details-heading {
  text-transform: uppercase;
  padding-top: 15px;
}

button {
  cursor: pointer;
}

.endpoint-details {
  border-bottom: 1px solid #e0e0e0;
  padding-top: 10px;
  padding-bottom: 10px;
}

.theme-dark .endpoint-details {
  border-bottom: 1px solid #666666;
}

.endpoint-details-name {
  font-weight: bold;
  font-size: 1.1em;
}

.endpoint-details-type {
  font-style: italic;
  font-size: 0.8em;
}

.endpoint-details-default {
  color: #ff9800;
  font-size: 0.8em;
}

.endpoint-details-default .heading {
  font-style: italic;
}

.endpoint-details-deprecated {
  color: #f44336;
  font-size: 0.8em;
}

.endpoint-details-deprecated-message {
  color: #f44336;
  font-size: 0.8em;
  font-style: italic;
  margin-top: 1em;
  margin-bottom: 1em;
}

.endpoint-details-description {
  font-size: 0.9em;
}

button:focus {
  outline: 0;
}

.collapsible {
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  border-radius: 6px;
  color: #333333;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-size: 12px;
  width: 100px;
}

.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
}

.collapsible:after {
  content: '\02795';
  font-size: 9px;
  color: #ccc;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: '\2796';
}

.theme-dark .collapsible {
  box-shadow: none;
  border-style: solid;
  border-width: 1px;
  background-color: #2d3748;
}

.theme-dark .collapsible:hover {
  color: #e2e8f0;
}

.console-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
}

.console-details  .input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.console-details  .input-group input, .testing-input {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #888;
  margin-top: 4px;
}

.send-request {
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
}

.api-error {
  color: #FF2F2F;
  font-size: inherit;
  line-height: 1.7;
}
.test-endpoint-btn {
  padding: 5px;
  background-color: #38d47f;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 8px;
}

.toggle-testing {
  border: none;
  outline: none;
  color: #333;
  border-radius: 4px;
  background: #eee;
  padding: 4px 8px;
  cursor: pointer;
}

.toggle-testing:hover {
  background: #eee;
}

.toggle-testing img {
  position: relative !important;
  height: 14px;
  width: 14px;
  padding: 0;
  border: none;
  cursor: pointer;
}

.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
  text-transform: none;
  font-size: 12px;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #333;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

.testing-code-block {
  display: flex;
  flex-direction: column;
  background: #4a5568;
  border-radius: 6px;
  margin-top: 1rem;
}

.testing-code-block .tabs {
  display: flex;
  justify-content: end;
  background: #3F4858;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-size: 14px;
}

.copy-code img{
  border: none;
  padding: 0;
  border-left: 1px solid #eaecef;
  padding-left: 8px;
  height: 16px;
}

.testing-code-block .tabs .tab-button {
  background: transparent;
  border: none;
  outline: none;
  padding: 0.5em 0.5em;
  color: #9fa9a3;
  font-size: 14px;
}

.testing-code-block .tabs .tab-button:hover {
  text-decoration: underline;
}

.testing-code-block .tabs .tab-button.active {
  color: #38d47f;
  background: #4a5568;
}

.testing-code-block .tabs .tab-button.active::after {
  content: none;
}

.testing-code-block pre {
  margin: 0;
}

.api-response pre {
  max-height: 300px;
  overflow: scroll;
}
</style>