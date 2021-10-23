---
endpoints:
  cloudcanary_images:
    name: List Cloud Canary Images
    url: /api/v1/cloudcanary/images
    method: GET
    description: Returns a list of available Cloud Canary Images
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON Structure containing a list of available Cloud Canary images.
---

# Cloud Canaries

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints related to Cloud Canaries. Currently, this includes **Azure**, **AWS EC2**, and **GCP** Canaries.

:::::

</APIEndpoints>

## List Cloud Canary Images

<APIDetails :endpoint="$page.frontmatter.endpoints.cloudcanary_images">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/cloudcanary/images \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/cloudcanary/images'

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
  "aws": {},
  "result": "success"
}
```
:::

:::::

</APIDetails>

