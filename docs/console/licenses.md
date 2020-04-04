---
endpoints:
  licenses:
    name: Bird Licenses
    url: /api/v1/license
    method: GET
    description: Retrieve a summary of available Bird licenses.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure containing a list of Canary license information.
  licenses_detailed_info:
    name: Bird Licenses Detailed Information
    url: /api/v1/license/detailed/info
    method: GET
    description: Retrieve a list of Cloud / Virtual license details including limits and URLs to images.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure containing detailed Canary license information.
---
# Licenses

These are a collection of endpoints that allow you query your existing Bird licenses attached to your Console.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Bird Licenses

<APIDetails :endpoint="$page.frontmatter.endpoints.licenses"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/license \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/license'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "cloud": {
    "total": 5,
    "used": 0
  },
  "devices": {
    "total": 0,
    "used": 1
  },
  "vm": {
    "total": 5,
    "used": 0
  },
  "result": "success",
}
```
:::

## Detailed Bird License Information

<APIDetails :endpoint="$page.frontmatter.endpoints.licenses_detailed_info"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/license/detailed/info \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/license/detailed/info'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "azurecanary_details": {},
  "canaryvm_details": {
    "canaryvm_count": 0,
    "canaryvm_license_count": 5,
    "canaryvm_remaining_licenses": 5,
    "canaryvm_version_details": [
      {
        "commit": "8a06e02",
        "link": "<unique_link>",
        "ovalink": "<unique_link>",
        "password": "<password>",
        "seedlink": "<unique_link>",
        "version": "2.2.1"
      }
    ]
  },
  "cloudcanary_details": {
    "cloudcanary_count": 0,
    "cloudcanary_license_count": 5,
    "cloudcanary_remaining_licenses": 5
  },
  "gcpcanary_details": {},
  "hypervcanary_details": {},
  "result": "success"
}
```
:::