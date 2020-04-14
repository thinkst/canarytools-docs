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
  display: flex
  & .method
    min-width: 70px
  
</style>