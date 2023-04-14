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
    url: /api/v1/auth_token/add
    deprecated_url: /api/v1/token/add
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
        description: A note for the Global API key on who/where it is used.
    response: JSON structure with the new Global API key.
  list:
    name: List the Global API Keys
    url: /api/v1/auth_token/list
    method: GET
    description: List the Global API Keys in use
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  download:
    name: Download the API Configuration File
    url: /api/v1/auth_token/download
    endpoint_deprecated: true
    deprecated_url: /api/v1/token/download
    method: GET
    description: Download a Global API key configuration file for use by the Python API.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: key_id
        required: true
        type: string
        description: The key_id of Global API key to download.
    response: File containing the API configuration.
  delete:
    name: Delete a Global API key
    url: /api/v1/auth_token/remove
    deprecated_url: /api/v1/token/remove
    method: DELETE
    description: Delete an existing Global API key.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: key_id
        required: true
        type: string
        description: The key_id of Global API key to remove
    response: A JSON structure with result indicator.
---

# API

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Your Console supports having multiple API keys (auth_token).

API keys are created with an `Admin` or `Read-Only` role and a `Note` to remind you of its purpose. These are fixed at creation. To change these, simply create a new API Key, rotate out the use of the old API Key, and delete the old API Key. Additionally a `Key ID` will be generated for each API Key that is used to help identify the key used in logs, and for use in key management endpoints.

:::::

</APIEndpoints>

## Add a Global API key

<APIDetails :endpoint="$page.frontmatter.endpoints.add">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/auth_token/add \
  -d auth_token=EXAMPLE_AUTH_TOKEN -d auth_token_type=admin \
  -d note='Infrastructure Team'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/auth_token/add'

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

## List the Global API Keys

<APIDetails :endpoint="$page.frontmatter.endpoints.list">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/auth_token/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests
import re

url = 'https://EXAMPLE.canary.tools/api/v1/auth_token/list'

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
    "global_api_keys": [
        {
            "auth_token": "<auth_token>",
            "auth_token_type": "Admin",
            "created": "2023-04-13 19:12:15 UTC+0000",
            "created_by": "Global-API-Token[key_id:ffffffff]",
            "key_id": "<key_id>",
            "note": "Infrastructure Team"
        }
    ],
    "result": "success"
}
```
:::

:::::

</APIDetails>

## Delete a Global API key

<APIDetails :endpoint="$page.frontmatter.endpoints.delete">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/auth_token/remove \
  -d auth_token=EXAMPLE_AUTH_TOKEN -d key_id=EXAMPLE_KEY_ID
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/auth_token/remove'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'key_id': 'EXAMPLE_KEY_ID'
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

## Download the API Configuration File

<APIDetails :endpoint="$page.frontmatter.endpoints.download">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/auth_token/download \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G -O -J
```

:::

::: tab "Python"

``` python
import requests
import re

url = 'https://EXAMPLE.canary.tools/api/v1/auth_token/download'

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

## Enable the API

::: tip
If the API is not already enabled this can only be achieved by logging into the Console and enabling the setting from your Global Settings page.
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
