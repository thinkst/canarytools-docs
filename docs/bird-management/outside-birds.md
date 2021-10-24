---
endpoints:
  incidents_summary:
    name: Alert Count Summary
    url: /api/v1/incidents/outside_bird/summary
    method: GET
    description: Retrieves a summary of alert counts for the Canary.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: The node_id of a device
    response: A JSON Structure of alert count information.
  incidents_service_count:
    name: Incidents Count Per Service
    url: /api/v1/incidents/outside_bird/services/count
    method: GET
    description: Retrieve a list of targeted service counts.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: The node_id of a device
    response: A JSON structure with the counts for each targeted service.
  incidents_search:
    name: Outside Bird Alerts
    url: /api/v1/incidents/outside_bird/search
    method: GET
    description: Retrieve a paginated list of Outside Bird Alerts.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_ids
        required: false
        type: string
        description: A comma-separated list of device node_ids
      - name: limit
        required: false
        type: int
        description: Parameter used to initiate cursor pagination. The limit is used to specify
                    the page sizes returned when iterating through the pages representing all incidents
      - name: cursor
        required: false
        type: string
        description: The cursor string retrieved from the cursor element returned along with a page
                     while doing pagination
    response: A JSON structure with a paginated list of Outside Bird Alert Source IP addresses and cursor object.
  incident_delete:
    name: Delete Outside Bird Alert
    url: /api/v1/incident/outside_bird/delete
    method: DELETE
    description: Deletes an Outside Bird Alert
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: The node_id of a device
      - name: src_ip
        required: true
        type: string
        description: The IP address of the alert
    response: JSON structure with result indicator
  incidents_delete:
    name: Delete All Outside Bird Alerts
    url: /api/v1/incidents/outside_bird/delete
    method: DELETE
    description: Deletes all Outside Bird Alerts for a Canary
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: The node_id of a device
    response: JSON structure with result indicator and the number of source IPs from deleted incidents.
  outside_bird_enable:
    name: Make a Canary an Outside Bird
    url: /api/v1/device/outside_bird/enable
    method: POST
    description: Makes a Canary an Outside Bird
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: The node_id of a device
    response: JSON structure with result indicator
  outside_bird_disable:
    name: Make an Outside Bird a standard Canary
    url: /api/v1/device/outside_bird/disable
    method: POST
    description: Makes an Outside Bird a standard Canary
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: The node_id of a device
    response: JSON structure with result indicator
  outside_bird_download:
    name: Download Outside Bird Alerts
    url: /api/v1/incidents/outside_bird/download/json
    method: GET
    description: Downloads Outside Bird Alerts
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: The node_id of a device
      - name: email
        required: true
        type: string
        description: If their are more than 50,000 alerts we will email an archive of the alerts after ~15 minutes.
    response: An archive of the alerts.
  outside_bird_webhooks:
    name: List Outside Bird Webhooks
    url: /api/v1/device/outside_bird/webhooks
    method: GET
    description: List all Outside Bird Webhooks
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with a list of Outside Bird webhooks
  outside_bird_webhook_add:
    name: Add Outside Bird Webhook
    url: /api/v1/device/outside_bird/webhooks/add
    method: POST
    description: Adds an Outside Bird Webhook
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: url
        required: true
        type: string
        description: The URL of the configured webhook
    response: JSON structure with a result indicator
  outside_bird_webhook_remove:
    name: Remove Outside Bird Webhook
    url: /api/v1/device/outside_bird/webhooks/remove
    method: DELETE
    description: Removes an Outside Bird Webhook
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: url
        required: true
        type: string
        description: The URL of the configured webhook
    response: JSON structure with a result indicator
  outside_bird_webhook_test:
    name: Test Outside Bird Webhook
    url: /api/v1/device/outside_bird/webhooks/test
    method: POST
    description: Tests an Outside Bird Webhook
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: url
        required: true
        type: string
        description: The URL of the configured webhook
    response: JSON structure with a result indicator
---

# Outside Birds

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Canaries marked as Outside Birds can be exposed to the public internet without the risk of missing the high quality signals from your local Canaries.

The major difference between an Outside Bird and a normal Canary is how they generate alerts.

Outside Bird alerts only store the IP address of the attacker and a tally of the number of times any service was targeted. These alerts will not appear on the Canary Console as an incident and are instead accessed from the Canary modal or the API.

Additionally, Outside Birds do not send alert notifications (Email, SMS etc) to users, with the exception of separately configured webhooks. 

:::::

</APIEndpoints>

## Alert Count Summary

<APIDetails :endpoint="$page.frontmatter.endpoints.incidents_summary">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/outside_bird/summary \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/outside_bird/summary'

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
    "count": 2099,
    "result": "success"
}
```
:::

:::::

</APIDetails>

## Incidents Count Per Service

<APIDetails :endpoint="$page.frontmatter.endpoints.incidents_service_count">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/outside_bird/services/count \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/outside_bird/services/count'

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
  "counts": [
    {
      "count": 2694,
      "service": "SSH Login Attempt"
    },
    {
      "count": 432,
      "service": "SIP Request"
    },
    {
      "count": 370,
      "service": "Telnet Login Attempt"
    },
  ],
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Outside Bird Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.incidents_search">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/outside_bird/search \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_ids=EXAMPLE_NODE_IDS \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/outside_bird/search'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_ids': 'EXAMPLE_NODE_IDS'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "cursor": {
    "next": "MToxMDM5OTcwMTY6MTAwOjU6MjoyMg==",
    "next_link": "https://EXAMPLE.canary.tools/api/v1/incidents/outside_bird/search?cursor=MToxMDM5OTcwMTY6MTAwOjU6MjoyMg%3D%3D&auth_token=EXAMPLE_AUTH_TOKEN&node_ids=EXAMPLE_NODE_IDS",
    "prev": null,
    "prev_link": null
  },
  "page_num": 1,
  "page_total": 1,
  "result": "success",
  "src_ips": [
    {
      "count": 7,
      "incident_counts": {
        "SSH Login Attempt": 7
      },
      "ip_address": "EXAMPLE_IP_ADDRESS",
      "node_id": "EXAMPLE_NODE_ID"
    },
    {
      "count": 1,
      "incident_counts": {
        "SSH Login Attempt": 1
      },
      "ip_address": "EXAMPLE_IP_ADDRESS",
      "node_id": "EXAMPLE_NODE_ID"
    },
  ]
}
```
:::

:::::

</APIDetails>

## Delete Outside Bird Alert

<APIDetails :endpoint="$page.frontmatter.endpoints.incident_delete">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/incident/delete \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -d src_ip=EXAMPLE_SRC_IP
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incident/delete'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID',
  'src_ip': 'EXAMPLE_SRC_IP'
}

r = requests.delete(url, data=payload)

print(r.json())
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

## Delete All Outside Bird Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.incidents_delete">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/incidents/delete \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/delete'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID'
}

r = requests.delete(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "deleted": 2, 
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Make a Canary an Outside Bird

<APIDetails :endpoint="$page.frontmatter.endpoints.outside_bird_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/outside_bird/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/outside_bird/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID'
}

r = requests.post(url, params=payload)

print(r.json())
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

## Make an Outside Bird a Standard Canary

<APIDetails :endpoint="$page.frontmatter.endpoints.outside_bird_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/outside_bird/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/outside_bird/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID'
}

r = requests.post(url, params=payload)

print(r.json())
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

## Download Outside Bird Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.outside_bird_download">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/outside_bird/download/json \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -G -O -J
```

:::

::: tab "Python"

``` python
import requests
import re

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/outside_bird/download/json'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID'
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

## Webhooks

Outside Birds do not send notifications to the same channels that regular birds do - due to the large quantity of alerts they generate.

If you need a way to consume the alerts in real-time, add a hook and we'll send you alerts as they arrive!

### List Outside Bird Webhooks

<APIDetails :endpoint="$page.frontmatter.endpoints.outside_bird_webhooks">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/outside_bird/webhooks \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/outside_bird/webhooks'

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
    "webhooks": [
        "https://siem.example.com/outside-bird-alerts",
    ]
}
```
:::

:::::

</APIDetails>

### Add Outside Bird Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.outside_bird_webhook_add">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/outside_bird/webhooks/add \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d url=EXAMPLE_URL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/outside_bird/webhooks/add'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'url': 'EXAMPLE_URL'
}

r = requests.post(url, data=payload)

print(r.json())
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

### Remove Outside Bird Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.outside_bird_webhook_remove">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/device/outside_bird/webhooks/remove \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d url=EXAMPLE_URL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/outside_bird/webhooks/remove'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'url': 'EXAMPLE_URL'
}

r = requests.delete(url, data=payload)

print(r.json())
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

### Test Outside Bird Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.outside_bird_webhook_test">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/outside_bird/webhooks/test \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d update_tag=EXAMPLE_URL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/outside_bird/webhooks/test'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'url': 'EXAMPLE_URL'
}

r = requests.post(url, data=payload)

print(r.json())
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

