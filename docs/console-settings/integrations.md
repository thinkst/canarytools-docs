---
endpoints:
  integrations:
    name: Fetch current integrations status
    url: /api/v1/settings/integrations
    method: GET
    description: Fetch the list of currently available integrations, and their status
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  integrations_rumble_enable:
    name: Enable the Rumble integration
    url: /api/v1/settings/integrations/rumble/enable
    method: POST
    description: Enable the Rumble integration in the web interface. This is useful for customers of Thinkst Canary and Rumble.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  integrations_rumble_disable:
    name: Disable the Rumble integration
    url: /api/v1/settings/integrations/rumble/disable
    method: POST
    description: Disables the Rumble integration.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
---

# Integration Settings
 
<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Integrations are enhancement to your Console which tie into third party systems. 

:::::

</APIEndpoints>

## Fetch current integrations status

<APIDetails :endpoint="$page.frontmatter.endpoints.integrations">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X GET https://EXAMPLE.canary.tools/api/v1/settings/integrations \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/integrations'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.get(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "integrations": {
    "rumble": true
  },
  "result":"success"}
}
```
:::

:::::

</APIDetails>

## Rumble integration

[Rumble](https://rumble.run) is an Asset Inventory product which provides additional information about attacker IPs. We integrate with Rumble, by providing an easy link from your Thinkst Canary Console to your Rumble Console. To make use of this integration, login into your Rumble Console, then click through from an incident in your Canary Console.

### Enable the Rumble integration

<APIDetails :endpoint="$page.frontmatter.endpoints.integrations_rumble_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/integrations/rumble/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/integrations/rumble/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
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

### Disable the Rumble integration

<APIDetails :endpoint="$page.frontmatter.endpoints.integrations_rumble_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/integrations/rumble/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/integrations/rumble/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
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
