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
        description: Whether to include a dict of the Bird settings (defaults to `false`)
      - name: exclude_fixed_settings
        required: false
        type: string
        description:  Whether to include settings which the user can not change (defaults to `false`)
    response: JSON structure of Bird's current information.
---

# Queries

These are a collection of endpoints that allow you to query and retrieve Birds that are connected to your Console.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

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
      "description": "SRV Room",
      "first_seen": "Wed Oct 23 2019 11:58:56 GMT+0000 (UTC)",
      "first_seen_std": "2019-10-23 11:58:56 UTC+0000",
      "gcp_project": "",
      "gcp_zone": "",
      "id": "<node_id>",
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
      "mac_address": "00:00:00:00:00:00",
      "migration_status": "",
      "name": "ExampleBird",
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
      "description": "SRV Room",
      "first_seen": "Wed Oct 23 2019 11:58:56 GMT+0000 (UTC)",
      "first_seen_std": "2019-10-23 11:58:56 UTC+0000",
      "gcp_project": "",
      "gcp_zone": "",
      "id": "<node_id>",
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
      "mac_address": "00:00:00:00:00:00",
      "migration_status": "",
      "name": "ExampleBird",
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
      "first_seen": "Tue Jan 28 2020 10:04:33 GMT+0000 (UTC)",
      "first_seen_std": "2020-01-28 10:04:33 UTC+0000",
      "gcp_project": "",
      "gcp_zone": "",
      "id": "<node_id>",
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
      "mac_address": "00:00:00:00:00:00",
      "migration_status": "",
      "name": "ExampleBird",
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

:::::

</APIDetails>

## Filter Birds

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
      "autoreg_time": "1580205358.394564",
      "current_settings": "devicesettings:<device_hash>:1580205876",
      "description": "SVR Room",
      "device_id": "<node_id>",
      "device_id_hash": "<device_hash>",
      "device_live": "False",
      "device_version": "2.2.5",
      "first_seen": "1580205873",
      "first_seen_age": "8 weeks",
      "first_seen_printable": "Tue Jan 28 2020 10:04:33 GMT+0000 (UTC)",
      "first_seen_std": "2020-01-28 10:04:33 UTC+0000",
      "flock_id": "flock:default",
      "ghost": "False",
      "id": "<node_id>",
      "ignore_notifications_disconnect": "False",
      "ignore_notifications_general": "False",
      "ip_address": "192.168.1.2",
      "ippers": "win2012",
      "last_dns_settings_message_time": "2019-11-29 16:22:31",
      "last_heartbeat": "1580240613",
      "last_heartbeat_age": "8 weeks",
      "last_heartbeat_printable": "Tue Jan 28 2020 19:43:33 GMT+0000 (UTC)",
      "last_seen_std": "2020-01-28 19:43:33 UTC+0000",
      "live": "False",
      "local_time": "2019-11-30 02:09:33",
      "logtype": "1004",
      "mac": "00:00:00:00:00:00",
      "mac_address": "00:00:00:00:00:00",
      "name": "ExampleBird",
      "netmask": "24",
      "node_id": "<node_id>",
      "reconnect_count": "0",
      "sensor": "thinkstcanary",
      "service_count": "8",
      "uptime": "35240",
      "uptime_age": "9 hours",
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
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/info'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID"
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
    "autoreg_time": "1580205358.394564",
    "current_settings": "devicesettings:<device_hash>:1580205876",
    "description": "SVR Room",
    "device_id": "<node_id>",
    "device_id_hash": "<device_hash>",
    "device_live": "False",
    "device_version": "2.2.5",
    "first_seen": "1580205873",
    "first_seen_age": "8 weeks",
    "first_seen_printable": "Tue Jan 28 2020 10:04:33 GMT+0000 (UTC)",
    "first_seen_std": "2020-01-28 10:04:33 UTC+0000",
    "flock_id": "flock:default",
    "ghost": "False",
    "id": "<node_id>",
    "ignore_notifications_disconnect": "False",
    "ignore_notifications_general": "False",
    "ip_address": "192.168.1.2",
    "ippers": "win2012",
    "last_dns_settings_message_time": "2019-11-29 16:22:31",
    "last_heartbeat": "1580240613",
    "last_heartbeat_age": "8 weeks",
    "last_heartbeat_printable": "Tue Jan 28 2020 19:43:33 GMT+0000 (UTC)",
    "last_seen_std": "2020-01-28 19:43:33 UTC+0000",
    "live": "False",
    "local_time": "2019-11-30 02:09:33",
    "location": "in the jhb office",
    "logtype": "1004",
    "mac": "00:00:00:00:00:00",
    "mac_address": "00:00:00:00:00:00",
    "name": "ExampleBird",
    "netmask": "24",
    "node_id": "<node_id>",
    "reconnect_count": "0",
    "sensor": "thinkstcanary",
    "service_count": "8",
    "settings": {
      "device.ad_pubkey": "<ad_pub_key>",
      "device.desc": "SVR Room",
      "device.dhcp.enabled": true,
      "device.dns1": "192.168.0.1",
      "device.dns2": "192.168.0.2",
      "device.gw": "192.168.0.1",
      "device.ip_address": "192.168.1.2",
      "device.ippers": "win2012",
      "device.mac": "00:00:00:00:00:00",
      "device.name": "ExampleBird",
      "device.netmask": "255.255.255.0",
      "device.personality": "",
      "device.usermodule": [],
      "firewall.enabled": false,
      "firewall.rulelist": [
        {
          "port": "null",
          "rule": "",
          "source": ""
        }
      ],
      "ftp.banner": "FTP server ready",
      "ftp.enabled": true,
      "ftp.port": 21,
      "git.enabled": false,
      "git.port": 9418,
      "http.banner": "Apache/2.2.22 (Ubuntu)",
      "http.enabled": false,
      "http.headers": {},
      "http.headers.enabled": false,
      "http.port": 80,
      "http.skin": "nasLogin",
      "http.userwebroot_present": false,
      "httpproxy.banner": "",
      "httpproxy.enabled": false,
      "httpproxy.port": 8080,
      "httpproxy.skin": "squid",
      "https.enabled": false,
      "https.headers": {},
      "https.headers.enabled": false,
      "https.redirect_http.enabled": false,
      "modbus.enabled": false,
      "modbus.majorminorrevision": "1.2",
      "modbus.modelname": "",
      "modbus.port": 502,
      "modbus.productcode": "1",
      "modbus.productname": "1769-L23E-QB1 Ethernet Port",
      "modbus.userapplicationname": "device1",
      "modbus.vendorname": "Rockwell Automation/Allen Bradley",
      "modbus.vendorurl": "http://www.rockwellautomation.com",
      "mssql.enabled": false,
      "mssql.port": 1433,
      "mssql.version": "2012",
      "mysql.banner": "5.5.43-0ubuntu0.14.04.1",
      "mysql.enabled": false,
      "mysql.port": 3306,
      "ntp.enabled": false,
      "ntp.port": 123,
      "portscan.enabled": false,
      "redis.enabled": false,
      "redis.port": 6379,
      "remoteupdates.enabled": true,
      "rollback.enabled": true,
      "sip.enabled": false,
      "sip.port": 5060,
      "smb.advanced.enabled": false,
      "smb.advanced.preferred_dc.enabled": false,
      "smb.advanced.preferred_dc.servers": "",
      "smb.advanced.serversigning": "mandatory",
      "smb.domain": "corp.thinkst.com",
      "smb.enabled": false,
      "smb.filetree": [
        {
          "children": [
            {
              "name": "Default Cisco Router Config.docx",
              "type": "docx"
            },
            {
              "name": "Default Windows Desktop Configuration.docx",
              "type": "docx"
            },
            {
              "children": [
                {
                  "name": "network_diagram_dmz.pdf",
                  "type": "pdf"
                },
                {
                  "name": "network_diagram_ldn_office.pdf",
                  "type": "pdf"
                }
              ],
              "name": "network",
              "type": "folder"
            }
          ],
          "name": "IT",
          "type": "folder"
        },
        {
          "children": [
            {
              "name": "Executive Contact Details.docx",
              "type": "docx"
            },
            {
              "name": "NDA_template.docx",
              "type": "docx"
            },
            {
              "name": "Executive Compensation 2019-20.pdf",
              "type": "pdf"
            }
          ],
          "name": "Staff Docs",
          "type": "folder"
        }
      ],
      "smb.guest.enabled": true,
      "smb.mode": "workgroup",
      "smb.netbios_domain.enabled": false,
      "smb.netbiosname": "OFFICESHARE",
      "smb.serverstring": "Office Share",
      "smb.sharecomment": "Office Document Share",
      "smb.sharename": "Documents",
      "smb.workgroup": "OFFICE",
      "snmp.enabled": false,
      "snmp.port": 161,
      "ssh.enabled": true,
      "ssh.port": 22,
      "ssh.preauth_banner": "",
      "ssh.version": "SSH-2.0-MS_1.100",
      "tcpbanner.enabled": false,
      "tcpbanner_1.alertstring": "",
      "tcpbanner_1.alertstring.enabled": false,
      "tcpbanner_1.datareceivedbanner": "502 5.5.2 Error: command not recognized\\r\\n",
      "tcpbanner_1.enabled": true,
      "tcpbanner_1.initbanner": "220 My Simple Fake SMTP Server.\\r\\n",
      "tcpbanner_1.keep_alive.enabled": false,
      "tcpbanner_1.keep_alive_secret": "",
      "tcpbanner_1.port": 8001,
      "tcpbanner_10.datareceivedbanner": "",
      "tcpbanner_10.enabled": false,
      "tcpbanner_10.initbanner": "",
      "tcpbanner_10.port": 8010,
      "tcpbanner_2.datareceivedbanner": "",
      "tcpbanner_2.enabled": false,
      "tcpbanner_2.initbanner": "",
      "tcpbanner_2.port": 8002,
      "tcpbanner_3.datareceivedbanner": "",
      "tcpbanner_3.enabled": false,
      "tcpbanner_3.initbanner": "",
      "tcpbanner_3.port": 8003,
      "tcpbanner_4.datareceivedbanner": "",
      "tcpbanner_4.enabled": false,
      "tcpbanner_4.initbanner": "",
      "tcpbanner_4.port": 8004,
      "tcpbanner_5.datareceivedbanner": "",
      "tcpbanner_5.enabled": false,
      "tcpbanner_5.initbanner": "",
      "tcpbanner_5.port": 8005,
      "tcpbanner_6.datareceivedbanner": "",
      "tcpbanner_6.enabled": false,
      "tcpbanner_6.initbanner": "",
      "tcpbanner_6.port": 8006,
      "tcpbanner_7.datareceivedbanner": "",
      "tcpbanner_7.enabled": false,
      "tcpbanner_7.initbanner": "",
      "tcpbanner_7.port": 8007,
      "tcpbanner_8.datareceivedbanner": "",
      "tcpbanner_8.enabled": false,
      "tcpbanner_8.initbanner": "",
      "tcpbanner_8.port": 8008,
      "tcpbanner_9.datareceivedbanner": "",
      "tcpbanner_9.enabled": false,
      "tcpbanner_9.initbanner": "",
      "tcpbanner_9.port": 8009,
      "telnet.authentication_failed_prompt": "\\nLogin incorrect\\n\\n",
      "telnet.banner": "Welcome to Microsoft Telnet Service\\r\\n",
      "telnet.enabled": true,
      "telnet.password_prompt": "password: ",
      "telnet.port": 23,
      "telnet.user_prompt": "login: ",
      "tftp.enabled": false,
      "tftp.port": 69,
      "vnc.enabled": true,
      "vnc.port": 5900
    },
    "unacknowleged_incidents": [],
    "uptime": "35240",
    "uptime_age": "9 hours",
    "was_rollback": "False"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>