---
endpoints:
  ignore_ip_disable:
    name: Disable Ignore List
    url: /api/v1/flock/settings/whitelisting/ip/disable
    method: POST
    description: Disable IP ignoring for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with result indicator.
  ignore_ip_enable:
    name: Enable Ignore List
    url: /api/v1/flock/settings/whitelisting/ip/enable
    method: POST
    description: Enable IP ignoring for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with result indicator.
  ignore_ip_inherit_global_disable:
    name: Disable Inherit From Global
    url: /api/v1/flock/settings/whitelisting/ip/inherit_global/disable
    method: POST
    description: Disable inheriting the Global IP Ignore List.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with result indicator.
  ignore_ip_inherit_global_enable:
    name: Enable Inherit From Global
    url: /api/v1/flock/settings/whitelisting/ip/inherit_global/enable
    method: POST
    description: Enable inheriting the Global IP Ignore List.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with result indicator.
  ignore_ip_is_enabled:
    name: Check if IP Ignoring is Enabled
    url: /api/v1/flock/settings/whitelisting/ip/is_enabled
    method: GET
    description: Check if IP ignoring is enabled for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the enabled state.
  ignore_ip_is_global:
    name: Check if IP Ignoring is Global
    url: /api/v1/flock/settings/whitelisting/ip/is_global
    method: GET
    description: Check if IP ignoring is set to Global for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the Global state.
  ignore_ip_is_ip_ignored:
    name: Check if IP is Ignored
    url: /api/v1/flock/settings/whitelisting/ip/is_ip_whitelisted
    method: GET
    description: Check if a hostname is ignored in a Flock's Ignore List.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: src_ip
        required: false
        type: string
        description: The source IP to check
      - name: dst_port
        required: true
        type: int
        description: The destination port to check
    response: A JSON structure with the ignored state.
  ignore_ip_sanitized:
    name: List Ignored IPs
    url: /api/v1//flock/settings/whitelisting/ip/sanitized
    method: GET
    description: Fetch a sanitized list of ignored IPs for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with a list of ignored IPs for a Flock.
  ignore_ip_save:
    name: Set Ignored IPs
    url: /api/v1/flock/settings/whitelisting/ip/save
    method: POST
    description: Set the list of ignored IPs for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: whitelist
        required: false
        type: string
        description: A newline separated list of IPs and ports to ignore
      - name: clear
        required: false
        type: boolean
        description: If true, clears the ignore list
    response: A JSON structure with result indicator.
  ignore_ip_string:
    name: Fetch Unsanitized Ignore List
    url: /api/v1/flock/settings/whitelisting/ip/string
    method: GET
    description: Fetch the unsanitized ignore list string. 
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the unsanitized list.
  ignore_ip_use_global:
    name: Set Ignore List to Global
    url: /api/v1/flock/settings/whitelisting/ip/use_global
    method: POST
    description: Set a Flock's ignore IP list to use Global.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with result indicator.
  ignore_ip_ignore_ip_port:
    name: Add IP and Port to Ignore List
    url: /api/v1/flock/settings/whitelisting/ip/whitelist_ip_port
    method: POST
    description: Add an IP and optional Port to the Ignore List.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: src_ip
        required: true
        type: string
        description: The source IP to ignore
      - name: dst_port
        required: true
        type: false
        description: The destination port to ignore
    response: A JSON structure with result indicator.
---

# Default Ignore List

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

If you want to ignore traffic from a specific IP address and/or traffic hitting a specific port on your Birds, you can use these endpoints.

There are times when you see alerts that are generated from known, expected IPs (such as scanners). In cases like this, you can add the known IP to an Ignore List which allows your Flock to filter traffic and only alerted you on unexpected incidents.

::: tip
These endpoints will set the Ignore Lists for specified Flocks. For Globally defined Ignore lists, you can take a look at the [Console Settings](/console-settings/ignore-lists.html#default-ignore-lists).
:::

:::::

</APIEndpoints>


## Add IP and Port to Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_ignore_ip_port"/>

## Check if IP Ignoring is Enabled

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_is_enabled"/>

## Check if IP Ignoring is Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_is_global"/>

## Check if IP is Ignored

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_is_ip_ignored"/>

## Disable IP Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_disable"/>

## Enable IP Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_enable"/>

## Fetch Unsanitized Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_string"/>

## Inherit GLobal List

By default, enabling the IP Ignore List for a Flock will ignore the Global settings and only use the Flock's settings. You can optionally chose to allow the Flock to set it's own custom Ignore List and still inherit from the Global IP Ignore List.

### Disable Inherit From Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_inherit_global_disable"/>

### Enable Inherit From Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_inherit_global_enable"/>

## List Ignored IPs

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_sanitized"/>

## Set Ignored IPs

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_save"/>

## Set Ignore List to Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_ip_use_global"/>
