# Backup and Clear Incidents

In this example we'll show you how to view incidents from your Console, download them as a json file, followed by acknowledging and deleting them from your Console.

<div class="section-container">
  <div class="details-content">

We'll start by using the [Unacknowledged Incidents](/incidents/queries.html#unacknowledged-incidents) API to obtain a list of Incidents

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
    ...
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

After viewing the incidents, we'll use the [Acknowledge Multiple-Incidents](/incidents/actions.html#acknowledge-multiple-incidents) API to acknowledge all of the incidents on the Console.

To do this, we'll use the `older_than` optional parameter, which we'll see to a period that encompasses all of the incidents. In this case, to ensure we acknowledge all of the incidents, we'll use `0h`.


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

Before deleting these incidents from the Console, we'll use [Incidents All](/incidents/queries.html#all-incidents) API to write the incidents to an output file, archiving them for future reference.

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

Finally, with all of the incidents safely archived, we will used the [Delete Multiple Incidents](/incidents/actions.html#delete-multiple-incidents) API to remove the incidents from the Console.

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