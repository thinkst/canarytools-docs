---
endpoints:
  device_note:
    name: Get Bird Note
    url: /api/v1/device/note
    method: GET
    description: Retrieve a Bird's note.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with the Bird note.
  device_note_add:
    name: Add Bird Note
    url: /api/v1/device/note/add
    method: POST
    description: Add a note to a specified Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: note
        required: true
        type: string
        description: A note for the Bird
    response: JSON structure with the result indicator.
  device_note_delete:
    name: Delete Bird Note
    url: /api/v1/device/note/delete
    method: POST
    description: Delete the note for a specified Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with the result indicator.
---

# Notes

These are a collection of endpoints that allow you to configure Bird notes.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Get Bird Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash

curl https://EXAMPLE.canary.tools/api/v1/device/note \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/note'

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
  "note": "Example Bird Note",
  "result": "success"
}
```
:::

## Add Bird Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note_add"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash

curl https://EXAMPLE.canary.tools/api/v1/device/note/add \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -d note='Example Bird Note'
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/note/add'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID',
  'note': 'Example bird note'
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

## Delete Bird Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note_delete"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash

curl https://EXAMPLE.canary.tools/api/v1/device/note/delete \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/note/delete'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID',
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