---
endpoints:
  flock_settings_auto_commission_enable:
    name: Enable Flock Auto Commission
    url: /api/v1/flock/settings/devices/autocommission/enable
    method: POST
    description: Enable the Auto Commission feature on a given Flock.
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
  flock_settings_auto_commission_disable:
    name: Disable Flock Auto Commission
    url: /api/v1/flock/settings/devices/autocommission/disable
    method: POST
    description: Disable the Auto Commission feature on a given Flock.
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
  flock_settings_auto_commission_token_fetch:
    name: Retrieve Flock Auto Commission Token
    url: /api/v1/flock/settings/devices/autocommission/token
    method: GET
    description: Fetch the Auto Commission token for a particular flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the enabled state.
  flock_settings_auto_commission_token_generate:
    name: Generate a Flock Auto Commission Token
    url: /api/v1/flock/settings/devices/autocommission/generate
    method: GET
    description: Create a new Auto Commission Token for a Flock (discarding the previous token).
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the enabled state.
  flock_settings_auto_commission_token_remove:
    name: Remove a Flock Auto Commission Token
    url: /api/v1/flock/settings/devices/autocommission/remove_token
    method: DELETE
    description: Remove token and disable Auto Commission on a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the enabled state.
---

# Auto Commissioning

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Certain Canary platform types (currently Container Canaries) support Auto Commissioning into a Flock. Auto Commissioning means that when the Canary starts up, it knows which Flock it should be commissioned into, and does not require any manual intervention to have the bird show up in a Flock. This is in contrast to other platforms which still require a manual commission step.

Auto Commission is entirely optional, and configurable on a per-Flock basis.

:::::

</APIEndpoints>

## Enable Flock Auto Commission

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_settings_auto_commission_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/autocommission/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/autocommission/enable'

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
  "autocommission_token": "<Auto Commission Token>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Disable Flock Auto Commission

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_settings_auto_commission_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/autocommission/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/autocommission/disable'

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

## Retrieve Flock Auto Commission Token

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_settings_auto_commission_token_fetch">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/autocommission/token \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/autocommission/token'

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
  "autocommission_token": "<Flock Auto Commission Token>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Generate a Flock Auto Commission Token

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_settings_auto_commission_token_generate">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/autocommission/generate_token \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/autocommission/generate_token'

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
  "autocommission_token": "<Flock Auto Commission Token>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Remove a Flock Auto Commission Token

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_settings_auto_commission_token_remove">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/autocommission/remove_token \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/devices/autocommission/remove_token'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID'
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