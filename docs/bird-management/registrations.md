---
endpoints:
  pending_commissions:
    name: Pending Bird Commissions
    url: /api/v1/devices/commission/pending
    method: GET
    description: Fetch a list of Birds waiting to be registered to the Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON Structure of Birds pending commissions.
  cancel_commission:
    name: Cancel Bird Commission
    url: /api/v1/device/cancel_commission
    method: POST
    description: Cancel a Bird commission.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator.
  confirm_commission:
    name: Confirm Bird Commission
    url: /api/v1/device/commission
    method: POST
    description: Confirm a Bird commission.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: flock_id
        required: false
        type: string
        description: ID of the flock to assign the Bird to (defaults to `flock:default`).
    response: JSON structure with result indicator.
  decommission_device:
    name: Decommission Bird
    url: /api/v1/device/decommission
    method: POST
    description: Decommission a Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: skip_poweroff
        required: false
        type: boolean
        description: In 2.1.3 Canaries or newer, requesting a decommission
                will first attempt to poweroff the Canary if it's online. Pass in the value
                'true' to skip the poweroff step and immediately decommission the bird (defaults to `false`).
    response: JSON structure with result indicator.
---

# Registrations

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to control registration aspects of Birds that are (or are trying to be) registered with your Console.

:::::

</APIEndpoints>

## Pending Bird Commissions

<APIDetails :endpoint="$page.frontmatter.endpoints.pending_commissions">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/devices/commission/pending \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/devices/commission/pending'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.get(url, param=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "devices": [
    {
      "autoreg_time": "1586784433.689503",
      "current_settings": "devicesettings:<device_hash>:1586784433",
      "description": "SRV Room",
      "device_id": "<node_id>",
      "device_id_hash": "<device_hash>",
      "device_version": "2.3.1",
      "id": "<node_id>",
      "live": "False",
      "name": "ExampleBird",
      "sensor": "thinkstcanary",
      "user": "<user_email>"
    }
  ],
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Cancel Bird Commission

<APIDetails :endpoint="$page.frontmatter.endpoints.cancel_commission">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/cancel_commission \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/cancel_commission'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID'
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

## Confirm Bird Commission

<APIDetails :endpoint="$page.frontmatter.endpoints.confirm_commission">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/commission \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/commission'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "node_id": "<node_id>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Decommission Bird

::: warning
Decommissioning a Bird will completely remove the Bird from your Console. This means you'll need to re-register the Bird with your Console if you want it back.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.decommission_device">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/decommission \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/decommission'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "delayed":true,
  "node_id":"<node_id>",
  "result":"success"
}
```
:::

:::::

</APIDetails>