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

# Bird Notes

These are a collection of endpoints that allow you to configure Bird notes.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Get Bird Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token
NODE_ID=test_node_id

curl "https://${DOMAIN}.canary.tools/api/v1/device/note?auth_token=${AUTH_TOKEN}&node_id=${NODE_ID}"
```

:::


::: tab "Python"

``` python
import requests

DOMAIN = 'my_domain'
AUTH_TOKEN = 'test_auth_token'
NODE_ID = 'test_node_id'

r = requests.get(
    'https://{DOMAIN}.canary.tools/api/v1/device/note?auth_token={AUTH_TOKEN}&node_id={NODE_ID}'.format(
        DOMAIN=DOMAIN, AUTH_TOKEN=AUTH_TOKEN, NODE_ID=NODE_ID
    )
)
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
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token
NODE_ID=test_node_id
NOTE=test_note

curl -X POST "https://${DOMAIN}.canary.tools/api/v1/device/note/add?auth_token=${AUTH_TOKEN}&node_id=${NODE_ID}&note=${NOTE}"
```

:::


::: tab "Python"

``` python
import requests

DOMAIN = 'my_domain'
AUTH_TOKEN = 'test_auth_token'
NODE_ID = 'test_node_id'
NOTE = 'test_note'

r = requests.post(
    'https://{DOMAIN}.canary.tools/api/v1/device/note/add?auth_token={AUTH_TOKEN}&node_id={NODE_ID}&note={NOTE}'.format(
        DOMAIN=DOMAIN, AUTH_TOKEN=AUTH_TOKEN, NODE_ID=NODE_ID, NOTE=NOTE
    )
)
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
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token
NODE_ID=test_node_id

curl -X POST "https://${DOMAIN}.canary.tools/api/v1/device/note/delete?auth_token=${AUTH_TOKEN}&node_id=${NODE_ID}"
```

:::


::: tab "Python"

``` python
import requests

DOMAIN = 'my_domain'
AUTH_TOKEN = 'test_auth_token'
NODE_ID = 'test_node_id'

r = requests.post(
    'https://{DOMAIN}.canary.tools/api/v1/device/note/delete?auth_token={AUTH_TOKEN}&node_id={NODE_ID}'.format(
        DOMAIN=DOMAIN, AUTH_TOKEN=AUTH_TOKEN, NODE_ID=NODE_ID
    )
)
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