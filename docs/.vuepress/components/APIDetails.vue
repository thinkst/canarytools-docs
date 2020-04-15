<template>
  <div>
    <p>
      <code>{{endpoint.method}} {{endpoint.url}}</code>
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
            </div>
            <div v-if="param.default" class="endpoint-details-default">
              Default: {{param.default}}
            </div>
            <div class="endpoint-details-description" v-html="transform(param.description)">
            </div>
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
              </div>
              <div v-if="param.default" class="endpoint-details-default">
                <span class="heading">Defaults to: </span>
                <span>{{param.default}}</span>
              </div>
              <div class="endpoint-details-description" v-html="transform(param.description)">
              </div>
            </div>
          </div>
          <slot name="optional-parameters-notes"></slot>
        </template>
        <h4 class="details-heading">Response</h4> 
        <slot name="response">
          <p>{{endpoint.response}}</p> 
        </slot>
      </div>

      <div class="example-content">
        <h4 v-if="$slots.example" class="details-heading">Example</h4>
        <slot name="example"></slot>
      </div>

    </div>
  </div>
</template>


<script>
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
    };
  },
  computed: {
    requiredParams() {
      return this.endpoint.params.filter(p => p.required);
    },
    optionalParams() {
      return this.endpoint.params.filter(p => !p.required);
    },
  },
  methods: {
    transform(description) {

      // replace code
      description = description.replace (/`(.*?)`/g, "<code>$1</code>");
      // replace links
      description = description.replace (/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
      return description
    },
    toggle() {
      this.expand = !this.expand;
      if (this.$refs.content.style.maxHeight){
        this.$refs.content.style.maxHeight = null;
      } else {
        // We add an extra 500px here to cater for python examples being longer.
        // Since it is `max-height` this wan't make a difference to the rendered layout,
        // but if there is a cleaner way, feel free to replace this hastily put together
        // hack.
        this.$refs.content.style.maxHeight = this.$refs.content.scrollHeight + 500 + "px";
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.details-heading
  text-transform: uppercase
  padding-top: 15px

.endpoint-details
  border-bottom: 1px solid lighten($borderColor, 10%)
  padding-top: 10px
  padding-bottom: 10px

.theme-dark .endpoint-details
  border-bottom: 1px solid darken($borderColor, 40%)

.endpoint-details-name
  font-weight: bold
  font-size: 1.1em

.endpoint-details-type
  font-style: italic 
  font-size: 0.8em

.endpoint-details-default
  color: $badgeWarningColor
  font-size: 0.8em
  & .heading
    font-style: italic 

.endpoint-details-description
  font-size: 0.9em

button:focus 
  outline:0

.collapsible
  cursor: pointer
  display: inline-block
  padding: 5px
  border-radius: 6px
  color: $textColor
  border: none
  box-shadow:  $boxShadow
  font-size: 12px
  width 100px


.content 
  max-height: 0
  overflow: hidden
  transition: max-height 0.4s ease-out

.collapsible:after 
  content: '\02795'
  font-size: 9px
  color: #ccc
  float: right
  margin-left: 5px

.active:after 
  content: '\2796'


.theme-dark
  .collapsible
    box-shadow: none;
    border-style: solid;
    border-width: 1px;
    background-color: $nightBgcolor
    &:hover
      color: lighten($nightFontcolor, 5%)

</style>