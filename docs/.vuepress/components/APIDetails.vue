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
    <div class="content" ref="content">
      <h4>
        Required Parameters
      </h4> 
      <table class="table-100">
        <thead>
          <tr>
            <th style="width:25%">Name</th> 
            <th style="width:25%">Type</th> 
            <th style="width:50%">Description</th>
          </tr>
        </thead> 
        <tbody>
          <tr v-for="param in requiredParams" :key="endpoint.name + param.name">
            <td>{{param.name}}</td>
            <td>{{param.type}}</td> 
            <td v-html="param.description"></td> 
          </tr>
        </tbody>
      </table>
      <slot name="required-parameters-notes"></slot>
      <template v-if="optionalParams.length > 0">
        <h4>
          Optional Parameters
        </h4> 
        <table>
          <thead>
            <tr>
              <th style="width:25%">Name</th> 
              <th style="width:25%">Type</th> 
              <th style="width:50%">Description</th>
            </tr>
          </thead> 
          <tbody>
            <tr v-for="param in optionalParams" :key="endpoint.name + param.name">
              <td>{{param.name}}</td>
              <td>{{param.type}}</td> 
              <td v-html="param.description"></td> 
            </tr>
          </tbody>
        </table>
        <slot name="optional-parameters-notes"></slot>
      </template>
      <h4>
        Response
      </h4> 
      <slot name="response">
         <p>{{endpoint.response}}</p> 
      </slot>

      <h4 v-if="$slots.example">Example</h4>
      <slot name="example"></slot>

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

.collapsible
  cursor: pointer
  display: inline-block
  padding: 10px
  border-radius: 6px
  color: $textColor
  border: none
  box-shadow:  $boxShadow
  font-size: 16px
  width 150px

.content 
  max-height: 0
  overflow: hidden
  transition: max-height 0.4s ease-out

.collapsible:after 
  content: '\02795'
  font-size: 13px
  color: #ccc
  float: right
  margin-left: 5px

.active:after 
  content: '\2796'
  
</style>