---
endpoints:
  ping:
    name: Ping
    url: /api/v1/ping
    method: GET
    description: A simple endpoint to test if the API is reachable.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON message with a response indicator.
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
  licenses:
    name: Bird Licenses
    url: /api/v1/license
    method: GET
    description: Retrieve a summary of available Bird licenses.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure containing a list of Canary license information.
  licenses_detailed_info:
    name: Bird Licenses Detailed Information
    url: /api/v1/license
    method: GET
    description: Retrieve a list of Cloud / Virtual license details including limits and URLs to images.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure containing detailed Canary license information.
---
# Console

These are a collection of endpoints that allow you to obtain information about your Console and it's configuration.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Ping

<APIDetails :endpoint="$page.frontmatter.endpoints.ping"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token

curl "https://${DOMAIN}.canary.tools/api/v1/ping?auth_token=${AUTH_TOKEN}"
```

:::


::: tab "Python"

``` python
import requests

DOMAIN = 'my_domain'
AUTH_TOKEN = 'test_auth_token'

r = requests.get(
    'https://{DOMAIN}.canary.tools/api/v1/ping?auth_token={AUTH_TOKEN}'.format(
        DOMAIN=DOMAIN, AUTH_TOKEN=AUTH_TOKEN
    )
)
print(r.json())

```

:::

::::


::: api-response
```json
{
  "result": "success"
}
```
:::

## Console Features

::: tip
If you notice some features that aren't enabled but may interest you, contact support and we'll gladly explain and enable them for you.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.features"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token

curl "https://${DOMAIN}.canary.tools/api/v1/console/features?auth_token=${AUTH_TOKEN}"
```

:::


<APIDetails :endpoint="$page.frontmatter.endpoints.features"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token

curl "https://${DOMAIN}.canary.tools/api/v1/console/features?auth_token=${AUTH_TOKEN}"
```

:::

::: tab "Python"

``` python
import requests

DOMAIN = 'my_domain'
AUTH_TOKEN = 'test_auth_token'

r = requests.get(
    'https://{DOMAIN}.canary.tools/api/v1/console/features?auth_token={AUTH_TOKEN}'.format(
        DOMAIN=DOMAIN, AUTH_TOKEN=AUTH_TOKEN
    )
)
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
    "canaryvm": true,
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
    "slackapitoken": false,
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

## Bird Licenses

<APIDetails :endpoint="$page.frontmatter.endpoints.licenses"/>

## Detailed Bird License Information

<APIDetails :endpoint="$page.frontmatter.endpoints.licenses_detailed_info"/>

