---
endpoints:
  ignore_src_port_disable:
    name: Disable Source Port Ignore List
    url: /api/v1/flock/settings/ignorelist/src_port/disable
    method: POST
    description: Disable source port ignoring for a Flock.
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
  ignore_src_port_enable:
    name: Enable Source Port Ignore List
    url: /api/v1/flock/settings/ignorelist/src_port/enable
    method: POST
    description: Enable source port ignoring for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
  ignore_src_port_ignore_src_port:
    name: Add Source Port to Ignore List
    url: /api/v1/flock/settings/ignorelist/src_port/ignorelist_src_port
    method: POST
    description: Add a source ip / port to the ignore list.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: ip
        required: false
        type: string
        description: The source IP to ignore
      - name: port
        required: false
        type: int
        description: The source port to ignore
    response: A JSON structure with result indicator.
  ignore_src_port_is_enabled:
    name: Check if Source Port Ignoring is Enabled
    url: /api/v1/flock/settings/ignorelist/src_port/is_enabled
    method: GET
    description: Check if source port ignoring is enabled for a Flock.
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
  ignore_src_port_is_global:
    name: Check if Source Port Ignoring is Global
    url: /api/v1/flock/settings/ignorelist/src_port/is_global
    method: GET
    description: Check if source port ignoring is set to Global for a Flock.
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
  ignore_src_port_is_src_port_ignored:
    name: Check if Source Port is Ignored
    url: /api/v1/flock/settings/ignorelist/src_port/is_src_port_ignorelisted
    method: GET
    description: Check if a source port is ignored in a Flock's Ignore List.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: ip
        required: false
        type: string
        description: The source IP to check
      - name: port
        required: false
        type: int
        description: The source port to check
    response: A JSON structure with the ignored state.
  ignore_src_port_sanitized:
    name: List Ignored Source Ports
    url: /api/v1/flock/settings/ignorelist/src_port/sanitized
    method: GET
    description: Fetch a sanitized list of ignored source IPs and ports for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the list of ignored IPs and ports.
  ignore_src_port_save:
    name: Set Ignored Source Ports
    url: /api/v1/flock/settings/ignorelist/src_port/save
    method: POST
    description: Set the list of ignored source ports for a Flock.
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
        description: A newline separated list of source IPs and ports to ignore
      - name: clear
        required: false
        type: boolean
        description: If true, clears the ignore list
    response: A JSON structure with result indicator.
  ignore_src_port_string:
    name: Fetch Unsanitized Ignore List
    url: /api/v1/flock/settings/ignorelist/src_port/string
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
  ignore_src_port_use_global:
    name: Set Ignore List to Global
    url: /api/v1/flock/settings/ignorelist/src_port/use_global
    method: POST
    description: Set a Flock's ignore source port list to use Global.
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

# Source Port Ignore List

There are times when you may expect traffic from a specific port from a specific IP address (such as a scanner). Instead of ignoring the IP address as a whole, you can chose to simply ignore traffic from the expected port. The following endpoints allow you to interact with a Flock's Source Port Ignore List.

::: tip
These endpoints will set the Ignore Lists for specified Flocks. For Globally defined Ignore lists, you can take a look at the [Console Settings](/console-settings/ignore-lists.html#source-port-ignore-lists).
:::

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>


## Add Source Port to Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_src_port_ignore_src_port"/>

## Check if Source Port Ignoring is Enabled

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_src_port_is_enabled"/>

## Check if Source Port Ignoring is Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_src_port_is_global"/>

## Check if Source Port is Ignored

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_src_port_ignore_src_port"/>

## Disable Source Port Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_src_port_disable"/>

## Enable Source Port Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_src_port_enable"/>

## Fetch Unsanitized Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_src_port_string"/>

## List Ignored Source Ports

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_src_port_sanitized"/>

## Set Ignored Source Ports

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_src_port_save"/>

## Set Ignore List to Global

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_src_port_use_global"/>
