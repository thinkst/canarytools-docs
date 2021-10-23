---
endpoints:
  info:
    name: Fetch Console Settings
    url: /api/v1/settings
    method: GET
    description: Returns all global settings for a Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with all the global settings.
---

# Overview
 
Console Settings endpoints will configure globally defined settings for your Console. 

::: tip 

[Flocks](/guide/terminology.html#flocks) will, by default, inherit these settings, but you
can individually configure a Flock's settings using the [Flock Settings](/flocks-settings/overview.html) endpoints.

:::
  
<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

You can inspect all global settings using the [Fetch Console Settings](#fetch-console-settings) endpoint.

This will include global configuration for your [API](/console-settings/api.html), [Canarytokens](/console-settings/canarytokens.html), [Ignore Lists](/console-settings/ignore-lists.html), [Integrations](/console-settings/integrations.html),
[Notification Channels](/console-settings/notification-channels.html), and [Notification Settings](/console-settings/notification-settings.html).

:::::

</APIEndpoints>

## Fetch Console Settings

<APIDetails :endpoint="$page.frontmatter.endpoints.info">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings'

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
  "auth_token": "<auth_token>",
  "auth_token_enabled": true,
  "canarytokens_user_domains_enable": false,
  "canarytokens_webroot_enable": false,
  "console_domain": "<console_domain>",
  "console_settings_change_enable": false,
  "device_settings_change_enable": false,
  "email_notification_enable": true,
  "generic_incident_webhooks": [
    "<webhook_url>",
    "<webhook_url>"
  ],
  "globally_enforce_2fa": false,
  "hipchat_integration_urls": [],
  "incident_webhooks_enabled": true,
  "module_options": {
    "canarytokens_public_ip": "<ip_address>",
    "canarytokens_user_domains": "",
    "canarytokens_webroot": "<html><body>example!</body></html>",
    "canaryvm_remaining_licenses": 10,
    "canaryvm_version_details": [
      {
        "commit": "8a06e02",
        "link": "<download_link>",
        "ovalink": "<ova_link>",
        "password": "<password>",
        "seedlink": "<seed_link>",
        "version": "2.2.1"
      }
    ],
    "saml_enabled": false,
    "ssh_credential_watch_only": null,
    "ssh_credential_watches": "",
    "ssh_credential_watches_enable": null,
    "update_automatically_enable": true
  },
  "ms_teams_webhooks": [],
  "notification_addresses": [
    "<email_address>"
  ],
  "notification_numbers": [
    "<cellphone_number>"
  ],
  "result": "success",
  "sensitive_data_masking_enable": false,
  "slack_incident_webhook": [],
  "sms_notification_enable": false,
  "summary_email_addresses": [
    "<email_address>"
  ],
  "summary_email_enable": false,
  "syslog_enabled": false,
  "syslog_facility": "local0",
  "syslog_hostname": "localhost",
  "syslog_loglevel": "crit",
  "syslog_port": "514",
  "syslog_protocol": "tcp",
  "syslog_tls": "off",
  "whitelist_enable": true,
  "whitelist_hostnames": "<hostname>",
  "whitelist_hostnames_enable": true,
  "whitelist_ips": "<ip_address>,<ip_address>",
  "whitelist_oid_enable": false,
  "whitelist_oids": "",
  "whitelist_src_port_enable": true,
  "whitelist_src_port_ips": "<ip_address>:<port>"
}
```
:::

:::::

</APIDetails>


