---
endpoints:
  fetch_update:
    name: Download Update
    url: /api/v1/update/fetch
    method: GET
    description: Downloads a specified update.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: update_tag
        required: true
        type: string
        description: A valid update tag
    response: A JSON Structure of Birds pending commissions.
  updatable_birds:
    name: List Updatable Birds
    url: /api/v1/update/updatable_birds
    method: GET
    description: Retrieve a list of updatable Birds.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: A valid flock_id
    response: A JSON structure with the list of Birds that are currently updatable.
  updating_birds:
    name: List Updating Birds
    url: /api/v1/update/updating_devices
    method: GET
    description: Retrieve a list of currently updating Birds.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: ID of the flock to assign the Bird to (defaults to `flock:default`).
    response: A JSON structure with the list of Birds that are currently updating.
  list_updates:
    name: List Updates
    url: /api/v1/updates/list
    method: GET
    description: Retrieve a list of available updates.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with the list of available updates.
---

# Updates

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to view Bird related updates.

:::::

</APIEndpoints>

## Download Update

::: tip
By default, your Birds will automatically update. Downloading an update would only be useful if you've disabled remote updates on a specific Bird.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch_update">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/update/fetch \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d update_tag=EXAMPLE_UPDATE_TAG \
  -G -O -J
```

:::

::: tab "Python"

``` python
import requests
import re

url = 'https://EXAMPLE.canary.tools/api/v1/update/fetch'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'update_tag': 'EXAMPLE_UPDATE_TAG'
}

r = requests.get(url, params=payload)
filename = re.findall("filename=(.+)", r.headers["Content-Disposition"])[0]
with open(filename, 'wb') as f:
    f.write(r.content)
```

:::

::::


::: api-response
```json
{
  "result": "success",
}
```
:::

:::::

</APIDetails>

## List Updatable Birds

<APIDetails :endpoint="$page.frontmatter.endpoints.updatable_birds">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/update/updatable_birds \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/update/updatable_birds'

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
  "automatic_updates_enabled": true,
  "result": "success",
  "updatable_devices": null
}
```
:::

:::::

</APIDetails>

## List Updating Birds

<APIDetails :endpoint="$page.frontmatter.endpoints.updating_birds">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/update/updating_devices \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/update/updating_devices'

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
  "result": "success",
  "updating_devices": []
}
```
:::

:::::

</APIDetails>

## List Updates

<APIDetails :endpoint="$page.frontmatter.endpoints.list_updates">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/updates/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/updates/list'

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
  "updates": [
    {
      "description": "Fix to Canary sandbox configuration",
      "filename": "canary_2.3.1_prod.upd",
      "ignore": false,
      "supported_versions": [
        "2.3"
      ],
      "tag": "<update_tag>",
      "target_sensors": [
        "rpi3_jessie"
      ],
      "version": "2.3.1"
    },
    ...
  ]
}
```
:::

:::::

</APIDetails>