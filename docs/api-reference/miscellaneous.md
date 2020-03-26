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
          description: A valid auth token
      response: A json message with a response indicator.
    - name: Test
      url: /api/v1/test
      method: POST
      description: A test
      params:
        - name: auth_token
          required: true
          type: string
          description: A valid auth token
---

# Miscellaneous

These are a collection of endpoints that can't be grouped into a specific category but provide useful actions to the end user.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Ping

<APIDetails :endpoint="$page.frontmatter.endpoints[0]"/>



#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token

curl -x GET https://${DOMAIN}.canary.tools/api/v1/ping?auth_token=${AUTH_TOKEN}
```

:::


::: tab "Python"

``` python
import requests

DOMAIN = 'my_domain'
AUTH_TOKEN = 'test_auth_token'

r = requests.get(
    'https://{DOMAIN}.canary.tools/api/v1/ping?auth_token={AUTH_TOKEN}'.format(
        DOMAIN=DOMAIN, AUTH_TOKEN=AUTH_TOKEN
    )
)
r.json()

```

:::

::::


::: api-response
```json
{
  "result": "success"
}
```
:::

