---
endpoints:
    - name: All Devices
      url: /api/v1/devices/all
      method: GET
      description: Retrieve a list of all connected devices
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
      response: JSON Structure of all connected devices
                       to specify the timezone
    - name: Live Devices
      url: /api/v1/devices/live
      method: GET
      description: Retrieve all live devices.
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
    - name: Dead Devices
      url: /api/v1/devices/dead
      method: GET
      description: Retrieve all connected but offline devices.
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
      response: JSON Structure of dead devices
---

# Devices

These are a collection of endpoints that allow you to interact with devices that are paired to your Console.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## All Devices

<APIDetails :endpoint="$page.frontmatter.endpoints[0]"/>

#### Example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"
``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token

curl -x GET https://${DOMAIN}.canary.tools/api/v1/devices/all?auth_token=${AUTH_TOKEN}
```
:::

::: tab "Python"
``` python
import requests

DOMAIN = 'my_domain'
AUTH_TOKEN = 'test_auth_token'

r = requests.get(
    'https://{DOMAIN}.canary.tools/api/v1/devices/all?auth_token={AUTH_TOKEN}'.format(
        DOMAIN=DOMAIN, AUTH_TOKEN=AUTH_TOKEN
    )
)
r.json()
```
:::

::::

::: api-response

```json
{
  "devices": [
    {
      "description": "SRV Room",
      "first_seen": "Wed Oct 23 2019 11:58:56 GMT+0000 (UTC)",
      "first_seen_std": "2019-10-23 11:58:56 UTC+0000",
      "gcp_project": "",
      "gcp_zone": "",
      "id": "00000000XXXXXXXX",
      "ignore_notifications": false,
      "ignore_notifications_disconnects": false,
      "ignore_notifications_reconnects": false,
      "instance_id": "",
      "ip_address": "192.168.1.2",
      "ippers": "win2012",
      "last_seen": "Thu Mar 26 2020 21:59:40 GMT+0000 (UTC)",
      "last_seen_std": "2020-03-26 21:59:40 UTC+0000",
      "live": true,
      "local_time": "2020-03-13 04:37:47",
      "location": "SRV Room",
      "mac_address": "XX:XX:XX:XX:XX:XX",
      "migration_status": "",
      "name": "Example Device",
      "note": "",
      "public_ip": "",
      "region_id": "",
      "sensor": "thinkstcanary",
      "updated": "Thu, 26 Mar 2020 21:59:40 GMT",
      "updated_std": "2020-03-26 21:59:40 UTC+0000",
      "updated_timestamp": 1585259980,
      "uptime": 1157959,
      "uptime_age": "1 week",
      "version": "2.3"
    },
    { ... },
  ],
  "feed": "All Devices",
  "result": "success",
  "updated": "Thu, 26 Mar 2020 21:59:40 GMT",
  "updated_std": "2020-03-26 21:59:40 UTC+0000",
  "updated_timestamp": 1585259980
}
```
:::

## Live Devices

<APIDetails :endpoint="$page.frontmatter.endpoints[1]"/>

#### Example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token

curl -x GET https://${DOMAIN}.canary.tools/api/v1/devices/live?auth_token=${AUTH_TOKEN}
```

:::


::: tab "Python"

``` python
import requests

DOMAIN = 'my_domain'
AUTH_TOKEN = 'test_auth_token'

r = requests.get(
    'https://{DOMAIN}.canary.tools/api/v1/devices/live?auth_token={AUTH_TOKEN}'.format(
        DOMAIN=DOMAIN, AUTH_TOKEN=AUTH_TOKEN
    )
)
r.json()

```

:::

::::

::: api-response

```json
{
  "devices": [
    {
      "description": "SRV Room",
      "first_seen": "Wed Oct 23 2019 11:58:56 GMT+0000 (UTC)",
      "first_seen_std": "2019-10-23 11:58:56 UTC+0000",
      "gcp_project": "",
      "gcp_zone": "",
      "id": "00000000XXXXXXXX",
      "ignore_notifications": false,
      "ignore_notifications_disconnects": false,
      "ignore_notifications_reconnects": false,
      "instance_id": "",
      "ip_address": "192.168.1.2",
      "ippers": "win2012",
      "last_seen": "Thu Mar 26 2020 21:59:40 GMT+0000 (UTC)",
      "last_seen_std": "2020-03-26 21:59:40 UTC+0000",
      "live": true,
      "local_time": "2020-03-13 04:37:47",
      "location": "SRV Room",
      "mac_address": "XX:XX:XX:XX:XX:XX",
      "migration_status": "",
      "name": "Example Device",
      "note": "",
      "public_ip": "",
      "region_id": "",
      "sensor": "thinkstcanary",
      "updated": "Thu, 26 Mar 2020 21:59:40 GMT",
      "updated_std": "2020-03-26 21:59:40 UTC+0000",
      "updated_timestamp": 1585259980,
      "uptime": 1157959,
      "uptime_age": "1 week",
      "version": "2.3"
    },
    { ... },
  ],
  "feed": "Live Devices",
  "result": "success",
  "updated": "Thu, 26 Mar 2020 22:11:10 GMT",
  "updated_std": "2020-03-26 22:11:10 UTC+0000",
  "updated_timestamp": 1585260670
}
```
:::

## Dead Devices

<APIDetails :endpoint="$page.frontmatter.endpoints[2]"/>

#### Example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token

curl -x GET https://${DOMAIN}.canary.tools/api/v1/devices/dead?auth_token=${AUTH_TOKEN}
```

:::


::: tab "Python"

``` python
import requests

DOMAIN = 'my_domain'
AUTH_TOKEN = 'test_auth_token'

r = requests.get(
    'https://{DOMAIN}.canary.tools/api/v1/devices/dead?auth_token={AUTH_TOKEN}'.format(
        DOMAIN=DOMAIN, AUTH_TOKEN=AUTH_TOKEN
    )
)
r.json()

```

:::

::::

::: api-response

```json
{
  "devices": [
    {
      "description": "JHB office",
      "first_seen": "Tue Jan 28 2020 10:04:33 GMT+0000 (UTC)",
      "first_seen_std": "2020-01-28 10:04:33 UTC+0000",
      "gcp_project": "",
      "gcp_zone": "",
      "id": "00000000YYYYYYYY",
      "ignore_notifications": false,
      "ignore_notifications_disconnects": false,
      "ignore_notifications_reconnects": false,
      "instance_id": "",
      "ip_address": "192.168.1.3",
      "ippers": "win2012",
      "last_seen": "Tue Jan 28 2020 19:43:33 GMT+0000 (UTC)",
      "last_seen_std": "2020-01-28 19:43:33 UTC+0000",
      "live": false,
      "local_time": "2019-11-30 02:09:33",
      "location": "JHB office",
      "mac_address": "YY:YY:YY:YY:YY:YY",
      "migration_status": "",
      "name": "Example dead device",
      "note": "",
      "public_ip": "",
      "region_id": "",
      "sensor": "thinkstcanary",
      "updated": "Tue, 28 Jan 2020 19:43:33 GMT",
      "updated_std": "2020-01-28 19:43:33 UTC+0000",
      "updated_timestamp": 1580240613,
      "uptime": 35240,
      "uptime_age": "9 hours",
      "version": "2.2.5"
    }
  ],
  "feed": "Dead Devices",
  "result": "success",
  "updated": "Tue, 28 Jan 2020 19:43:33 GMT",
  "updated_std": "2020-01-28 19:43:33 UTC+0000",
  "updated_timestamp": 1580240613
}
```
:::