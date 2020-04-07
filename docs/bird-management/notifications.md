---
endpoints:
  notifications_disconnect_disable:
    name: Disable Bird Disconnect Notifications
    url: /api/v1/device/notifications/disconnects/disable
    method: POST
    description: Disable a Bird's disconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
  notifications_disconnect_enable:
    name: Enable Bird Disconnect Notifications
    url: /api/v1/device/notifications/disconnects/enable
    method: POST
    description: Enable a Bird's disconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
  notifications_incidents_disable:
    name: Disable Bird Incident Notifications
    url: /api/v1/device/notifications/incidents/disable
    method: POST
    description: Disable a Bird's incident notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
  notifications_incidents_enable:
    name: Enable Bird Incident Notifications
    url: /api/v1/device/notifications/incidents/enable
    method: POST
    description: Enable a Bird's incident notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
  notifications_reconnects_disable:
    name: Disable Bird Reconnect Notifications
    url: /api/v1/device/notifications/reconnects/disable
    method: POST
    description: Disable a Bird's reconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
  notifications_reconnects_enable:
    name: Enable Bird Reconnect Notifications
    url: /api/v1/device/notifications/reconnects/enable
    method: POST
    description: Enable a Bird's reconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
---

# Notifications

These are a collection of endpoints that allow you to configure a Bird's notification settings.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Disable Bird Disconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_disconnect_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/notifications/disconnects/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/notifications/disconnects/disable'

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
  "device": {
    "autoreg_time": "1585678633.528495",
    "current_settings": "devicesettings:<device_hash>:1585762137",
    "description": "SRV Room",
    "device_id": "<device_id>",
    "device_id_hash": "<device_hash>",
    "device_live": "True",
    "device_version": "2.2",
    "first_seen": "1585680957",
    "flock_id": "flock:default",
    "ghost": "False",
    "id": "<node_id>",
    "ignore_notifications_disconnect": true,
    "ignore_notifications_general": "False",
    "ip_address": "192.168.1.2",
    "ippers": "linux",
    "last_dns_settings_message_time": "2020-04-01 17:28:23",
    "last_heartbeat": "1585762408",
    "live": "False",
    "local_time": "2020-04-01 17:32:54",
    "logtype": "1004",
    "mac": "00:00:00:00:00:00",
    "mac_address": "00:00:00:00:00:00",
    "name": "ExampleBird",
    "need_reboot": "False",
    "netmask": "24",
    "node_id": "<node_id>",
    "note": "Example Bird Note",
    "reconnect_count": "0",
    "sensor": "thinkstcanary",
    "service_count": "20",
    "update_attempts:2.1": "1",
    "update_attempts:2.1.1": "1",
    "uptime": "288",
    "was_rollback": "False"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Enable Bird Disconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_disconnect_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/notifications/disconnects/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/notifications/disconnects/enable'

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
  "device": {
    "autoreg_time": "1585678633.528495",
    "current_settings": "devicesettings:<device_hash>:1585762137",
    "description": "SRV Room",
    "device_id": "<device_id>",
    "device_id_hash": "<device_hash>",
    "device_live": "True",
    "device_version": "2.2",
    "first_seen": "1585680957",
    "flock_id": "flock:default",
    "ghost": "False",
    "id": "<node_id>",
    "ignore_notifications_disconnect": false,
    "ignore_notifications_general": "False",
    "ip_address": "192.168.1.2",
    "ippers": "linux",
    "last_dns_settings_message_time": "2020-04-01 17:28:23",
    "last_heartbeat": "1585764208",
    "live": "False",
    "local_time": "2020-04-01 18:02:54",
    "logtype": "1004",
    "mac": "00:00:00:00:00:00",
    "mac_address": "00:00:00:00:00:00",
    "name": "ExampleBird",
    "need_reboot": "False",
    "netmask": "24",
    "node_id": "<node_id>",
    "note": "Example Bird Note",
    "reconnect_count": "0",
    "sensor": "thinkstcanary",
    "service_count": "20",
    "update_attempts:2.1": "1",
    "update_attempts:2.1.1": "1",
    "uptime": "2088",
    "was_rollback": "False"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Disable Bird Incident Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_incidents_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/notifications/incidents/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/notifications/incidents/disable'

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
  "device": {
    "autoreg_time": "1585678633.528495",
    "current_settings": "devicesettings:<device_hash>:1585762137",
    "description": "SRV Room",
    "device_id": "<device_id>",
    "device_id_hash": "<device_hash>",
    "device_live": "True",
    "device_version": "2.2",
    "first_seen": "1585680957",
    "flock_id": "flock:default",
    "ghost": "False",
    "id": "<node_id>",
    "ignore_notifications_disconnect": "False",
    "ignore_notifications_general": true,
    "ip_address": "192.168.1.2",
    "ippers": "linux",
    "last_dns_settings_message_time": "2020-04-01 17:28:23",
    "last_heartbeat": "1585765411",
    "live": "False",
    "local_time": "2020-04-01 18:22:54",
    "logtype": "1004",
    "mac": "00:00:00:00:00:00",
    "mac_address": "00:00:00:00:00:00",
    "name": "ExampleBird",
    "need_reboot": "False",
    "netmask": "24",
    "node_id": "<node_id>",
    "note": "Example Bird Note",
    "reconnect_count": "0",
    "sensor": "thinkstcanary",
    "service_count": "20",
    "throttled": false,
    "update_attempts:2.1": "1",
    "update_attempts:2.1.1": "1",
    "uptime": "3288",
    "was_rollback": "False"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Enable Bird Incident Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_incidents_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/notifications/incidents/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/notifications/incidents/enable'

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
  "device": {
    "autoreg_time": "1585678633.528495",
    "current_settings": "devicesettings:<device_hash>:1585762137",
    "description": "SRV Room",
    "device_id": "<device_id>",
    "device_id_hash": "<device_hash>",
    "device_live": "True",
    "device_version": "2.2",
    "first_seen": "1585680957",
    "flock_id": "flock:default",
    "ghost": "False",
    "id": "<node_id",
    "ignore_notifications_disconnect": "False",
    "ignore_notifications_general": false,
    "ip_address": "192.168.1.2",
    "ippers": "linux",
    "last_dns_settings_message_time": "2020-04-01 17:28:23",
    "last_heartbeat": "1585765891",
    "live": "False",
    "local_time": "2020-04-01 18:30:54",
    "logtype": "1004",
    "mac": "00:00:00:00:00:00",
    "mac_address": "00:00:00:00:00:00",
    "name": "ExampleBird",
    "need_reboot": "False",
    "netmask": "24",
    "node_id": "<node_id",
    "note": "Example Bird Note",
    "reconnect_count": "0",
    "sensor": "thinkstcanary",
    "service_count": "20",
    "throttled": "False",
    "update_attempts:2.1": "1",
    "update_attempts:2.1.1": "1",
    "uptime": "3768",
    "was_rollback": "False"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Disable Bird Reconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_reconnects_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/notifications/reconnects/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/notifications/reconnects/disable'

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
  "device": {
    "autoreg_time": "1585678633.528495",
    "current_settings": "devicesettings:<device_hash>:1585762137",
    "description": "SRV Room",
    "device_id": "<device_id>",
    "device_id_hash": "<device_hash>",
    "device_live": "True",
    "device_version": "2.2",
    "first_seen": "1585680957",
    "flock_id": "flock:default",
    "ghost": "False",
    "id": "<node_id",
    "ignore_notifications_disconnect": "False",
    "ignore_notifications_general": "False",
    "ignore_notifications_reconnect": true,
    "ip_address": "192.168.1.2",
    "ippers": "linux",
    "last_dns_settings_message_time": "2020-04-01 17:28:23",
    "last_heartbeat": "1585766131",
    "live": "False",
    "local_time": "2020-04-01 18:34:54",
    "logtype": "1004",
    "mac": "00:00:00:00:00:00",
    "mac_address": "00:00:00:00:00:00",
    "name": "ExampleBird",
    "need_reboot": "False",
    "netmask": "24",
    "node_id": "<node_id>",
    "note": "Example Bird Note",
    "reconnect_count": "0",
    "sensor": "thinkstcanary",
    "service_count": "20",
    "throttled": "False",
    "update_attempts:2.1": "1",
    "update_attempts:2.1.1": "1",
    "uptime": "4008",
    "was_rollback": "False"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Enable Bird Reconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_reconnects_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/notifications/reconnects/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/notifications/reconnects/enable'

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
  "device": {
    "autoreg_time": "1585678633.528495",
    "current_settings": "devicesettings:<device_hash>:1585762137",
    "description": "SRV Room",
    "device_id": "<device_id>",
    "device_id_hash": "<device_hash>",
    "device_live": "True",
    "device_version": "2.2",
    "first_seen": "1585680957",
    "flock_id": "flock:default",
    "ghost": "False",
    "id": "<node_id>",
    "ignore_notifications_disconnect": "False",
    "ignore_notifications_general": "False",
    "ignore_notifications_reconnect": false,
    "ip_address": "192.168.1.2",
    "ippers": "linux",
    "last_dns_settings_message_time": "2020-04-01 17:28:23",
    "last_heartbeat": "1585766549",
    "live": "False",
    "local_time": "2020-04-01 18:41:54",
    "logtype": "1004",
    "mac": "00:00:00:00:00:00",
    "mac_address": "00:00:00:00:00:00",
    "name": "ExampleBird",
    "need_reboot": "False",
    "netmask": "24",
    "node_id": "<node_id>",
    "note": "Example Bird Note",
    "reconnect_count": "0",
    "sensor": "thinkstcanary",
    "service_count": "20",
    "throttled": "False",
    "update_attempts:2.1": "1",
    "update_attempts:2.1.1": "1",
    "uptime": "4428",
    "was_rollback": "False"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>