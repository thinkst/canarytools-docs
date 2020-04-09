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
---

# Ignore Lists

There are times when you see alerts that are generated from known, expected sources (such as scanners). In cases like this, you can add the known sources to an Ignore List which allows your Console to filter traffic and only alerted you on unexpected incidents.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>
<!-- 
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

<APIDetails :endpoint="$page.frontmatter.endpoints.test_ip_ignored"/> -->