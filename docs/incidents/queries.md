---
endpoints:
  acknowledged:
    name: Acknowledged Incidents
    url: /api/v1/incidents/acknowledged
    method: GET
    description: Returns all acknowledged incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: false
        type: string
        description: Get all incidents for a specific node
      - name: flock_id
        required: false
        type: string
        description: Get all incidents for a specific flock_id
      - name: incidents_since
        required: false
        type: int
        description: Only return incidents whose updated_id is greater than this
                     integer. The returned feed includes a max_updated_id field if the incident
                     list has entries
      - name: event_limit
        required: false
        type: int
        description: Specify the maximum number of event logs to be returned with the incident     
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
      - name: shrink
        required: false
        type: boolean
        description: A 'true' value will remove duplicated entries  (defaults to 'false' for backwards
                    compatibility but you really want this to be true)
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a> to specify the timezone
    response: JSON structure with a list of acknowledged incidents.
  all:
    name: All Incidents
    url: /api/v1/incidents/all
    method: GET
    description: Returns all incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: false
        type: string
        description: Get all incidents for a specific node_id
      - name: flock_id
        required: false
        type: string
        description: Get all incidents for a specific flock_id
      - name: incidents_since
        required: false
        type: int
        description: Only return incidents whose updated_id is greater than this
                     integer. The returned feed includes a max_updated_id field if the incident
                     list has entries
      - name: event_limit
        required: false
        type: int
        description: Specify the maximum number of event logs to be returned with the incident     
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
      - name: shrink
        required: false
        type: boolean
        description: A 'true' value will remove duplicated entries  (defaults to 'false' for backwards
                    compatibility but you really want this to be true)
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a> to specify the timezone
    response: JSON structure with a list of incidents.
  history_source:
    name: Incident History for Source IP
    url: /api/v1/incidents/history/source
    method: GET
    description: Returns a list of incident history for a source IP.
                 If the `flock_id` is specified the history will be confined to the flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: src_ip
        required: false
        type: string
        description: The Source IP address of the incidents
      - name: flock_id
        required: false
        type: string
        description: The Flock ID of the source history
    response: JSON structure with a list of incident histories.
  search:
    name: Search Incidents
    url: /api/v1/incidents/search
    method: GET
    description: Search for incidents by logtype or string. This works with pagination.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: false
        type: string
        description: Only return incidents for a specific device.
      - name: flock_id
        required: false
        type: string
        description: Only return incidents for a specific flock.
      - name: filter_str
        required: false
        type: string
        description: The string used when searching for incidents. This string will attempt to match
                     against incident details such as alert name, node_id, source IP, and destination IP
      - name: filter_logtypes
        required: false
        type: string
        description: Comma separated list of logtypes of the incidents to be returned
      - name: filter_incident_state
        required: false
        type: string
        description: Only return incidents in a specific state {all, unacknowledged, acknowledged}.
                     (defaults to 'unacknowledged')   
      - name: limit
        required: false
        type: int
        description: Parameter used to initiate cursor pagination. The limit is used to specify
                    the page sizes returned when iterating through the pages representing all
                    *filter_incident_state* incidents.
      - name: cursor
        required: false
        type: string
        description: The cursor string retrieved from the cursor element returned along with a page while
                     doing pagination
    response: JSON structure with all incidents that match the search criteria.
  unacknowledged:
    name: Acknowledged Incidents
    url: /api/v1/incidents/unacknowledged
    method: GET
    description: Returns all unacknowledged incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: false
        type: string
        description: Get all incidents for a specific node
      - name: flock_id
        required: false
        type: string
        description: Get all incidents for a specific flock_id
      - name: incidents_since
        required: false
        type: int
        description: Only return incidents whose updated_id is greater than this
                     integer. The returned feed includes a max_updated_id field if the incident
                     list has entries
      - name: event_limit
        required: false
        type: int
        description: Specify the maximum number of event logs to be returned with the incident     
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
      - name: shrink
        required: false
        type: boolean
        description: A 'true' value will remove duplicated entries  (defaults to 'false' for backwards
                    compatibility but you really want this to be true)
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a> to specify the timezone
    response: JSON structure with a list of unacknowledged incidents.
---

# Queries

These are a collection of endpoints that allow you to query incidents.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Acknowledged Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.acknowledged">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/acknowledged \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d shrink=true \
  -d limit=1 \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/acknowledged'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'shrink':'true',
  'limit':'1'
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
    "next": "MTQzOjE0MjoxNDQ6MToxOjA6Mjoz",
    "next_link": "https://EXAMPLE.canary.tools/api/v1/incidents/acknowledged?cursor=MTQzOjE0MjoxNDQ6MToxOjA6Mjoz&auth_token=<auth_token>&shrink=true",
    "prev": null,
    "prev_link": null
  },
  "feed": "Acknowledged Incidents",
  "incidents": [
    {
      "description": {
        "acknowledged": "True",
        "created": "1586338742",
        "created_std": "2020-04-08 09:39:02 UTC+0000",
        "description": "HTTP Login Attempt",
        "dst_host": "<destination_ip>",
        "dst_port": "80",
        "events": [
          {
            "HOSTNAME": "<hostname>",
            "METHOD": "POST",
            "PASSWORD": "<password>",
            "PATH": "/index.html",
            "RESPONSE": 200,
            "SKIN": "nasLogin",
            "USERAGENT": "<user_agent>",
            "USERNAME": "<username>",
            "timestamp": 1586338742,
            "timestamp_std": "2020-04-08 09:39:02 UTC+0000"
          }
        ],
        "events_count": "1",
        "ip_address": "",
        "ippers": "",
        "local_time": "2020-04-08 09:39:01",
        "logtype": "3001",
        "mac_address": "",
        "name": "ExampleBird",
        "node_id": "<node_id>",
        "notified": "False",
        "src_host": "<source_ip>",
        "src_host_reverse": "<source_hostname>",
        "src_port": "60961"
      },
      "hash_id": "<hash_id>",
      "id": "<incident_key>",
      "summary": "HTTP Login Attempt",
      "updated": "Wed, 08 Apr 2020 10:55:09 GMT",
      "updated_id": 142,
      "updated_std": "2020-04-08 10:55:09 UTC+0000",
      "updated_time": "1586343309"
    }
  ],
  "max_updated_id": 142,
  "result": "success",
  "updated": "Wed, 08 Apr 2020 10:55:09 GMT",
  "updated_std": "2020-04-08 10:55:09 UTC+0000",
  "updated_timestamp": 1586343309
}
```
:::

:::::

</APIDetails>

## All Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.all">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/all \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d shrink=true \
  -d limit=1 \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/all'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'shrink':'true',
  'limit':'1'
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
    "next": "MTE6MTA6MTQ0OjE6MjowOjI6NQ==",
    "next_link": "https://EXAMPLE.canary.tools/api/v1/incidents/all?cursor=MTE6MTA6MTQ0OjE6MjowOjI6NQ%3D%3D&auth_token=<auth_token>&shrink=true",
    "prev": null,
    "prev_link": null
  },
  "feed": "All Incidents",
  "incidents": [
    {
      "description": {
        "acknowledged": "False",
        "created": "1586249623",
        "created_std": "2020-04-07 08:53:43 UTC+0000",
        "description": "Canarytoken triggered",
        "dst_host": "<destination_ip>",
        "dst_port": "80",
        "events": [
          {
            "canarytoken": "<token_code>",
            "dst_port": 80,
            "event_name": "",
            "headers": {
              "Accept": "*/*",
              "Accept-Encoding": "gzip, deflate",
              "Connection": "close",
              "User-Agent": ""
            },
            "src_host": "",
            "timestamp": 1586249623,
            "timestamp_std": "2020-04-07 08:53:43 UTC+0000",
            "type": "aws-id"
          }
        ],
        "events_count": "1",
        "local_time": "2020-04-07 08:53:43 (UTC)",
        "logtype": "17012",
        "memo": "Example Memo",
        "name": "N/A",
        "node_id": "<node_id>",
        "notified": "False",
        "src_host": "",
        "src_port": "0"
      },
      "hash_id": "<hash_id>",
      "id": "<incident_key>",
      "summary": "Canarytoken triggered",
      "updated": "Tue, 07 Apr 2020 08:53:43 GMT",
      "updated_id": 10,
      "updated_std": "2020-04-07 08:53:43 UTC+0000",
      "updated_time": "1586249623"
    }
  ],
  "max_updated_id": 10,
  "result": "success",
  "updated": "Tue, 07 Apr 2020 08:53:43 GMT",
  "updated_std": "2020-04-07 08:53:43 UTC+0000",
  "updated_timestamp": 1586249623
}
```
:::

:::::

</APIDetails>

## Incident History for Source IP

<APIDetails :endpoint="$page.frontmatter.endpoints.history_source">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/history/source \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d src_ip=EXAMPLE_SOURCE_IP \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/history/source'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'src_ip':'EXAMPLE_SOURCE_IP'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "incidents": [
    {
      "created": 1586260659,
      "deleted": false,
      "description": "SSH Login Attempt",
      "dst_port": 22,
      "flock_id": "flock:default",
      "key": "<incident_key>",
      "node_id": "<node_id>",
      "src_host": "<source_ip>"
    },
    ...
  ],
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Search Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.search">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/search \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -d limit=1 \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/search'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id':'EXAMPLE_NODE_ID',
  'limit':'1'
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
    "next": "Mzg6Mzk6MTY6MTowOjE6Mjo4",
    "next_link": "https://EXAMPLE.canary.tools/api/v1/incidents/search?cursor=Mzg6Mzk6MTY6MTowOjE6Mjo4&auth_token=<auth_token>&node_id=<node_id>",
    "prev": null,
    "prev_link": null
  },
  "incident_source_counts": {
    "<source_ip>": 8
  },
  "incidents": [
    {
      "acknowledged": "False",
      "created": "1586262520",
      "created_age": "5 hours",
      "created_age_seconds": 19579.0,
      "created_printable": "Tue Apr 07 2020 12:28:40 GMT+0000 (UTC)",
      "description": "ModBus Request",
      "dst_host": "<destination_ip>",
      "dst_port": "502",
      "events_count": "1",
      "events_list": [
        1586262520000
      ],
      "events_list_printable": "Tue Apr 07 2020 12:28:40 GMT+0000 (UTC)",
      "flock_id": "flock:default",
      "hash_id": "<hash_id>",
      "host": {
        "autoreg_time": "1585947340.642295",
        "current_settings": "devicesettings:2dae15019fdbb0452a3054c3:1585973895",
        "description": "SRV Room",
        "device_id": "<device_id>",
        "device_id_hash": "<device_hash_id>",
        "device_live": "True",
        "device_version": "2.3.1",
        "first_seen": "1585947382",
        "first_seen_age": "3 days",
        "first_seen_printable": "Fri Apr 03 2020 20:56:22 GMT+0000 (UTC)",
        "first_seen_std": "2020-04-03 20:56:22 UTC+0000",
        "flock_id": "flock:default",
        "ghost": "False",
        "id": "<node_id>",
        "ignore_notifications_disconnect": "False",
        "ignore_notifications_general": "False",
        "ip_address": "<node_ip>",
        "ippers": "linux",
        "last_dns_settings_message_time": "2020-04-06 11:17:16",
        "last_heartbeat": "1586282088",
        "last_heartbeat_age": "11 seconds",
        "last_heartbeat_printable": "Tue Apr 07 2020 17:54:48 GMT+0000 (UTC)",
        "last_seen_std": "2020-04-07 17:54:48 UTC+0000",
        "live": "False",
        "local_time": "2020-04-07 17:54:47",
        "logtype": "1004",
        "mac": "00:00:00:00:00:00",
        "mac_address": "00:00:00:00:00:00",
        "name": "ExampleBird",
        "netmask": "24",
        "node_id": "<node_id>",
        "notify_after_horizon_reconnect": "False",
        "reconnect_count": "2",
        "sensor": "thinkstcanary",
        "service_count": "20",
        "update_attempts:2.3": "1",
        "uptime": "105539",
        "uptime_age": "1 day"
      },
      "incident_key": "<incident_key>",
      "ip_address": "",
      "ippers": "",
      "key": "<incident_key>",
      "local_time": "2020-04-07 12:28:39",
      "logdata": [
        {
          "FUNC_CODE": 17,
          "FUNC_NAME": "Report Slave ID",
          "UNIT_ID": 1
        }
      ],
      "logtype": "18001",
      "mac_address": "",
      "node_id": "<node_id>",
      "notified": "False",
      "previously_seen_count": 9,
      "sensor": "thinkstcanary",
      "slack_channel": "<slack_channel_id>",
      "slack_ts": "<slack_ts>",
      "src_host": "<source_ip>",
      "src_host_reverse": "<source_hostname>",
      "src_port": "55378",
      "updated": "True",
      "updated_id": 39,
      "updated_time": "1586262520",
      "updated_time_age": "5 hours",
      "updated_time_age_seconds": 19579.0,
      "updated_time_printable": "Tue Apr 07 2020 12:28:40 GMT+0000 (UTC)"
    }
  ],
  "page_number": 1,
  "result": "success",
  "total_pages": 8,
  "total_results": 8
}
```
:::

:::::

</APIDetails>

## Unacknowledged Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.unacknowledged">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/unacknowledged \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d shrink=true \
  -d limit=1 \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/unacknowledged'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'shrink':'true',
  'limit':'1'
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
    "next": "MTE6MTA6MTE6MTowOjA6Mjoy",
    "next_link": "https://EXAMPLE.canary.tools/api/v1/incidents/unacknowledged?cursor=MTE6MTA6MTE6MTowOjA6Mjoy&auth_token=<auth_token>&shrink=true",
    "prev": null,
    "prev_link": null
  },
  "feed": "Unacknowledged Incidents",
  "incidents": [
    {
      "description": {
        "acknowledged": "False",
        "created": "1586249623",
        "created_std": "2020-04-07 08:53:43 UTC+0000",
        "description": "Canarytoken triggered",
        "dst_host": "<destination_ip>",
        "dst_port": "80",
        "events": [
          {
            "canarytoken": "<token_code>",
            "dst_port": 80,
            "event_name": "",
            "headers": {
              "Accept": "*/*",
              "Accept-Encoding": "gzip, deflate",
              "Connection": "close",
              "User-Agent": ""
            },
            "src_host": "",
            "timestamp": 1586249623,
            "timestamp_std": "2020-04-07 08:53:43 UTC+0000",
            "type": "aws-id"
          }
        ],
        "events_count": "1",
        "local_time": "2020-04-07 08:53:43 (UTC)",
        "logtype": "17012",
        "memo": "Example Memo",
        "name": "N/A",
        "node_id": "<node_id>",
        "notified": "False",
        "src_host": "",
        "src_port": "0"
      },
      "hash_id": "<hash_id>",
      "id": "<incident_key>",
      "summary": "Canarytoken triggered",
      "updated": "Tue, 07 Apr 2020 08:53:43 GMT",
      "updated_id": 10,
      "updated_std": "2020-04-07 08:53:43 UTC+0000",
      "updated_time": "1586249623"
    }
  ],
  "max_updated_id": 10,
  "result": "success",
  "updated": "Tue, 07 Apr 2020 08:53:43 GMT",
  "updated_std": "2020-04-07 08:53:43 UTC+0000",
  "updated_timestamp": 1586249623
}
```
:::

:::::

</APIDetails>
