---
endpoints:
  ignore_hostnames_set:
    name: Set Hostname Ignore List
    url: /api/v1/settings/ignore_hostnames
    method: POST
    description: Sets the hostname ignore list.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: hostnames
        required: false
        type: string
        description: The list of hostnames separated by a newline character
      - name: clear
        required: false
        type: boolean
        description: If true, clears the ignore list
    response: JSON structure with result indicator.
  ignore_hostnames_disable:
    name: Disable Hostname Ignore List
    url: /api/v1/settings/ignore_hostnames/disable
    method: POST
    description: Disable Ignoring by Hostname.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with result indicator.
  ignore_hostnames_enable:
    name: Enable Hostname Ignore List
    url: /api/v1/settings/ignore_hostnames/enable
    method: POST
    description: Enable Ignoring by Hostname.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with result indicator.
  ignore_srcport_set:
    name: Set Source Port Ignore List
    url: /api/v1/settings/ignorelist_src_port
    method: POST
    description: Sets the source port ignore list.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: ignorelist_src_port_ips
        required: false
        type: string
        description: The list of IPs to ignore, separated by a newline character
      - name: clear
        required: false
        type: boolean
        description: If true, clears the ignore list
    response: JSON structure with result indicator.
  ignore_srcport_disable:
    name: Disable Source Port Ignore List
    url: /api/v1/settings/ignorelist_src_port/disable
    method: POST
    description: Disable ignoring by source port.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with result indicator.
  ignore_srcport_enable:
    name: Enable Source Port Ignore List
    url: /api/v1/settings/ignorelist_src_port/enable
    method: POST
    description: Enable ignoring by source port.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with result indicator.
  test_hostname_ignored:
    name: Test If Hostname is Ignored
    url: /api/v1/settings/is_hostname_whitelisted
    method: GET
    description: Test if a given hostname has been ignored.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: hostname
        required: true
        type: string
        description: The source hostname to test
      - name: dst_port
        required: false
        type: int
        description: The destination port to test
    response: A JSON structure with the test result.
  test_ip_ignored:
    name: Test If IP is Ignored
    url: /api/v1/settings/is_ip_whitelisted
    method: GET
    description: Test if a given IP address has been ignored.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: src_ip
        required: true
        type: string
        description: The source IP to test
      - name: dst_port
        required: false
        type: int
        description: The destination port to test
    response: A JSON structure with the test result.
  default_ignore_ip_port:
    name: Ignore IP and Port
    url: /api/v1/settings/whitelist_ip_port
    method: POST
    description: Ignore Traffic from an IP and (optional) Port.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: src_ip
        required: true
        type: string
        description: The source IP to ignore
      - name: dst_port
        required: false
        type: int
        description: The destination port to ignore
    response: A JSON structure with result indicator.
  default_ignore_ip_port_disable:
    name: Disable Ignore List
    url: /api/v1/settings/whitelisting/disable
    method: POST
    description: Disable the ignore list.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  default_ignore_ip_port_enable:
    name: Enable Ignore List
    url: /api/v1/settings/whitelisting/enable
    method: POST
    description: Enable the ignore list.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  default_ignore_ip_port_remove:
    name: Remove an Ignored IP 
    url: /api/v1/settings/whitelisting/remove_whitelist_ip
    method: POST
    description: Remove an ignored IP from the ignore list.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: src_ip
        required: true
        type: string
        description: IP address to remove from the list
    response: A JSON structure with result indicator.
  default_ignore_ip_port_list:
    name: Set Ignore List
    url: /api/v1/settings/whitelisting/whitelist_ips
    method: POST
    description: Set a list of IPs to ignore.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: whitelist_ips
        required: false
        type: string
        description: Comma separated list of IP addresses to ignore
      - name: clear
        required: false
        type: boolean
        description: Clear the ignore list
    response: A JSON structure with result indicator.
---

# Ignore Lists

There are times when you see alerts that are generated from known, expected sources (such as scanners). In cases like this, you can add the known sources to an Ignore List which allows your Console to filter traffic and only alerted you on unexpected incidents.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Default Ignore Lists

You can add IP addresses and optional ports to this list to ignore traffic that originates from the specified IP + port combination.

### Ignore IP and Port

<APIDetails :endpoint="$page.frontmatter.endpoints.default_ignore_ip_port"/>

### Disable Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.default_ignore_ip_port_disable"/>

### Enable Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.default_ignore_ip_port_enable"/>

### Remove an Ignored IP

<APIDetails :endpoint="$page.frontmatter.endpoints.default_ignore_ip_port_remove"/>

### Set Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.default_ignore_ip_port_list"/>

## Hostname Ignore Lists

If you want to ignore traffic from a specific, known hostname, you can use these endpoints.

### Disable Hostname Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_disable"/>

### Enable Hostname Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_enable"/>

### Set Hostname Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_hostnames_set"/>

## Source Port Ignore Lists

If you want to ignore traffic that originates from a known source port, you can use these endpoints.

### Disable Source Port Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_srcport_disable"/>

### Enable Source Port Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_srcport_enable"/>

### Set Source Port Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_srcport_set"/>

## Test Ignore Lists

Using the below endpoints, you can easily test if given hostnames and IP addresses are already ignored on your Console.

### Test If Hostname is Ignored

<APIDetails :endpoint="$page.frontmatter.endpoints.test_hostname_ignored"/>

### Test If IP is Ignored

<APIDetails :endpoint="$page.frontmatter.endpoints.test_ip_ignored"/>