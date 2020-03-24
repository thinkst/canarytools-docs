---
endpoints:
    - name: Ping
      url: /api/v1/ping
      method: get
      description: A simple request to test if the API is reachable
      params:
        - auth_token:
            required: true
            type: string
    - name: Test
      url: /api/v1/test
      method: post
      description: A test
      params:
        - auth_token:
            required: true
            type: string
            description: A valid API token
---

# API Reference

The API Reference includes a detailed look at each endpoint.

```
<span v-for="i in $page.frontmatter.endpoints">{{ i }} </span>
```

<div class="endpoints language-">
    <div class="header">Endpoints</div>
    <div class="content">
        <div v-for="endpoint in $page.frontmatter.endpoints" class="endpoint">
            <span class="method" :class="endpoint.method">{{endpoint.method}}</span>
            <span class="url">{{endpoint.url}}</span>
        </div>
    </div>
</div>

