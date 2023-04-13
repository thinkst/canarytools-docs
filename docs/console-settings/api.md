---
endpoints:
  disable:
    name: Disable the API
    url: /api/v1/settings/api/disable
    method: POST
    description: Disable the Console API.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with result indicator.
  enable:
    name: Enable the API
    url: /api/v1/settings/api/enable
    method: POST
    description: Enable the Console API.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with result indicator.
  add:
    name: Add a Global API key
    url: /api/v1/token/add
    method: POST
    description: Create a new Global API key.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: auth_token_type
        required: true
        type: string
        description: The type of auth token to created. Either 'admin' or 'read-only'.
      - name: note
        required: true
        type: string
        description: A note for the token on who/where it is used.
    response: JSON structure with the new Global API key.
  download:
    name: Download the API Configuration File
    url: /api/v1/token/download
    method: GET
    description: Download an API token configuration file for use by the Python API.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: File containing the API configuration.
  delete:
    name: Delete the API Token
    url: /api/v1/token/remove
    method: DELETE
    description: Delete the existing API token.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
---

# API

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Your Console supports having multiple API keys (auth_token). Managing these keys, as well as enabling and disabling the use of the API can be done using the following endpoints.

API keys are created with an `Admin` or `Read-Only` role, a `Key ID` to help identify them in logs, and a `Note` to remind you of its purpose. These are fixed at creation. To change these, simply create a new API Key, rotate out the use of the old API Key, and delete the old API Key.

:::::

</APIEndpoints>

## Add a Global API key

<APIDetails :endpoint="$page.frontmatter.endpoints.add">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/token/add \
  -d auth_token=EXAMPLE_AUTH_TOKEN -d auth_token_type=admin \
  -d note='Infrastructure Team'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/token/add'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'auth_token_type': 'admin',
  'note': 'Infrastructure Team'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
    "global_api_key": {
        "auth_token": "<auth_token>",
        "auth_token_type": "Admin",
        "created": "2023-04-13 19:12:15 UTC+0000",
        "created_by": "Global-API-Token[key_id:ffffffff]",
        "key_id": "<key_id>",
        "note": "Infrastructure Team"
    },
    "result": "success"
}
```
:::

:::::

</APIDetails>

## Delete the API Token

<APIDetails :endpoint="$page.frontmatter.endpoints.delete">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/token/remove \
  -d auth_token=EXAMPLE_AUTH_TOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/token/remove'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.delete(url, data=payload)

print(r.json())
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

:::::

</APIDetails>

## Disable the API

<APIDetails :endpoint="$page.frontmatter.endpoints.disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/api/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/api/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.post(url, data=payload)

print(r.json())
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

:::::

</APIDetails>

## Download the API Configuration File

<APIDetails :endpoint="$page.frontmatter.endpoints.download">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/token/download \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G -O -J
```

:::

::: tab "Python"

``` python
import requests
import re

url = 'https://EXAMPLE.canary.tools/api/v1/token/download'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.get(url, params=payload)
filename = re.findall("filename=(.+)", r.headers["Content-Disposition"])[0]
with open(filename, 'wb') as f:
    f.write(r.content)

print(r.json())
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

:::::

</APIDetails>

## Enable the API

::: tip
Since we currently only allow for a single API key, this can only be achieved by logging into the Console and enabling the setting from your Global Settings page.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.enable">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/api/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/api/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.post(url, data=payload)

print(r.json())
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

:::::

</APIDetails>
