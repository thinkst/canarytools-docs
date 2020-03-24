<template>
  <div>
    <h1>my component</h1>

    {{ $page.frontmatter.api_info.endpoint }}
    {{ $page.frontmatter.api_info.method }}
    
  </div>
</template>


<script>
export default {
  
}
</script>