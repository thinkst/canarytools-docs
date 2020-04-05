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
    url: /api/v1/settings/canarytokens/user_domains/disable
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
    description: Set the custom canarytokens domains for your Console.
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

Apart from the [Canarytokens](/canarytokens/actions.html) section which allows you to create and manage Canarytokens, the following endpoints allow you to configure the Console-side settings for Canarytokens.


<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Custom Webroot

Along with your Console, you have your own running Canarytokens server. This server runs on the `<your_unique_hash>.o3n.io` domain and is unique to your Canarytokens server. Any Canarytoken you create will reach out on this domain to trigger its alert.

We do however allow you to set a custom domain. This will mean that all new tokens will be create used the custom domain but will still reach out to your Console and create an alert if triggered.

::: tip Custom User Domain
In order for your Canarytokens to successfully reach out to your Console using your custom domain, you'll need to correctly setup the DNS records for the domain to point to your Console.

Assuming your custom domain is `your.custom.domain` and your Canarytokens server IP is `x.x.x.x`, an example configuration would require the below records to be setup in the `your.custom.domain` zone:

```
docs.your.custom.domain NS docs-ns.your.custom.domain
docs-ns.your.custom.domain A x.x.x.x
```
:::

### Disable Custom User Domains

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_domains_disable"/>

### Enable Custom User Domains

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_domains_enable"/>

### Set Custom User Domains

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_domains_save"/>

## Custom Site

If someone browses to your Canarytokens domain (`<your_unique_hash>.o3n.io`), we'll present them with the default apache page (in order to not raise any alarms).

This is usually sufficient (as you won't usually have people browsing to the site, only tokens getting triggered off the domain), but we do allow you to change it.

### Disable Custom Canarytokens Site

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_webroot_disable"/>

### Enable Custom Canarytokens Site

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_webroot_enable"/>

### Set Custom Canarytokens Site

<APIDetails :endpoint="$page.frontmatter.endpoints.custom_webroot_save"/>
