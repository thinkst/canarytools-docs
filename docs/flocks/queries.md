---
endpoints:
  list_sensors:
    name: List Flock Sensors
    url: /api/v1/flock/list
    method: GET
    description: Retrieve all sensors in a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the list of all sensors in the Flock.
  settings:
    name: Flock Settings
    url: /api/v1/flock/settings
    method: GET
    description: Retrieve the settings for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the Flock settings.
  summary:
    name: Flock Summary
    url: /api/v1/flock/summary
    method: GET
    description: Retrieve the information summary for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: num_top_tokens
        required: false
        type: int
        description: Return the top most deployed <num_top_tokens> number of tokens
    response: A JSON structure with the Flock information summary.
  users:
    name: Flock Users
    url: /api/v1/flock/users
    method: GET
    description: Retrieve the users assigned to a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the Flock's user list.
  flocks_filter:
    name: Filter Flocks
    url: /api/v1/flocks/filter
    method: GET
    description: Search Flocks using a filter string that matches against Flock information.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: filter_str
        required: true
        type: string
        description: String to match on.
    response: A JSON structure with the list of filtered Flocks. 
  flocks_list:
    name: List FLocks for User
    url: /api/v1/flocks/list
    method: GET
    description: Retrieve a list of Flocks. If an `email` is provided, restricts the output to just the Flocks that user can view.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: false
        type: string
        description: Email of a valid user
    response: A JSON structure with the list of Flocks. 
  flocks_summary:
    name: List Flocks Summary
    url: /api/v1/flocks/summary
    method: GET
    description: Retrieve all Flocks' summary information.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with the list of all Flock summaries. 
---

# Queries

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

The following endpoints allow you to query your Flocks.

:::::

</APIEndpoints>

## List Flock Sensors

<APIDetails :endpoint="$page.frontmatter.endpoints.list_sensors">

::::: slot description

Retrieve all [Sensors](/guide/terminology.html#sensors) in a Flock.

:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/list'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id':'EXAMPLE_FLOCK_ID'
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
  "sensors": [
    "<node_id>",
    "<canarytoken>",
    "<canarytoken>",
    "<canarytoken>"
  ]
}
```
:::

:::::

</APIDetails>

## Flock Settings

<APIDetails :endpoint="$page.frontmatter.endpoints.settings">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id':'EXAMPLE_FLOCK_ID'
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
  "settings": {
    "change_control": {
      "device_settings_notifications": "Global",
      "flock_settings_notifications": "Global"
    },
    "notification_info": {
      "emails": {
        "addresses": "<user_email>,<user_email>",
        "enabled": "Global"
      },
      "sms": {
        "enabled": "Global",
        "numbers": ""
      },
      "summary_email": {
        "addresses": "",
        "enabled": "Global"
      }
    },
    "webhooks": {
      "generic_webhooks": [],
      "hipchat_webhooks": [],
      "ms_teams": [],
      "slack_webhooks": [],
      "webhooks_enabled": "Global"
    },
    "whitelisting": {
      "hostname_ignorelisting": {
        "enabled": "Global",
        "hostnames": []
      },
      "inherit_global_whitelist_ips": false,
      "ip_whitelisting": {
        "enabled": "Global",
        "ips": ""
      },
      "src_port_ignorelisting": {
        "enabled": "Global",
        "src_ports": ""
      }
    }
  }
}
```
:::

:::::

</APIDetails>

## Flock Summary

<APIDetails :endpoint="$page.frontmatter.endpoints.summary">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/summary \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/summary'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id':'EXAMPLE_FLOCK_ID'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "different_token_num": 6,
  "disabled_tokens": 1,
  "incident_count": 0,
  "result": "success",
  "top_tokens": [
    {
      "count": 2,
      "kind": "aws-id"
    },
    {
      "count": 2,
      "kind": "cloned-web"
    },
    {
      "count": 1,
      "kind": "pdf-acrobat-reader"
    }
  ],
  "total_tokens": 8,
  "triggered_tokens": 0
}
```
:::

:::::

</APIDetails>

## Flock Users

<APIDetails :endpoint="$page.frontmatter.endpoints.users">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/users \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/users'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id':'EXAMPLE_FLOCK_ID'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "managers": [
    "<user_email>"
  ],
  "result": "success",
  "watchers": [
    "<user_email>"
  ]
}
```
:::

:::::

</APIDetails>

## Filter Flocks 

<APIDetails :endpoint="$page.frontmatter.endpoints.flocks_filter">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flocks/filter \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d filter_str='EXAMPLE_FILTER_STRING' \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flocks/filter'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'filter_str':'EXAMPLE_FILTER_STRING'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "flocks": [
    {
      "flock_id": "<flock_id>",
      "name": "Example Flock Name",
      "note": ""
    }
  ],
  "result": "success"
}
```
:::

:::::

</APIDetails>

## List Flocks for User

<APIDetails :endpoint="$page.frontmatter.endpoints.flocks_list">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flocks/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_EMAIL \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flocks/list'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email':'EXAMPLE_EMAIL'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "flocks": {
    "<flock_id>": "Example Flock Name",
    "<flock_id>": "Another Example Flock Name"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## List Flocks Summary

<APIDetails :endpoint="$page.frontmatter.endpoints.flocks_summary">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flocks/summary \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flocks/summary'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "flocks_summary": {
    "flock:default": {
      "devices": [
        "<node_id>",
        "<canarytoken>",
        "<canarytoken>"
      ],
      "disabled_tokens": 3,
      "enabled_tokens": 7,
      "global_settings": {
        "console_change_alerts_enabled": false,
        "console_public_key": "<Console's Public Key>",
        "device_change_alerts_enabled": false,
        "email_notifications": true,
        "listen_domain": "<Console's Listen Domain>",
        "sms_notifications": false,
        "summary_emails": true,
        "webhook_notifications": false,
        "whitelist_enabled": false,
        "whitelist_ips": [
          ""
        ]
      },
      "incident_count": 0,
      "name": "Default Flock",
      "note": null,
      "offline_devices": 0,
      "online_devices": 1,
      "settings": {
        "change_control": {
          "device_settings_notifications": "Global",
          "flock_settings_notifications": "Global"
        },
        "notification_info": {
          "emails": {
            "addresses": "<user_email>,<user_email>",
            "enabled": "Global"
          },
          "sms": {
            "enabled": "Global",
            "numbers": ""
          },
          "summary_email": {
            "addresses": "",
            "enabled": "Global"
          }
        },
        "webhooks": {
          "generic_webhooks": [],
          "hipchat_webhooks": [],
          "ms_teams": [],
          "slack_webhooks": [],
          "webhooks_enabled": "Global"
        },
        "whitelisting": {
          "hostname_ignorelisting": {
            "enabled": "Global",
            "hostnames": []
          },
          "inherit_global_whitelist_ips": false,
          "ip_whitelisting": {
            "enabled": "Global",
            "ips": ""
          },
          "src_port_ignorelisting": {
            "enabled": "Global",
            "src_ports": ""
          }
        }
      },
      "total_tokens": 10
    },
    ...
  },
  "result": "success",
  "unacked_device_incident_counts": {}
}
```
:::

:::::

</APIDetails>

