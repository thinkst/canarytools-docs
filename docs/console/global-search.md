---
endpoints:
  global_search:
    name: Global Search
    url: /api/v1/global/search
    method: GET
    description: Search across all Console entities (incidents / Flocks / Canarytokens / Birds / users).
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: filter_str
        required: false
        type: string
        description: A string to match on
      - name: type
        required: false
        type: string
        description: Type of results to return. Do not include to search across all entities, other wise it must be one of
                    ['incidents', 'canarytokens', 'devices', 'users', 'flocks']
    response: A JSON structure with the search results.
---
# Global Search

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

A search that spans all entities in your Console.

:::::

</APIEndpoints>


<APIDetails :endpoint="$page.frontmatter.endpoints.global_search">

::::: slot example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"
``` bash
curl https://EXAMPLE.canary.tools/api/v1/global/search \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```
:::

::: tab "Python"
``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/global/search'

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
  "canarytokens": {
    "canarytokens": [
      {
        "canarytoken": "<canarytoken>",
        "created": "1585947523.255526",
        "created_printable": "2020-04-03 20:58:43 (UTC)",
        "enabled": true,
        "flock_id": "flock:default",
        "hostname": "<hostname>",
        "key": "<token_key>",
        "kind": "dns",
        "memo": "Example Token Memo",
        "node_id": "<node_id>",
        "triggered_count": 0,
        "updated_id": 4,
        "url": "<token_url>"
      },
      {
        "canarytoken": "<canarytoken>",
        "created": "1586172436.249071",
        "created_printable": "2020-04-06 11:27:16 (UTC)",
        "enabled": true,
        "flock_id": "flock:default",
        "hostname": "<hostname>",
        "key": "<token_key>",
        "kind": "pdf-acrobat-reader",
        "memo": "Example Token Memo",
        "node_id": "<node_id>",
        "triggered_count": 0,
        "updated_id": 9,
        "url": "<token_url>"
      }
    ],
    "has_more": false,
    "total": 2
  },
  "devices": {
    "devices": [
      {
        "autoreg_time": "1586902237.728621",
        "current_settings": "devicesettings:2dae15019fdbb0452a3054c3:1586902278",
        "description": "SVR Room",
        "device_id": "<node_id>",
        "device_id_hash": "<device_hash>",
        "device_live": "True",
        "device_version": "2.3.1",
        "first_seen": "1586902278",
        "first_seen_age": "9 minutes",
        "first_seen_printable": "Tue Apr 14 2020 22:11:18 GMT+0000 (UTC)",
        "first_seen_std": "2020-04-14 22:11:18 UTC+0000",
        "flock_id": "flock:default",
        "ghost": "False",
        "id": "<node_id>",
        "ignore_notifications_disconnect": "False",
        "ignore_notifications_general": "False",
        "ip_address": "192.168.1.2",
        "ippers": "linux",
        "last_dns_settings_message_time": "2020-04-14 21:38:16",
        "last_heartbeat": "1586902818",
        "last_heartbeat_age": "8 seconds",
        "last_heartbeat_printable": "Tue Apr 14 2020 22:20:18 GMT+0000 (UTC)",
        "last_seen_std": "2020-04-14 22:20:18 UTC+0000",
        "live": "False",
        "local_time": "2020-04-14 22:20:17",
        "logtype": "1004",
        "mac": "00:00:00:00:00:00",
        "mac_address": "00:00:00:00:00:00",
        "name": "ExampleBird",
        "netmask": "24",
        "node_id": "<node_id>",
        "reconnect_count": "0",
        "sensor": "thinkstcanary",
        "service_count": "20",
        "uptime": "558",
        "uptime_age": "9 minutes"
      }
    ],
    "has_more": false,
    "total": 1
  },
  "flocks": {
    "flocks": [],
    "has_more": false,
    "total": 0
  },
  "incidents": {
    "has_more": false,
    "incidents": [],
    "total": 0
  },
  "result": "success",
  "users": {
    "has_more": false,
    "total": 1,
    "users": [
      {
        "access_level": "100",
        "disabled": "False",
        "email": "example@email.com",
        "id": "example@email.com",
        "note": "",
        "supervisor": "False",
        "totp_enabled": "False"
      }
    ]
  }
}
```
:::

:::::

</APIDetails>