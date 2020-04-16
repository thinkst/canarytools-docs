---
endpoints:
  ignore_ip_disable:
    name: Disable Ignore List
    url: /api/v1/flock/settings/whitelisting/ip/disable
    method: POST
    description: Disable IP ignoring for a Flock.
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
  ignore_ip_enable:
    name: Enable Ignore List
    url: /api/v1/flock/settings/whitelisting/ip/enable
    method: POST
    description: Enable IP ignoring for a Flock.
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
  ignore_ip_inherit_global_disable:
    name: Disable Inherit From Global
    url: /api/v1/flock/settings/whitelisting/ip/inherit_global/disable
    method: POST
    description: Disable inheriting the Global IP Ignore List.
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
  ignore_ip_inherit_global_enable:
    name: Enable Inherit From Global
    url: /api/v1/flock/settings/whitelisting/ip/inherit_global/enable
    method: POST
    description: Enable inheriting the Global IP Ignore List.
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
  ignore_ip_is_enabled:
    name: Check if IP Ignoring is Enabled
    url: /api/v1/flock/settings/whitelisting/ip/is_enabled
    method: GET
    description: Check if IP ignoring is enabled for a Flock.
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
  ignore_ip_is_global:
    name: Check if IP Ignoring is Global
    url: /api/v1/flock/settings/whitelisting/ip/is_global
    method: GET
    description: Check if IP ignoring is set to Global for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the Global state.
  ignore_ip_is_ip_ignored:
    name: Check if IP is Ignored
    url: /api/v1/flock/settings/whitelisting/ip/is_ip_whitelisted
    method: GET
    description: Check if a hostname is ignored in a Flock's Ignore List.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: src_ip
        required: false
        type: string
        description: The source IP to check
      - name: dst_port
        required: true
        type: int
        description: The destination port to check
    response: A JSON structure with the ignored state.
  ignore_ip_sanitized:
    name: List Ignored IPs
    url: /api/v1//flock/settings/whitelisting/ip/sanitized
    method: GET
    description: Fetch a sanitized list of ignored IPs for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with a list of ignored IPs for a Flock.
  ignore_ip_save:
    name: Set Ignored IPs
    url: /api/v1/flock/settings/whitelisting/ip/save
    method: POST
    description: Set the list of ignored IPs for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: whitelist
        required: false
        type: string
        description: A newline separated list of IPs and ports to ignore
      - name: clear
        required: false
        type: boolean
        description: If true, clears the ignore list
    response: A JSON structure with result indicator.
  ignore_ip_string:
    name: Fetch Unsanitized Ignore List
    url: /api/v1/flock/settings/whitelisting/ip/string
    method: GET
    description: Fetch the unsanitized ignore list string. 
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the unsanitized list.
  ignore_ip_use_global:
    name: Set Ignore List to Global
    url: /api/v1/flock/settings/whitelisting/ip/use_global
    method: POST
    description: Set a Flock's ignore IP list to use Global.
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
  ignore_ip_ignore_ip_port:
    name: Add IP and Port to Ignore List
    url: /api/v1/flock/settings/whitelisting/ip/whitelist_ip_port
    method: POST
    description: Add an IP and optional Port to the Ignore List.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: src_ip
        required: true
        type: string
        description: The source IP to ignore
      - name: dst_port
        required: int
        type: false
        description: The destination port to ignore
    response: A JSON structure with result indicator.
---

# Default Ignore List

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

If you want to ignore traffic from a specific IP address and/or traffic hitting a specific port on your Birds, you can use these endpoints.

There are times when you see alerts that are generated from known, expected IPs (such as scanners). In cases like this, you can add the known IP to an Ignore List which allows your Flock to filter traffic and only alerted you on unexpected incidents.

::: tip
These endpoints will set the Ignore Lists for specified Flocks. For Globally defined Ignore lists, you can take a look at the [Console Settings](/console-settings/ignore-lists.html#default-ignore-lists).
:::

:::::

</APIEndpoints>


## Add IP and Port to Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_ignore_ip_port">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/whitelist_ip_port \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -d src_ip=EXAMPLE_SOURCE_IP \
  -d dst_port=EXAMPLE_DESTINATION_PORT
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/whitelist_ip_port'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID',
  'src_ip': 'EXAMPLE_SOURCE_IP',
  'dst_port': EXAMPLE_DESTINATION_PORT
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

## Check if IP Ignoring is Enabled

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_is_enabled">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/is_enabled \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/is_enabled'

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
  "is_enabled": true,
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Check if IP Ignoring is Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_is_global">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/is_global \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/is_global'

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
  "is_global": true,
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Check if IP is Ignored

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_is_ip_ignored">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/is_ip_whitelisted \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -d dst_port=EXAMPLE_DESTINATION_PORT \
  -d src_ip=EXAMPLE_SOURCE_IP \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/is_ip_whitelisted'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID',
  'dst_port': EXAMPLE_DESTINATION_PORT,
  'src_ip': 'EXAMPLE_SOURCE_IP'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "is_whitelist_enabled": true,
  "is_whitelisted": true,
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Disable IP Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/disable'

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

## Enable IP Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/enable'

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

## Fetch Unsanitized Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_string">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/string \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/string'

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
  "result": "success",
  "whitelist": "<ip_address>:<port>"
}
```
:::

:::::

</APIDetails>

## Inherit Global List

By default, enabling the IP Ignore List for a Flock will ignore the Global settings and only use the Flock's settings. You can optionally chose to allow the Flock to set it's own custom Ignore List and still inherit from the Global IP Ignore List.

### Disable Inherit From Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_inherit_global_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/inherit_global/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/inherit_global/disable'

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

### Enable Inherit From Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_inherit_global_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/inherit_global/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/inherit_global/enable'

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

## List Ignored IPs

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_sanitized">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1//flock/settings/whitelisting/ip/sanitized \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1//flock/settings/whitelisting/ip/sanitized'

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
  "result": "success",
  "whitelist": [
    {
      "<ip_address>": {
        "both": [
          <port>
        ]
      }
    },
    []
  ]
}
```
:::

:::::

</APIDetails>

## Set Ignored IPs

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_save">

::: slot optional-parameters-notes

::: tip
At least one of the optional parameters is required.
:::

:::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/save \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -d whitelist=EXAMPLE_IP_LIST
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/save'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID',
  'whitelist': 'EXAMPLE_IP_LIST'
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

## Set Ignore List to Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_use_global">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/use_global \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/ip/use_global'

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