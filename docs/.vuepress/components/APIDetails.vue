<template>
  <div>
    <p>
      <code>{{endpoint.method}} {{endpoint.url}}</code>
    </p> 
    <p>{{endpoint.description}}</p> 
    <h4 id="parameters"><a href="#parameters" class="header-anchor">#</a> Parameters</h4> 
    <table>
      <thead>
        <tr>
          <th>param</th> 
          <th>type</th> 
          <th>required</th>
          <th>description</th>
        </tr>
      </thead> 
      <tbody>
        <tr v-for="param in endpoint.params" :key="endpoint.name + param.name">
          <td>{{param.name}}</td>
          <td>{{param.type}}</td> 
          <td>{{param.required}}</td> 
          <td>{{param.description}}</td> 
        </tr>
      </tbody>
    </table>
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
}
</script>