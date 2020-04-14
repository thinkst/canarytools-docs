---
endpoints:
  cancel:
    name: Cancel Bundle
    url: /api/v1/bundle/cancel
    method: POST
    description: Cancel a specified data bundle.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: bundle_tag
        required: true
        type: string
        description: A valid data bundle tag
    response: A JSON structure containing bundle information.
  info:
    name: Fetch Bundle Information
    url: /api/v1/bundle/info
    method: GET
    description: Fetch a specified data bundle status.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: bundle_tag
        required: true
        type: string
        description: A valid data bundle tag
    response: A JSON structure containing bundle information.
  list:
    name: List Bird Bundles
    url: /api/v1/bundles/list
    method: GET
    description: Fetch a list of data bundles for a given Bird
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid node_id
      - name: in_progress_only
        required: false
        type: boolean
        description: Only return bundles that are currently in progress or waiting
    response: A JSON structure containing bundle information.
  list_all:
    name: List All Bundles
    url: /api/v1/bundles/list/all
    method: GET
    description: Fetch a list of data bundles for all Birds a user can manage.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: in_progress_only
        required: false
        type: boolean
        description: Only return bundles that are currently in progress or waiting
    response: A JSON structure containing bundle information.
---

# Bundles

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

When pushing updates or settings to a Bird, we bundle the data up, chunk it, and send it through to the Bird. 

You can query the progress of the push by querying the bundle status. Similarly, we can cancel a push by cancelling the bundle.

:::::

</APIEndpoints>

## Cancel Bundle

<APIDetails :endpoint="$page.frontmatter.endpoints.cancel">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/bundle/cancel \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d bundle_tag=EXAMPLE_BUNDLE_TAG
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/bundle/cancel'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'bundle_tag': 'EXAMPLE_BUNDLE_TAG'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "action": "cancelled",
  "bundle_tag": "<bundle_tag",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Fetch Bundle Information

<APIDetails :endpoint="$page.frontmatter.endpoints.info">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/bundle/info \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d bundle_tag=EXAMPLE_BUNDLE_TAG \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/bundle/info'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'bundle_tag': 'EXAMPLE_BUNDLE_TAG'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "bundle_size": 4822,
  "bytes_copied": 5200,
  "checksum": "b2715b845247d599b3d6daee",
  "created_time": 1586855802,
  "created_time_pretty": "17 seconds",
  "ended_time": 1586855812,
  "ended_time_pretty": "7 seconds",
  "name": "Settings push",
  "node_id": "<node_id>",
  "req_len": "400",
  "settings_key": "databundle:settings:d11f0f",
  "started_time": 1586855810,
  "started_time_pretty": "9 seconds",
  "state": "ended",
  "tag": "<bundle_tag>",
  "type_": "settings",
  "updated_time": 1586855812,
  "updated_time_pretty": "7 seconds"
}
```
:::

:::::

</APIDetails>

## List All Bundles

<APIDetails :endpoint="$page.frontmatter.endpoints.list_all">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/bundles/list/all \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/bundles/list/all'

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
  "bundles": [
    {
      "bundle_size": 4822,
      "bytes_copied": 0,
      "checksum": "b2715b845247d599b3d6daee",
      "created_time": 1586855479,
      "ended_time": null,
      "name": "Settings push",
      "node_id": "<node_id>",
      "req_len": "400",
      "settings_key": "databundle:settings:dd9245",
      "started_time": null,
      "state": "waiting",
      "tag": "<bundle_tag>",
      "type_": "settings",
      "updated_time": null
    }
  ],
  "result": "success"
}
```
:::

:::::

</APIDetails>

## List Bird Bundles

<APIDetails :endpoint="$page.frontmatter.endpoints.list">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/bundles/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/bundles/list'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "bundles": [
    {
      "bundle_size": 4822,
      "bytes_copied": 0,
      "checksum": "b2715b845247d599b3d6daee",
      "created_time": 1586855600,
      "ended_time": null,
      "name": "Settings push",
      "node_id": "<node_id>",
      "req_len": "400",
      "settings_key": "databundle:settings:ce9c3c",
      "started_time": null,
      "state": "waiting",
      "tag": "<bundle_tag>",
      "type_": "settings",
      "updated_time": null
    }
  ],
  "result": "success"
}
```
:::

:::::

</APIDetails>