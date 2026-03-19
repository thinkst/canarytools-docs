---
endpoints:
  enable_limit:
    name: Enable Flock Canary Limit
    url: /api/v1/flock/settings/devices/limit/enable
    method: POST
    description: Enable the Canary limit for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with result indicator and the current limit.
  disable_limit:
    name: Disable Flock Canary Limit
    url: /api/v1/flock/settings/devices/limit/disable
    method: POST
    description: Disable the Canary limit for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with result indicator.
  set_limit:
    name: Set Flock Canary Limit
    url: /api/v1/flock/settings/devices/limit/set
    method: POST
    description: Set a non-negative Canary limit for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: limit
        required: true
        type: integer
        description: A non-negative integer limit to set for the Flock
    response: A JSON structure with result indicator.
  get_limit:
    name: Get Flock Canary Limit
    url: /api/v1/flock/settings/devices/limit
    method: GET
    description: Fetch the current Canary limit for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the current limit (`null` if the limit is disabled).
---

# Canary Limits

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Canary limits let you cap how many Birds can be commissioned into a given [Flock](/guide/terminology.html#flocks). The POST endpoints on this page require a global admin token. Fetching the current limit only requires access to view the Flock.

:::::

</APIEndpoints>

## Enable Flock Canary Limit

<APIDetails :endpoint="$page.frontmatter.endpoints.enable_limit">

::::: slot description

Enable Canary limits for a Flock. If the limit is already enabled, the current limit is returned unchanged.

:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/limit/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/limit/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "limit": 5,
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Disable Flock Canary Limit

<APIDetails :endpoint="$page.frontmatter.endpoints.disable_limit">

::::: slot description

Disable Canary limits for a Flock.

:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/limit/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/limit/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID'
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

## Set Flock Canary Limit

<APIDetails :endpoint="$page.frontmatter.endpoints.set_limit">

::::: slot description

Set the current Canary limit for a Flock. The `limit` must be a non-negative integer.

:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/limit/set \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -d limit=5
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/limit/set'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID',
  'limit': 5
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

## Get Flock Canary Limit

<APIDetails :endpoint="$page.frontmatter.endpoints.get_limit">

::::: slot description

Fetch the current Canary limit for a Flock.

:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/limit \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/limit'

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
  "limit": 5,
  "result": "success"
}
```
:::

:::::

</APIDetails>
