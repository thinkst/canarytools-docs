---
endpoints:
  reboot_device:
    name: Reboot Bird
    url: /api/v1/device/reboot
    method: POST
    description: Schedule a Bird reboot.
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
  update_device:
    name: Update Bird
    url: /api/v1/device/update
    method: POST
    description: Schedule a Bird update.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: update_tag
        required: true
        type: string
        description: A tag of an update to push to Bird
      - name: req_len
        required: false
        type: int
        description: Query length for the DNS update (defaults to the Console-specified setting)
      - name: use_console_url
        required: false
        type: boolean
        description: If True, instructs the Bird to update over HTTP from the Console
      - name: url
        required: false
        type: string
        description: A url to download the update from (using HTTP)
    response: JSON structure with the result indicator and `bundle_tag` if successful.
---

# Operations

These are a collection of endpoints that allow you to manage your Bird remotely.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Reboot Bird

<APIDetails :endpoint="$page.frontmatter.endpoints.reboot_device">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/reboot \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID

```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/reboot'

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


## Update Bird

::: tip
By default, your Birds will automatically update. This endpoint is only useful if you have disabled automatic updates.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.update_device">

  ::: slot optional-parameters-notes

  ::: warning
  Specifying `url` or `use_console_url` will allow the Bird to update over HTTP. The update will complete a lot quicker, but there is a chance that the connection will be blocked by your firewall.
  :::

  :::

  ::::: slot example

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab "cURL"

  ``` bash
  curl https://EXAMPLE.canary.tools/api/v1/device/update \
    -d auth_token=EXAMPLE_AUTH_TOKEN \
    -d node_id=EXAMPLE_NODE_ID \
    -d update_tag=EXAMPLE_UPDATE_TAG
  ```

  :::


  ::: tab "Python"

  ``` python
  import requests

  url = 'https://EXAMPLE.canary.tools/api/v1/device/update'

  payload = {
    'auth_token': 'EXAMPLE_AUTH_TOKEN',
    'node_id': 'EXAMPLE_NODE_ID',
    'update_tag': 'EXAMPLE_UPDATE_TAG'
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