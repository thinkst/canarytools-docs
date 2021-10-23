---
endpoints:
  custom_domains_disable:
    name: Disable Custom User Domains
    url: /api/v1/settings/canarytokens/user_domains/disable
    method: POST
    description: Disable custom user domains for your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  custom_domains_enable:
    name: Enable Custom User Domains
    url: /api/v1/settings/canarytokens/user_domains/enable
    method: POST
    description: Enable custom user domains for your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  custom_domains_save:
    name: Set Custom User Domains
    url: /api/v1/settings/canarytokens/user_domains/save
    method: POST
    description: Set the custom Canarytokens domains for your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: user_domains
        required: true
        type: string
        description: A newline separated list of custom domains to set
    response: A JSON structure with result indicator.
  custom_webroot_disable:
    name: Disable Custom Canarytokens Site
    url: /api/v1/settings/canarytokens/webroot/disable
    method: POST
    description: Disable the custom Canarytokens site for your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  custom_webroot_enable:
    name: Enable Custom Canarytokens Site
    url: /api/v1/settings/canarytokens/webroot/enable
    method: POST
    description: Enable the custom Canarytokens site for your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  custom_webroot_save:
    name: Set Custom Canarytokens Site
    url: /api/v1/settings/canarytokens/webroot/save
    method: POST
    description: Set the custom Canarytokens site for your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: webroot
        required: true
        type: string
        description: Valid html of the site's page
    response: A JSON structure with result indicator.
---

# Canarytokens Settings

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Apart from the [Canarytokens](/canarytokens/actions.html) section which allows you to create and manage Canarytokens, the following endpoints allow you to configure the Console-side settings for Canarytokens.

:::::

</APIEndpoints>

## Custom Webroot

Along with your Console, you have your own running Canarytokens server. This server runs on the `<your_unique_hash>.o3n.io` domain and is unique to your Canarytokens server. Any Canarytoken you create will reach out to this domain to trigger its alert.

We do however allow you to set a custom domain. This will mean that all new tokens will be created using the custom domain but will still reach out to your Console and create an alert if triggered.

::: tip Custom User Domain
In order for your Canarytokens to successfully reach out to your Console using your custom domain, you'll need to correctly setup the DNS records for the domain to point to your Console.

Assuming your custom domain is `your.custom.domain` and your Canarytokens server IP is `x.x.x.x`, an example configuration would require the below records to be setup in the `your.custom.domain` zone:

```
docs.your.custom.domain NS docs-ns.your.custom.domain
docs-ns.your.custom.domain A x.x.x.x
```
:::

### Disable Custom User Domains

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_domains_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/user_domains/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/user_domains/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.post(url, data=payload)

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

:::::

</APIDetails>

### Enable Custom User Domains

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_domains_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/user_domains/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/user_domains/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.post(url, data=payload)

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

:::::

</APIDetails>

### Set Custom User Domains

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_domains_save">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/user_domains/save \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d user_domains=EXAMPLE_DOMAIN_LIST
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/user_domains/save'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'user_domains': 'EXAMPLE_DOMAINS_LIST'
}

r = requests.post(url, data=payload)

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

:::::

</APIDetails>

## Custom Site

If someone browses to your Canarytokens domain (`<your_unique_hash>.o3n.io`), we'll present them with the default apache page (in order to not raise any alarms).

This is usually sufficient (as you won't usually have people browsing to the site, only tokens getting triggered off the domain), but we do allow you to change it.

### Disable Custom Canarytokens Site

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_webroot_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/webroot/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/webroot/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.post(url, data=payload)

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

:::::

</APIDetails>

### Enable Custom Canarytokens Site

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_webroot_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/webroot/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/webroot/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.post(url, data=payload)

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

:::::

</APIDetails>

### Set Custom Canarytokens Site

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_webroot_save">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/webroot/save \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d webroot='<html><body>example!</body></html>'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/canarytokens/webroot/save'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'webroot': '<html><body>example!</body></html>'
}

r = requests.post(url, data=payload)

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

:::::

</APIDetails>
