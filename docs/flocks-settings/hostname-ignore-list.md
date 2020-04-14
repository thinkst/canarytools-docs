---
endpoints:
  ignore_hostnames_disable:
    name: Disable Hostname Ignore List
    url: /api/v1/flock/settings/ignorelist/hostname/disable
    method: POST
    description: Disable hostname ignoring for a Flock.
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
  ignore_hostnames_enable:
    name: Enable Hostname Ignore List
    url: /api/v1/flock/settings/ignorelist/hostname/enable
    method: POST
    description: Enable hostname ignoring for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
  ignore_hostnames_ignore_hostname:
    name: Add Hostname to Ignore List
    url: /api/v1/flock/settings/ignorelist/hostname/ignorelist_hostname
    method: POST
    description: Add a hostname to the ignore list for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: hostname
        required: true
        type: string
        description: The source hostname to ignore
    response: A JSON structure with result indicator.
  ignore_hostnames_is_enabled:
    name: Check if Hostname Ignoring is Enabled
    url: /api/v1/flock/settings/ignorelist/hostname/is_enabled
    method: GET
    description: Check if hostname ignoring is enabled for a Flock.
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
  ignore_hostnames_is_global:
    name: Check if Hostname Ignoring is Global
    url: /api/v1/flock/settings/ignorelist/hostname/is_global
    method: GET
    description: Check if hostname ignoring is set to Global for a Flock.
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
  ignore_hostnames_is_hostname_ignored:
    name: Check if Hostname is Ignored
    url: /api/v1/flock/settings/ignorelist/hostname/is_hostname_ignorelisted
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
      - name: hostname
        required: true
        type: string
        description: The source hostname to check
    response: A JSON structure with the ignored state.
  ignore_hostnames_sanitized:
    name: List Ignored Hostnames
    url: /api/v1/flock/settings/ignorelist/hostname/sanitized
    method: GET
    description: Fetch a sanitized list of ignored hostnames for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with a list of ignored hostnames for a Flock.
  ignore_hostnames_save:
    name: Set Ignored Hostnames
    url: /api/v1/flock/settings/ignorelist/hostname/save
    method: POST
    description: Set the list of ignored hostnames for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: ignorelist
        required: false
        type: string
        description: A newline separated list of hostnames to ignore
      - name: clear
        required: false
        type: boolean
        description: If true, clears the ignore list
    response: A JSON structure with result indicator.
  ignore_hostnames_string:
    name: Fetch Unsanitized Ignore List
    url: /api/v1/flock/settings/ignorelist/hostname/string
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
  ignore_hostnames_use_global:
    name: Set Ignore List to Global
    url: /api/v1/flock/settings/ignorelist/hostname/use_global
    method: POST
    description: Set a Flock's ignore hostname list to use Global.
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
---

# Hostname Ignore List

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

If you want to ignore traffic from a specific source hostname, you can use these endpoints.

There are times when you see alerts that are generated from known, expected hostnames (such as scanners). In cases like this, you can add the known hostname to an Ignore List which allows your Flock to filter traffic and only alerted you on unexpected incidents.

::: tip
These endpoints will set the Ignore Lists for specified Flocks. For Globally defined Ignore lists, you can take a look at the [Console Settings](/console-settings/ignore-lists.html#hostname-ignore-lists).
:::

:::::

</APIEndpoints>


## Add Hostname to Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_ignore_hostname"/>

## Check if Hostname Ignoring is Enabled

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_is_enabled"/>

## Check if Hostname Ignoring is Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_is_global"/>

## Check if Hostname is Ignored

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_ignore_hostname"/>

## Disable Hostname Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_disable"/>

## Enable Hostname Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_enable"/>

## Fetch Unsanitized Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_string"/>

## List Ignored Hostnames

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_sanitized"/>

## Set Ignored Hostnames

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_save"/>

## Set Ignore List to Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_use_global"/>
