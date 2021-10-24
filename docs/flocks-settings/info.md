---
endpoints:
  ignore_list_info:
    name: Fetch Ignore List Info
    url: /api/v1/flock/settings/whitelisting/info
    method: GET
    description: Fetch the Ignore List info for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the ignore list settings info.
  notifications_info:
    name: Fetch Notifications Info
    url: /api/v1/flock/settings/notifications/info
    method: GET
    description: Fetch the notification settings info for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the notification settings info.
  webhook_info:
    name: Fetch Webhook Info
    url: /api/v1/flock/settings/webhooks/info
    method: GET
    description: Fetch the webhook settings info for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the webhook settings info.
---

# Flock Settings Info

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

You can easily query a Flock's individual settings config by calling the below endpoints. For a Flock's full settings, you can call the [Flock Settings](/flocks/queries.html#flock-settings) endpoint.

:::::

</APIEndpoints>


## Fetch Ignore List Info

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_list_info">

::::: slot description
Fetch all ignore list info for a Flock. This includes the [Default Ignore List](/flocks-settings/default-ignore-list.html), [Hostname Ignore List](/flocks-settings/hostname-ignore-list.html), and [Source Port Ignore List](/flocks-settings/source-port-ignore-list.html).
:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/info \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/whitelisting/info'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID'
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
  "whitelisting_info": {
    "hostname_ignorelisting": {
      "enabled": true,
      "hostnames": [
        "<hostname>"
      ]
    },
    "inherit_global_whitelist_ips": false,
    "ip_whitelisting": {
      "enabled": true,
      "ips": "192.168.1.2"
    },
    "src_port_ignorelisting": {
      "enabled": true,
      "src_ports": "192.168.1.2:455"
    }
  }
}
```
:::

:::::

</APIDetails>

## Fetch Notifications Info

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_info">

::::: slot description
Fetch all notification settings info for a Flock. This includes the [SMS](/flocks-settings/notifications.html#sms) and [Email](/flocks-settings/notifications.html#email) notifications settings.
:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/notifications/info \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/notifications/info'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "notification_info": {
    "emails": {
      "addresses": "<email_address>,<email_address>",
      "enabled": true
    },
    "sms": {
      "enabled": true,
      "numbers": "<cellphone_number>"
    },
    "summary_email": {
      "addresses": "<email_address>",
      "enabled": true
    }
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Fetch Webhook Info

<APIDetails :endpoint="$page.frontmatter.endpoints.webhook_info">

::::: slot description
Fetch all webhook settings info for a Flock. This includes the [Slack](/flocks-settings/webhooks.html#slack), [MS Teams](/flocks-settings/webhooks.html#ms-teams), and [Generic](/flocks-settings/webhooks.html#generic) settings.
:::::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/settings/webhooks/info \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/settings/webhooks/info'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID'
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
  "webhook_info": {
    "generic_webhooks": [
      "<generic_webhook>"
    ],
    "hipchat_webhooks": [],
    "ms_teams": [
      "<ms_teams_webhook>"
    ],
    "slack_webhooks": [
      {
        "channel": "<slack_channel>",
        "configuration_url": "<slack_config_url>",
        "team": "<slack_team>",
        "url": "<slack_webhook>"
      }
    ],
    "webhooks_enabled": true
  }
}
```
:::

:::::

</APIDetails>
