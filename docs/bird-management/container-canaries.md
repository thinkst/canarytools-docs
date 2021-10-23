---
endpoints:
  containercanary_images:
    name: List Container Canary Images
    url: /api/v1/containercanary/images
    method: GET
    description: Returns a list of available Container Canary Images
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON Structure containing a list of available Container Canary images.
---

# Container Canaries

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints related to Container Canaries. Currently, these relate to **Docker** Canaries.

:::::

</APIEndpoints>

## List Container Canary Images

<APIDetails :endpoint="$page.frontmatter.endpoints.containercanary_images">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/containercanary/images \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/containercanary/images'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "docker": [],
  "result": "success"
}
```
:::

:::::

</APIDetails>

