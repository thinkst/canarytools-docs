<template>
  <div>
    <p>
      <code>{{endpoint.method}} {{endpoint.url}}</code>
    </p> 
    <p>{{endpoint.description}}</p> 
    <h4>
      Required Parameters
    </h4> 
    <table>
      <thead>
        <tr>
          <th>Name</th> 
          <th>Type</th> 
          <th>Description</th>
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
    <h4>
      Optional Parameters
    </h4> 
    <table>
      <thead>
        <tr>
          <th>Name</th> 
          <th>Type</th> 
          <th>description</th>
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
  computed: {
    requiredParams() {
      return this.endpoint.params.filter(p => p.required);
    },
    optionalParams() {
      return this.endpoint.params.filter(p => !p.required);
    },
  }
}
</script>