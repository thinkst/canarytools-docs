<template>
  <div>
    <ul>
      <li v-for="endpoint in endpoints" :key="endpoint.url">
        <a :href="endpoint.link">{{endpoint.url}}</a>
      </li>      
      </a>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ListOfEndpoints',
    computed: {
      endpoints() {
        const pages = this.$site.pages;
        var endpoints = []
        pages.forEach(page => {
          if (page.frontmatter && page.frontmatter.endpoints) {
            for (var key in page.frontmatter.endpoints) {
              endpoints.push( {
                url: page.frontmatter.endpoints[key].url,
                link: `${page.regularPath}#${page.frontmatter.endpoints[key].name.toLowerCase().replace(/ /g,'-')}`
              });
            }
          }
        });
        return endpoints.sort((a,b) => {
          (a.url > b.url) ? 1 : ((b.url > a.url) ? -1 : 0);
        });
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>