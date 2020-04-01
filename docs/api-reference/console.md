---
endpoints:
  ping:
    name: Ping
    url: /api/v1/ping
    method: GET
    description: A simple endpoint to test if the API is reachable.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON message with a response indicator.
  features:
    name: Console Features
    url: /api/v1/console/features
    method: GET
    description: Retrieves a list of enabled and disabled Console features.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON message with result indicator and list of Console features.
---
# Console

These are a collection of endpoints that allow you to obtain information about your Console and it's configuration.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Ping

<APIDetails :endpoint="$page.frontmatter.endpoints.ping"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token

curl "https://${DOMAIN}.canary.tools/api/v1/ping?auth_token=${AUTH_TOKEN}"
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

## Console Features

::: tip
If you notice some features that aren't enabled, contact support and we'll gladly enable them for you.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.features"/>