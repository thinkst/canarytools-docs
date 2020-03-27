<template>
  <div>
    <p>
      <code>{{endpoint.method}} {{endpoint.url}}</code>
       <span class="single-endpoint">
          <div class="endpoint">
            <span class="method GET">{{endpoint.method}}</span> <span class="url">{{endpoint.url}}</span>
          </div>
       </span>
    </p> 
    <p>{{endpoint.description}}</p> 
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
    </template>
    <h4>
      Response
    </h4> 
    <p>{{endpoint.response}}</p> 
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