---
endpoints:
  all_devices:
    name: All Birds
    url: /api/v1/devices/all
    method: GET
    description: Retrieve a list of all connected Birds.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a> to specify the timezone
    response: JSON Structure of all connected Birds.
  live_devices:
    name: Live Birds
    url: /api/v1/devices/live
    method: GET
    description: Retrieve all live Birds.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a>
                  to specify the timezone
    response: JSON Structure of live devices
  dead_devices:
    name: Dead Birds
    url: /api/v1/devices/dead
    method: GET
    description: Retrieve all connected but offline Birds.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a>
                  to specify the timezone
    response: JSON Structure of dead Birds
  filter_devices:
    name: Filter Birds
    url: /api/v1/devices/filter
    method: GET
    description: Retrieve all Birds that match a specific filter.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: filter_str
        required: false
        type: string
        description: String to match on
    response: JSON Structure of filtered Birds.
  device_info:
    name: Bird Info
    url: /api/v1/device/info
    method: GET
    description: Retrieve info for a specified Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: settings
        required: false
        type: boolean
        default: false
        description: Whether to include a dict of the Bird settings
      - name: exclude_fixed_settings
        required: false
        type: string
        default: false
        description:  Whether to include settings which the user can not change
    response: JSON structure of Bird's current information.
---

# Queries

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to query and retrieve Birds that are connected to your Console.

:::::

</APIEndpoints>

## All Birds

<APIDetails :endpoint="$page.frontmatter.endpoints.all_devices">

::::: slot example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"
``` bash
curl https://EXAMPLE.canary.tools/api/v1/devices/all \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```
:::

::: tab "Python"
``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/devices/all'

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
  "devices": [
    {
      "description": "SVR Room",
      "first_seen": "Tue Apr 14 2020 22:11:18 GMT+0000 (UTC)",
      "first_seen_std": "2020-04-14 22:11:18 UTC+0000",
      "gcp_project": "",
      "gcp_zone": "",
      "id": "<node_id>",
      "ignore_notifications": false,
      "ignore_notifications_disconnects": false,
      "ignore_notifications_reconnects": false,
      "instance_id": "",
      "ip_address": "192.168.1.2",
      "ippers": "linux",
      "last_seen": "Sun Apr 26 2020 20:34:02 GMT+0000 (UTC)",
      "last_seen_std": "2020-04-26 20:34:02 UTC+0000",
      "live": true,
      "local_time": "2020-04-26 20:33:55",
      "location": "SVR Room",
      "mac_address": "00:00:00:00:00:00",
      "migration_status": "",
      "name": "ExampleBird",
      "netmask": "24",
      "note": "",
      "public_ip": "",
      "region_id": "",
      "sensor": "thinkstcanary",
      "subnet": "192.168.1.0/24",
      "updated": "Sun, 26 Apr 2020 20:34:02 GMT",
      "updated_std": "2020-04-26 20:34:02 UTC+0000",
      "updated_timestamp": 1587933242,
      "uptime": 1029740,
      "uptime_age": "1 week",
      "version": "2.3.1"
    }
  ],
  "feed": "All Devices",
  "result": "success",
  "updated": "Sun, 26 Apr 2020 20:34:02 GMT",
  "updated_std": "2020-04-26 20:34:02 UTC+0000",
  "updated_timestamp": 1587933242
}
```
:::

:::::

</APIDetails>

## Live Birds

<APIDetails :endpoint="$page.frontmatter.endpoints.live_devices">

::::: slot example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/devices/live \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/devices/live'

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
  "devices": [
    {
      "description": "SVR Room",
      "first_seen": "Tue Apr 14 2020 22:11:18 GMT+0000 (UTC)",
      "first_seen_std": "2020-04-14 22:11:18 UTC+0000",
      "gcp_project": "",
      "gcp_zone": "",
      "id": "<node_id>",
      "ignore_notifications": false,
      "ignore_notifications_disconnects": false,
      "ignore_notifications_reconnects": false,
      "instance_id": "",
      "ip_address": "192.168.1.2",
      "ippers": "linux",
      "last_seen": "Sun Apr 26 2020 20:36:32 GMT+0000 (UTC)",
      "last_seen_std": "2020-04-26 20:36:32 UTC+0000",
      "live": true,
      "local_time": "2020-04-26 20:36:25",
      "location": "SVR Room",
      "mac_address": "00:00:00:00:00:00",
      "migration_status": "",
      "name": "ExampleBird",
      "netmask": "24",
      "note": "",
      "public_ip": "",
      "region_id": "",
      "sensor": "thinkstcanary",
      "subnet": "192.168.1.0/24",
      "updated": "Sun, 26 Apr 2020 20:36:32 GMT",
      "updated_std": "2020-04-26 20:36:32 UTC+0000",
      "updated_timestamp": 1587933392,
      "uptime": 1029890,
      "uptime_age": "1 week",
      "version": "2.3.1"
    }
  ],
  "feed": "Live Devices",
  "result": "success",
  "updated": "Sun, 26 Apr 2020 20:36:32 GMT",
  "updated_std": "2020-04-26 20:36:32 UTC+0000",
  "updated_timestamp": 1587933392
}
```
:::

:::::

</APIDetails>

## Dead Birds

<APIDetails :endpoint="$page.frontmatter.endpoints.dead_devices">

::::: slot example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/devices/dead \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/devices/dead'

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
  "devices": [
    {
      "description": "SVR Room",
      "first_seen": "Tue Apr 14 2020 22:11:18 GMT+0000 (UTC)",
      "first_seen_std": "2020-04-14 22:11:18 UTC+0000",
      "gcp_project": "",
      "gcp_zone": "",
      "id": "<node_id>",
      "ignore_notifications": false,
      "ignore_notifications_disconnects": false,
      "ignore_notifications_reconnects": false,
      "instance_id": "",
      "ip_address": "192.168.1.2",
      "ippers": "linux",
      "last_seen": "Mon Apr 27 2020 09:06:19 GMT+0000 (UTC)",
      "last_seen_std": "2020-04-27 09:06:19 UTC+0000",
      "live": false,
      "local_time": "2020-04-27 09:06:18",
      "location": "SVR Room",
      "mac_address": "00:00:00:00:00:00",
      "migration_status": "",
      "name": "ExampleBird",
      "netmask": "24",
      "note": "",
      "public_ip": "",
      "region_id": "",
      "sensor": "thinkstcanary",
      "subnet": "192.168.1.0/24",
      "updated": "Mon, 27 Apr 2020 09:06:19 GMT",
      "updated_std": "2020-04-27 09:06:19 UTC+0000",
      "updated_timestamp": 1587978379,
      "uptime": 144,
      "uptime_age": "2 minutes",
      "version": "2.3.1"
    }
  ],
  "feed": "Dead Devices",
  "result": "success",
  "updated": "Mon, 27 Apr 2020 09:06:19 GMT",
  "updated_std": "2020-04-27 09:06:19 UTC+0000",
  "updated_timestamp": 1587978379
}
```
:::

:::::

</APIDetails>

## Filter Birds

<APIDetails :endpoint="$page.frontmatter.endpoints.filter_devices">

::::: slot example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"
``` bash
curl https://EXAMPLE.canary.tools/api/v1/devices/filter \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d filter_str='EXAMPLE_FILTER_STRING' \
  -G
```
:::

::: tab "Python"
``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/devices/filter'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'filter_str': 'EXAMPLE_FILTER_STRING'
}

r = requests.get(url, params=payload)

print(r.json())
```
:::

::::

::: api-response

```json
{
  "devices": [
    {
      "autoreg_time": "1586902237.728621",
      "current_settings": "devicesettings:<device_hash>:1586903523",
      "description": "SVR Room",
      "device_id": "<node_id>",
      "device_id_hash": "<device_hash>",
      "device_live": "True",
      "device_version": "2.3.1",
      "first_seen": "1586902278",
      "first_seen_age": "1 week",
      "first_seen_printable": "Tue Apr 14 2020 22:11:18 GMT+0000 (UTC)",
      "first_seen_std": "2020-04-14 22:11:18 UTC+0000",
      "flock_id": "flock:default",
      "ghost": "False",
      "id": "<node_id>",
      "ignore_notifications_disconnect": "False",
      "ignore_notifications_general": "False",
      "ip_address": "192.168.1.2",
      "ippers": "linux",
      "last_dns_settings_message_time": "2020-04-14 22:31:53",
      "last_heartbeat": "1587933932",
      "last_heartbeat_age": "16 seconds",
      "last_heartbeat_printable": "Sun Apr 26 2020 20:45:32 GMT+0000 (UTC)",
      "last_seen_std": "2020-04-26 20:45:32 UTC+0000",
      "live": "False",
      "local_time": "2020-04-26 20:45:25",
      "logtype": "1004",
      "mac": "00:00:00:00:00:00",
      "mac_address": "00:00:00:00:00:00",
      "name": "ExampleBird",
      "netmask": "24",
      "node_id": "<node_id>",
      "reconnect_count": "0",
      "sensor": "thinkstcanary",
      "service_count": "21",
      "uptime": "1030430",
      "uptime_age": "1 week",
      "was_rollback": "False"
    }
  ],
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Bird Info

<APIDetails :endpoint="$page.frontmatter.endpoints.device_info">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/info \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -d setting=true \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/info'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID',
  'settings': 'true'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "device": {
    "autoreg_time": "1586902237.728621",
    "current_settings": "devicesettings:<device_hash>:1586903523",
    "description": "SVR Room",
    "device_id": "<node_id>",
    "device_id_hash": "<device_hash>",
    "device_live": "True",
    "device_version": "2.3.1",
    "first_seen": "1586902278",
    "first_seen_age": "1 week",
    "first_seen_printable": "Tue Apr 14 2020 22:11:18 GMT+0000 (UTC)",
    "first_seen_std": "2020-04-14 22:11:18 UTC+0000",
    "flock_id": "flock:default",
    "ghost": "False",
    "id": "<node_id>",
    "ignore_notifications_disconnect": "False",
    "ignore_notifications_general": "False",
    "ip_address": "192.168.1.2",
    "ippers": "linux",
    "last_dns_settings_message_time": "2020-04-27 08:17:16",
    "last_heartbeat": "1587982249",
    "last_heartbeat_age": "5 seconds",
    "last_heartbeat_printable": "Mon Apr 27 2020 10:10:49 GMT+0000 (UTC)",
    "last_seen_std": "2020-04-27 10:10:49 UTC+0000",
    "live": "False",
    "local_time": "2020-04-27 10:10:48",
    "location": "SVR Room",
    "logtype": "1004",
    "mac": "00:00:00:00:00:00",
    "mac_address": "00:00:00:00:00:00",
    "name": "ExampleBird",
    "netmask": "24",
    "node_id": "<node_id>",
    "reconnect_count": "1",
    "sensor": "thinkstcanary",
    "service_count": "21",
    "settings": { 
      ...
    },
    "unacknowleged_incidents": [],
    "uptime": "4014",
    "uptime_age": "1 hour",
    "was_rollback": "False"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>