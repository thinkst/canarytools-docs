---
endpoints:
  flock_auth_token_add:
    name: Add Flock API key
    url: /api/v1/flock/auth_token/add
    method: POST
    description: Add a Flock specific API key.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: note
        required: true
        type: string
        description: A reminder that will be attached to the auth token.
    response: A JSON structure with the created API Key's info.
  flock_auth_token_remove:
    name: Remove Flock auth token
    url: /api/v1/flock/auth_token/remove
    method: POST
    description: Deletes a Flock specific auth token
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: remove_auth_token
        required: true
        type: string
        description: A valid existing Flock specific auth token.
    response: A JSON structure with the result indicator.
  flock_auth_token_list:
    name: List Flock auth tokens
    url: /api/v1/flock/auth_token/list
    method: GET
    description: Fetch list of Flock specific auth tokens
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the Flock specific auth tokens.
---

# Flock Auth Tokens

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Create a new Flock specific API auth token.

:::::

</APIEndpoints>


## Add Flock Auth Token

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_auth_token_add">

::::: slot description
Create a new Flock specific API auth token.
:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X POST https://EXAMPLE.canary.tools/api/v1/flock/auth_token/add \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -d note=EXAMPLE_NOTE
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/auth_token/add'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID',
  'note': 'EXAMPLE_NOTE'
}

r = requests.post(url, params=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "flock_api_key": {
    "auth_token": "<flock_auth_token>", 
    "created": "2023-04-14 09:23:22 UTC+0000", 
    "created_by": "Global-API-Token[key_id:ffffffff]", 
    "key_id": "<key_id>", 
    "managed_flocks": [
      "flock:<flock_id>"
    ], 
    "note": "Example Memo", 
    "watched_flocks": []
  }, 
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Remove Flock Auth Token

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_auth_token_remove">

::::: slot description
Delete an existing Flock specific API auth token.
:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X POST https://EXAMPLE.canary.tools/api/v1/flock/auth_token/remove \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -d remove_auth_token=EXAMPLE_FLOCK_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/auth_token/remove'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'remove_auth_token': 'EXAMPLE_FLOCK_AUTH_TOKEN'
}

r = requests.post(url, params=payload)

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

## List Flock Auth Tokens

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_auth_token_list">

::::: slot description
List all auth tokens assigned to a specific flock.
:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/auth_token/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/auth_token/list'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "flock_api_keys": [
    {
      "auth_token": "<Flock Auth Token>", 
      "created": "2023-04-13 08:58:39 UTC+0000", 
      "created_by": "admin@inyoni.co.za", 
      "key_id": "<Key ID>", 
      "managed_flocks": [
        "flock:<Flock ID>"
      ], 
      "note": "Example Note", 
      "watched_flocks": []
    }, 
    {
      "auth_token": "<Flock Auth Token>", 
      "created": "2023-04-14 09:28:45 UTC+0000", 
      "created_by": "Global-API-Token[key_id:ffffffff]", 
      "key_id": "<Key ID>", 
      "managed_flocks": [
        "flock:<Flock ID>"
      ], 
      "note": "Example Note", 
      "watched_flocks": []
    }
  ], 
  "result": "success"
}
```
:::

:::::

</APIDetails>