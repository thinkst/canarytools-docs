---
endpoints:
  acknowledge:
    name: Acknowledge Incident
    url: /api/v1/incident/acknowledge
    method: POST
    description: Acknowledge a specified incident.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: incident
        required: true
        type: string
        description: A valid incident key
    response: JSON structure with result indicator.
  delete:
    name: Acknowledge Incident
    url: /api/v1/incident/delete
    method: DELETE
    description: Deletes a specified incident.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: incident
        required: true
        type: string
        description: A valid incident key
    response: JSON structure with result indicator.
  fetch:
    name: Fetch Incident
    url: /api/v1/incident/fetch
    method: GET
    description: Retrieve a specified incident.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: incident
        required: false
        type: string
        description: A valid incident key
      - name: hash_id
        required: false
        type: string
        description: A valid incident hash
      - name: extended_details
        required: false
        type: boolean
        description: Return all incident fields
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a> to specify the timezone
    response: JSON structure containing the specified incident.
  unacknowledge:
    name: Acknowledge Incident
    url: /api/v1/incident/unacknowledge
    method: POST
    description: Unacknowledge a specified incident.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: incident
        required: true
        type: string
        description: A valid incident key
    response: JSON structure with result indicator.
  acknowledge_incidents:
    name: Acknowledge Multiple Incidents
    url: /api/v1/incidents/acknowledge
    method: POST
    description: Acknowledge multiple incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: Acknowledge incidents for a specific flock
      - name: node_id
        required: false
        type: string
        description: Acknowledge incidents for a specific node
                     (cannot be used in conjunction with src_host)
      - name: src_host
        required: false
        type: string
        description: Acknowledge incidents for a specific source IP address
                     (cannot be used in conjunction with src_host)
      - name: older_than
        required: false
        type: string
        description: Acknowledge incidents older than the
                     provided period. Periods are "[quantity][unit]", where
                     "[unit]" is one of 'h', 'd', 'w' (hours, days or weeks)
                     e.g. 1h or 1d or 1w
      - name: filter_str
        required: false
        type: string
        description: The string used when searching for incidents to be acknowledged.
                     This string will attempt to match against incident details such
      - name: filter_logtypes
        required: false
        type: string
        description: The logtype of the incidents to be acknowledged
    response: JSON structure with result indicator.
  delete_incidents:
    name: Delete Multiple Incidents
    url: /api/v1/incidents/delete
    method: POST
    description: Delete multiple acknowledged incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: Delete incidents for a specific flock
      - name: node_id
        required: false
        type: string
        description: Delete incidents for a specific node
                     (cannot be used in conjunction with src_host)
      - name: src_host
        required: false
        type: string
        description: Delete incidents for a specific source IP address
                     (cannot be used in conjunction with src_host)
      - name: older_than
        required: false
        type: string
        description: Delete incidents older than the
                     provided period. Periods are "[quantity][unit]", where
                     "[unit]" is one of 'h', 'd', 'w' (hours, days or weeks)
                     e.g. 1h or 1d or 1w
      - name: filter_str
        required: false
        type: string
        description: The string used when searching for incidents to be deleted.
                     This string will attempt to match against incident details such
      - name: filter_logtypes
        required: false
        type: string
        description: The logtype of the incidents to be deleted
      - name: include_unacknowledged
        required: false
        type: boolean
        description: Include unacknowledged incidents when deleting
    response: JSON structure with result indicator.
  unacknowledge_incidents:
    name: Unacknowledge Multiple Incidents
    url: /api/v1/incidents/unacknowledge
    method: POST
    description: Unacknowledge multiple incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: Unacknowledge incidents for a specific flock
      - name: node_id
        required: false
        type: string
        description: Unacknowledge incidents for a specific node
                     (cannot be used in conjunction with src_host)
      - name: src_host
        required: false
        type: string
        description: Unacknowledge incidents for a specific source IP address
                     (cannot be used in conjunction with src_host)
      - name: older_than
        required: false
        type: string
        description: Unacknowledge incidents older than the
                     provided period. Periods are "[quantity][unit]", where
                     "[unit]" is one of 'h', 'd', 'w' (hours, days or weeks)
                     e.g. 1h or 1d or 1w
      - name: filter_str
        required: false
        type: string
        description: The string used when searching for incidents to be unacknowledged.
                     This string will attempt to match against incident details such
      - name: filter_logtypes
        required: false
        type: string
        description: The logtype of the incidents to be unacknowledged
    response: JSON structure with result indicator.
---

# Actions

These are a collection of endpoints that allow you to interact with incidents.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Acknowledge Incident

<APIDetails :endpoint="$page.frontmatter.endpoints.acknowledge">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incident/acknowledge \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d incident=EXAMPLE_INCIDENT_KEY 
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incident/acknowledge'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'incident':'EXAMPLE_INCIDENT_KEY'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "action": "acknowledged",
  "key": "<incident_key>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Delete Incident

<APIDetails :endpoint="$page.frontmatter.endpoints.delete">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/incident/delete \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d incident=EXAMPLE_INCIDENT_KEY 
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incident/delete'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'incident':'EXAMPLE_INCIDENT_KEY'
}

r = requests.delete(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "action": "deleted",
  "key": "<incident_key>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Fetch Incident

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch">

::: slot optional-parameters-notes

::: tip
Either `incident` or `hash_id` is required.
:::

:::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incident/fetch \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d incident=EXAMPLE_INCIDENT_KEY \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incident/fetch'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'incident':'EXAMPLE_INCIDENT_KEY'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "incident": {
    "acknowledged": "False",
    "created": "1586260854",
    "created_std": "2020-04-07 12:00:54 UTC+0000",
    "description": "Telnet Login Attempt",
    "dst_host": "<destination_ip>",
    "dst_port": "23",
    "events": [
      {
        "PASSWORD": "<password>",
        "TERMSIZE": "91x44",
        "TERMTYPE": "XTERM-256COLOR",
        "USERNAME": "<username>",
        "timestamp": 1586260854,
        "timestamp_std": "2020-04-07 12:00:54 UTC+0000"
      },
    ],
    "events_count": "3",
    "id": "<incident_key>",
    "ip_address": "",
    "ippers": "",
    "local_time": "2020-04-07 12:00:53",
    "logtype": "6001",
    "mac_address": "",
    "node_id": "<node_id>",
    "notified": "False",
    "src_host": "<source_ip>",
    "src_host_reverse": "<source_hostname>",
    "src_port": "54968"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Unacknowledge Incident

<APIDetails :endpoint="$page.frontmatter.endpoints.unacknowledge">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incident/unacknowledge \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d incident=EXAMPLE_INCIDENT_KEY 
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incident/unacknowledge'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'incident':'EXAMPLE_INCIDENT_KEY'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "action": "unacknowledged",
  "key": "<incident_key>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Acknowledge Multiple Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.acknowledge_incidents">

::: slot optional-parameters-notes

::: tip
At least one of the optional parameters is required.
:::

:::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/acknowledge \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/acknowledge'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id':'EXAMPLE_NODE_ID'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "action": "acknowledged",
  "keys": [
    "<incident_key>",
    "<incident_key>",
    "<incident_key>",
    "<incident_key>",
    "<incident_key>",
    "<incident_key>",
    "<incident_key>"
  ],
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Delete Multiple Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.delete_incidents">

::: slot optional-parameters-notes

::: tip
At least one of the optional parameters is required.
:::

:::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/delete \
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
  'node_id':'EXAMPLE_NODE_ID'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "action": "deleted",
  "keys": [
    "<incident_key>",
    "<incident_key>",
    "<incident_key>",
    "<incident_key>"
  ],
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Unacknowledge Multiple Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.unacknowledge_incidents">

::: slot optional-parameters-notes

::: tip
At least one of the optional parameters is required.
:::

:::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/unacknowledge \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/unacknowledge'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id':'EXAMPLE_NODE_ID'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "action": "unacknowledged",
  "keys": [
    "<incident_key>",
    "<incident_key>",
    "<incident_key>",
    "<incident_key>",
    "<incident_key>",
    "<incident_key>",
    "<incident_key>"
  ],
  "result": "success"
}
```
:::

:::::

</APIDetails>
