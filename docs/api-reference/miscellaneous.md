---
endpoints:
    - name: Ping
      url: /api/v1/ping
      method: GET
      description: A simple endpoint to test if the API is reachable.
      params:
        - name: auth_token
          required: true
          type: string
    - name: Test
      url: /api/v1/test
      method: POST
      description: A test
      params:
        - auth_token:
            required: true
            type: string
            description: A valid API token
---

# Miscellaneous

These are a collection of endpoints that can't be grouped into a specific category but provide useful actions to the end user.

<div class="endpoints language-">
    <div class="header">Endpoints</div>
    <div class="content">
        <div v-for="endpoint in $page.frontmatter.endpoints" class="endpoint">
            <span class="method" :class="endpoint.method">{{endpoint.method}}</span>
            <span class="url">{{endpoint.url}}</span>
        </div>
    </div>
</div>



## Ping

``{{$page.frontmatter.endpoints[0].method}} {{$page.frontmatter.endpoints[0].url}}``

{{$page.frontmatter.endpoints[0].description}}

#### Parameters

| param | type | required |
| ----- | ---- | -------- |
| {{$page.frontmatter.endpoints[0].params[0].name}}| {{$page.frontmatter.endpoints[0].params[0].type}} |  {{$page.frontmatter.endpoints[0].params[0].required}} |

#### Response

A json message with a `response` indicator.


#### Example

:::: tabs

::: tab "curl"

``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token

curl -x GET https://${DOMAIN}.canary.tools/api/v1/ping?auth_token=${AUTH_TOKEN}
```

:::


::: tab "python"

``` python
import requests

DOMAIN = "my_domain"
AUTH_TOKEN = "test_auth_token"

r = requests.get(
  'https://{DOMAIN}.canary.tools/api/v1/ping?auth_token={AUTH_TOKEN}'.format(DOMAIN=DOMAIN, AUTH_TOKEN=AUTH_TOKEN))
r.json()

```

:::

::::

