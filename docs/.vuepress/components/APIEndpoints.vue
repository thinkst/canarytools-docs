<template>
  <div class="section-container content" ref="content">
    <div class="details-content">
      <slot name="details"></slot>
    </div>
    <div class="example-content">
      <div class="endpoints language-">
        <div class="header">Endpoints</div>
        <div class="content">
            <div v-for="endpoint in $page.frontmatter.endpoints" class="endpoint">
                <span class="method" :class="endpoint.method">{{endpoint.method}}</span>
                <span class="url"><a :href="pathToEndpoint(endpoint.name)">{{endpoint.url}}</a></span>
                <span class="deprecated" v-if=endpoint.endpoint_deprecated>DEPRECATED</span>
                <div class="row" v-if=endpoint.deprecated_url>
                  <span class="method" :class="endpoint.method">{{endpoint.method}}</span>
                  <span class="url"><a :href="pathToEndpoint(endpoint.name)">{{endpoint.deprecated_url}}</a></span>
                  <span class="deprecated">DEPRECATED</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    endpoints: {
      required: true,
      type: Object,
    },
    path: {
      required: true,
      type: String,
    }
  },
  methods: {
    pathToEndpoint(name) {
      let link = name;
      link = link.toLowerCase().split(' ').join('-')
      return `${this.path}#${link}`;
    }
  },
}
</script>

<style lang="stylus" scoped>
.endpoints
  max-width: 800px
  overflow: hidden;

.endpoint
  display: stack
  & .method
    min-width: 70px
  & .deprecated
    color: $badgeErrorColor
    font-size: 0.8em
    margin-left: 1em

@media (max-width: 419px)
  .endpoints 
    margin: 0 !important
    & .content
      overflow: scroll
  
</style>