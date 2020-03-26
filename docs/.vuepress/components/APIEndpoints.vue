<template>
  <div class="endpoints language-">
    <div class="header">Endpoints</div>
    <div class="content">
        <div v-for="endpoint in $page.frontmatter.endpoints" class="endpoint">
            <span class="method" :class="endpoint.method">{{endpoint.method}}</span>
            <span class="url"><a :href="pathToEndpoint(endpoint.name)">{{endpoint.url}}</a></span>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    endpoints: {
      required: true,
      type: Array,
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