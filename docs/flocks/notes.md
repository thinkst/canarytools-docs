---
endpoints:
  flock_note:
    name: Get Flock Note
    url: /api/v1/flock/note
    method: GET
    description: Retrieve a Flock's note.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: JSON structure with the Flock note.
  flock_note_add:
    name: Add Flock Note
    url: /api/v1/flock/note/add
    method: POST
    description: Add a note to a specified Flock.
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
        description: A note for the Flock
    response: JSON structure with the result indicator.
  flock_note_delete:
    name: Delete Flock Note
    url: /api/v1/flock/note/delete
    method: DELETE
    description: Delete the note for a specified Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: JSON structure with the result indicator.
---

# Notes

These are a collection of endpoints that allow you to configure Flock notes.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Get Flock Note

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_note">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/note \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/note'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id':'EXAMPLE_FLOCK_ID'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "note": "Example Flock Note",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Add Flock Note

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_note_add">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/note/add \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -d note='EXAMPLE_FLOCK_NOTE'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/note/add'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id':'EXAMPLE_FLOCK_ID',
  'note': 'EXAMPLE_FLOCK_NOTE'
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

## Delete Flock Note

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_note_delete">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/flock/note/delete \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/note/delete'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id':'EXAMPLE_FLOCK_ID'
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