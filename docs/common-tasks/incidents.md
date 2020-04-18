# View and Maintain Incident Records

In this example we'll show you how to view incidents from your console, download them as a json file, followed by acknowledging and deleting them from your console.

Before we get stuck in, it's worth mentioning that we have a host of [Useful Scripts](https://github.com/thinkst/canary-utils) that are worth looking into.

<div class="section-container">
  <div class="details-content">

We'll start by using the [Unacknowledged-Incidents](/incidents/queries.html#unacknowledged-incidents) API to obtain list of Incidents

To make handling a little easier, we'll set the optional `limit` parameter to 5.

  </div>
  <div class="example-content">

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/unacknowledged \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d limit=5 \
  -G
```
:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/unacknowledged'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'limit':'5'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::
:::  api-response 
``` json
{
  "cursor": {
    "next": "MTUzOjE0NzoxNjA6NTowOjA6Mjoy",
    "next_link": "https://EXAMPLE.canary.tools/api/v1/incidents/unacknowledged?cursor=MTUzOjE0NzoxNjA6NTowOjA6Mjoy&auth_token=<auth_token>&shrink=true",
    "prev": null,
    "prev_link": null
  },
  "feed": "Unacknowledged Incidents",
  "incidents": [
    {
      "description": {
        "acknowledged": "False",
        "created": "1587155370",
        "created_std": "2020-04-17 20:29:30 UTC+0000",
        "description": "SSH Login Attempt",
        "dst_host": "<destination_ip>",
        "dst_port": "22",
        "events": [
          {
            "LOCALVERSION": "SSH-2.0-OpenSSH_5.1p1 Debian-4",
            "PASSWORD": "<password>",
            "REMOTEVERSION": "SSH-2.0-OpenSSH_7.9",
            "USERNAME": "<user_name>",
            "timestamp": 1587155370,
            "timestamp_std": "2020-04-17 20:29:30 UTC+0000"
          }
        ],
        "events_count": "1",
        "ip_address": "192.168.1.2",
        "ippers": "",
        "local_time": "2020-04-17 20:29:21",
        "logtype": "4002",
        "mac_address": "00:00:00:00:00:00",
        "name": "ExampleBird",
        "node_id": "<node_id>",
        "notified": "False",
        "src_host": "<host_ip_address>",
        "src_host_reverse": "<host_name>",
        "src_port": "<source_port>"
      },
      "hash_id": "<hash_id>",
      "id": "<node_id>",
      "summary": "SSH Login Attempt",
      "updated": "Fri, 17 Apr 2020 20:29:30 GMT",
      "updated_id": 147,
      "updated_std": "2020-04-17 20:29:30 UTC+0000",
      "updated_time": "1587155370"
    },
    {
      "description": {
        "acknowledged": "False",
        "created": "1587155387",
        "created_std": "2020-04-17 20:29:47 UTC+0000",
        "description": "Telnet Login Attempt",
        "dst_host": "<destination_ip>",
        "dst_port": "23",
        "events": [
          {
            "PASSWORD": "<password>",
            "TERMSIZE": "103x43",
            "TERMTYPE": "XTERM-256COLOR",
            "USERNAME": "<user_name>",
            "timestamp": 1587155387,
            "timestamp_std": "2020-04-17 20:29:47 UTC+0000"
          }
        ],
        "events_count": "1",
        "ip_address": "192.168.1.2",
        "ippers": "",
        "local_time": "2020-04-17 20:29:38",
        "logtype": "6001",
        "mac_address": "00:00:00:00:00:00",
        "name": "ExampleBird",
        "node_id": "<node_id>",
        "notified": "False",
        "src_host": "<host_ip_address>",
        "src_host_reverse": "<host_name>",
        "src_port": "<source_port>"
      },
      "hash_id": "<hash_id>",
      "id": "<node_id>",
      "summary": "Telnet Login Attempt",
      "updated": "Fri, 17 Apr 2020 20:29:47 GMT",
      "updated_id": 148,
      "updated_std": "2020-04-17 20:29:47 UTC+0000",
      "updated_time": "1587155387"
    },
    {
      "description": {
        "acknowledged": "False",
        "created": "1587155434",
        "created_std": "2020-04-17 20:30:34 UTC+0000",
        "description": "MySQL Login Attempt",
        "dst_host": "<destination_ip>",
        "dst_port": "3306",
        "events": [
          {
            "CLIENT_HASH": null,
            "PASSWORD": "<password>",
            "SALT": "8b_hQIJrF4B%*?9MMsal",
            "USERNAME": "<user_name>",
            "timestamp": 1587155434,
            "timestamp_std": "2020-04-17 20:30:34 UTC+0000"
          }
        ],
        "events_count": "1",
        "ip_address": "192.168.1.2",
        "ippers": "",
        "local_time": "2020-04-17 20:30:24",
        "logtype": "8001",
        "mac_address": "00:00:00:00:00:00",
        "name": "ExampleBird",
        "node_id": "<node_id>",
        "notified": "False",
        "src_host": "<host_ip_address>",
        "src_host_reverse": "<host_name>",
        "src_port": "<source_port>"
      },
      "hash_id": "<hash_id>",
      "id": "<node_id>",
      "summary": "MySQL Login Attempt",
      "updated": "Fri, 17 Apr 2020 20:30:34 GMT",
      "updated_id": 149,
      "updated_std": "2020-04-17 20:30:34 UTC+0000",
      "updated_time": "1587155434"
    },
    {
      "description": {
        "acknowledged": "False",
        "created": "1587155440",
        "created_std": "2020-04-17 20:30:40 UTC+0000",
        "description": "HTTP Login Attempt",
        "dst_host": "<destination_ip>",
        "dst_port": "80",
        "events": [
          {
            "HOSTNAME": "192.168.0.73",
            "METHOD": "POST",
            "PASSWORD": "<password>",
            "PATH": "/index.html",
            "RESPONSE": 200,
            "SKIN": "nasLogin",
            "USERAGENT": "curl/7.54.0",
            "USERNAME": "<user_name>",
            "timestamp": 1587155440,
            "timestamp_std": "2020-04-17 20:30:40 UTC+0000"
          }
        ],
        "events_count": "1",
        "ip_address": "192.168.1.2",
        "ippers": "",
        "local_time": "2020-04-17 20:30:31",
        "logtype": "3001",
        "mac_address": "00:00:00:00:00:00",
        "name": "ExampleBird",
        "node_id": "<node_id>",
        "notified": "False",
        "src_host": "<host_ip_address>",
        "src_host_reverse": "<host_name>",
        "src_port": "<source_port>"
      },
      "hash_id": "<hash_id>",
      "id": "<node_id>",
      "summary": "HTTP Login Attempt",
      "updated": "Fri, 17 Apr 2020 20:30:40 GMT",
      "updated_id": 150,
      "updated_std": "2020-04-17 20:30:40 UTC+0000",
      "updated_time": "1587155440"
    },
    {
      "description": {
        "acknowledged": "False",
        "created": "1587155458",
        "created_std": "2020-04-17 20:30:58 UTC+0000",
        "description": "TFTP Request",
        "dst_host": "<destination_ip>",
        "dst_port": "69",
        "events": [
          {
            "FILENAME": "/etc/password",
            "MODE": "netascii",
            "OPCODE": "READ",
            "timestamp": 1587155458,
            "timestamp_std": "2020-04-17 20:30:58 UTC+0000"
          },
          {
            "FILENAME": "/etc/password",
            "MODE": "netascii",
            "OPCODE": "READ",
            "timestamp": 1587155463,
            "timestamp_std": "2020-04-17 20:31:03 UTC+0000"
          }
        ],
        "events_count": "2",
        "ip_address": "192.168.1.2",
        "ippers": "",
        "local_time": "2020-04-17 20:30:49",
        "logtype": "10001",
        "mac_address": "00:00:00:00:00:00",
        "name": "ExampleBird",
        "node_id": "<node_id>",
        "notified": "False",
        "src_host": "<host_ip_address>",
        "src_host_reverse": "<host_name>",
        "src_port": "<source_port>"
      },
      "hash_id": "<hash_id>",
      "id": "<node_id>",
      "summary": "TFTP Request",
      "updated": "Fri, 17 Apr 2020 20:31:03 GMT",
      "updated_id": 152,
      "updated_std": "2020-04-17 20:31:03 UTC+0000",
      "updated_time": "1587155463"
    }
  ],
  "max_updated_id": 152,
  "result": "success",
  "updated": "Fri, 17 Apr 2020 20:31:03 GMT",
  "updated_std": "2020-04-17 20:31:03 UTC+0000",
  "updated_timestamp": 1587155463
}
```
:::
  </div>
</div>

<div class="section-container">
  <div class="details-content">

After viewing the incidents, we'll use the [Acknowledged-Multiple-Incidents](/incidents/actions.html#acknowledge-multiple-incidents) API to acknowledge all of the incidents on the Console.

To do this, we'll use the `older_than` optional parameter, which we'll see to a period that encompasses all of the incidents. In this case, to ensure we achnowledge all of the incidents, we'll use `0h`.


  </div>
  <div class="example-content">

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/acknowledge \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d older_than='0h'
```
:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/acknowledge'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'limit':'5'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::
:::  api-response 
``` json
{
  "action": "acknowledged",
  "keys": [
    "<incident_key>",
    "<incident_key>",
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
  </div>
</div>

<div class="section-container">
  <div class="details-content">

Before deleting these incidents from the Console, we'll use [Incidents-All](/incidents/queries.html#all-incidents) API to write the incidents to an output file, archiving them for future reference.

We'll also include the archive date in the filename.


  </div>
  <div class="example-content">

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/all \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G -o incident_archive_04102020.txt
```
:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/all'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'limit':'5'
}

r = requests.get(url, params=payload)

with open('incident_archive_04102020.txt', 'wb') as f:
    f.write(r.content)
```

:::

::::
:::  api-response 
``` json
{
  "action": "acknowledged",
  "keys": [
    "<incident_key>",
    "<incident_key>",
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
  </div>
</div>

<div class="section-container">
  <div class="details-content">

Finally, with all of the incidents safely archived, we will used the [Delete_Multiple_Incidents](/incidents/actions.html#delete-multiple-incidents) API to remove the incidents from the Console.

Once again, we'll set the optional `older_than` parameter to `0h`.


  </div>
  <div class="example-content">

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/incidents/delete \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d older_than='0h'
```
:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/incidents/delete'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'older_than': '0h'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::
:::  api-response 
``` json
{
  "action": "deleted",
  "keys": [
    "<incident_key>",
    "<incident_key>",
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
  </div>
</div>