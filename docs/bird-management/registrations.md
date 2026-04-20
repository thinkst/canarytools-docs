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
  flock_pending_commissions:
    name: Pending Bird Commissions in Flock
    url: /api/v1/flock/commission/pending
    method: GET
    description: Fetch a list of Birds waiting in a specific Flock's pending queue.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: ID of the Flock whose pending queue should be returned
    response: JSON Structure of Birds pending commissions in the specified Flock.
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
  bulk_cancel_commission:
    name: Bulk Cancel Bird Commission
    url: /api/v1/device/bulk_cancel_commission
    method: POST
    description: Cancel commission for multiple pending Birds.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_ids
        required: true
        type: string
        description: A comma-separated list of valid Canary node_ids
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
        default: "'flock:default'"
        description: ID of the Flock to assign the Bird to (defaults to the [Default Flock](/guide/terminology.html#default-flock)).
    response: JSON structure with result indicator.
  assign_pending:
    name: Assign Pending Bird
    url: /api/v1/device/assign_pending
    method: POST
    description: Assign a pending Bird to a Flock's pending queue.
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
        default: "'flock:default'"
        description: ID of the Flock to assign the Bird to (defaults to the [Default Flock](/guide/terminology.html#default-flock)).
    response: JSON structure with the assigned Bird node_id.
  bulk_assign_pending:
    name: Bulk Assign Pending Birds
    url: /api/v1/device/bulk_assign_pending
    method: POST
    description: Assign multiple pending Birds to a Flock's pending queue.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_ids
        required: true
        type: string
        description: A comma-separated list of valid Canary node_ids
      - name: flock_id
        required: false
        type: string
        default: "'flock:default'"
        description: ID of the Flock to assign the Birds to (defaults to the [Default Flock](/guide/terminology.html#default-flock)).
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
        default: false
        description: In 2.1.3 Canaries or newer, requesting a decommission
                will first attempt to poweroff the Canary if it's online. Pass in the value
                'true' to skip the poweroff step and immediately decommission the bird.
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

## Pending Bird Commissions in Flock

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_pending_commissions">

::::: slot description

Fetch all Birds currently waiting in a specific [Flock pending queue](/guide/terminology.html#flock-pending-queues).

:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/commission/pending \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/commission/pending'

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
  "devices": [
    {
      "description": "",
      "device_id": "<node_id>",
      "device_version": "4.1.2",
      "name": "example-bird",
      "pending_since": 1765376090.035862,
      "sensor": "thinkstcanary"
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

## Bulk Cancel Bird Commission

<APIDetails :endpoint="$page.frontmatter.endpoints.bulk_cancel_commission">

::::: slot description

Cancel commission for multiple Birds in one request. The supplied `node_ids` must be a comma-separated list of pending Birds.

:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/bulk_cancel_commission \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_ids=EXAMPLE_NODE_ID_1,EXAMPLE_NODE_ID_2
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/bulk_cancel_commission'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_ids': 'EXAMPLE_NODE_ID_1,EXAMPLE_NODE_ID_2'
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

## Assign Pending Bird

<APIDetails :endpoint="$page.frontmatter.endpoints.assign_pending">

::::: slot description

Assign a pending Bird to a specific Flock's pending queue. If the destination Flock has available space, the Bird will be commissioned immediately.

:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/assign_pending \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -d flock_id=EXAMPLE_FLOCK_ID
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/assign_pending'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID',
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
  "node_id": "<node_id>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Bulk Assign Pending Birds

<APIDetails :endpoint="$page.frontmatter.endpoints.bulk_assign_pending">

::::: slot description

Assign multiple pending Birds to a specific Flock's pending queue in a single request.

:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/bulk_assign_pending \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_ids=EXAMPLE_NODE_ID_1,EXAMPLE_NODE_ID_2 \
  -d flock_id=EXAMPLE_FLOCK_ID
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/bulk_assign_pending'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_ids': 'EXAMPLE_NODE_ID_1,EXAMPLE_NODE_ID_2',
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
