---
endpoints:
  features:
    name: Console Features
    url: /api/v1/console/features
    method: GET
    description: Retrieves a list of enabled and disabled Console features.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON message with result indicator and list of Console features.
---
# Features

These are a collection of endpoints that allow you to obtain information about features that are enabled on your Console.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Console Features

::: tip
If you notice some features that aren't enabled but may interest you, contact support and we'll gladly explain and enable them for you.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.features">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/console/features \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/console/features'

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
  "features": {
    "adv_throttle_notifications": true,
    "apeeper_token": true,
    "awsidtoken": true,
    "awsidtoken_username": false,
    "azure_canary": false,
    "canary_firewall": false,
    "canary_smb_login": false,
    "canarytokens": true,
    "canaryvm": false,
    "cloud_canary": false,
    "console_api": true,
    "enable_auto_updates": false,
    "gcp_canary": false,
    "gdoc_factory_tokens": false,
    "globally_enforce_2fa": false,
    "http_token_whitelisting": false,
    "hyperv_canary": false,
    "incident_webhooks": true,
    "mask_notification_passwords": true,
    "new_ui": true,
    "office365_mail_token": true,
    "one_time_actions": true,
    "preserve_canaryvm_macs": true,
    "preserve_global_macs": false,
    "reset_endpoint": false,
    "rss_feeds": false,
    "saml": false,
    "skip_gateway_subnet_check": false,
    "slackapitoken": true,
    "snmp": false,
    "snmp_oid_whitelist": false,
    "ssh_credential_watches": false,
    "throttle_notifications": true,
    "tokenfactory": false,
    "webhook_hipchat": false,
    "whitelist_hostname": false,
    "whitelist_src_port": false
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>