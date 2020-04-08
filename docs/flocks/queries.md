---
endpoints:
  list_sensors:
    name: List Flock Sensors
    url: /api/v1/flock/list
    method: GET
    description: Retrieve all sensors in a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the list of all sensors in the Flock.
  settings:
    name: Flock Settings
    url: /api/v1/flock/settings
    method: GET
    description: Retrieve the settings for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the Flock settings.
  summary:
    name: Flock Summary
    url: /api/v1/flock/summary
    method: GET
    description: Retrieve the information summary for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: num_top_tokens
        required: false
        type: int
        description: Return the top most deployed <num_top_tokens> number of tokens
    response: A JSON structure with the Flock information summary.
  users:
    name: Flock Users
    url: /api/v1/flock/users
    method: GET
    description: Retrieve the users assigned to a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the Flock's user list.
  flocks_filter:
    name: Filter Flocks
    url: /api/v1/flocks/filter
    method: GET
    description: Search Flocks using a filter string that matches against Flock information.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: filter_str
        required: true
        type: string
        description: String to match on.
    response: A JSON structure with the list of filtered Flocks. 
  flocks_info:
    name: Fetch Flocks Info for User
    url: /api/v1/flocks/info
    method: GET
    description: Retrieve a list of Flocks as well as devices for each Flock, for a given `email`.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: Email of a valid user
    response: A JSON structure with the list of Flocks and devices. 
  flocks_list:
    name: List FLocks for User
    url: /api/v1/flocks/list
    method: GET
    description: Retrieve a list of Flocks for a given `email`.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: Email of a valid user
    response: A JSON structure with the list of Flocks. 
  flocks_summary:
    name: List Flocks Summary
    url: /api/v1/flocks/summary
    method: GET
    description: Retrieve all Flocks' summary information.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with the list of all Flock summaries. 
---

# Queries

The following endpoints allow you to query your Flocks.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## List Flock Sensors

<APIDetails :endpoint="$page.frontmatter.endpoints.list_sensors">

::::: slot description

Retrieve all [Sensors](/guide/terminology.html#sensors) in a Flock.

:::::

</APIDetails>

## Flock Settings

<APIDetails :endpoint="$page.frontmatter.endpoints.settings">
</APIDetails>

## Flock Summary

<APIDetails :endpoint="$page.frontmatter.endpoints.summary">
</APIDetails>

## Flock Users

<APIDetails :endpoint="$page.frontmatter.endpoints.users">
</APIDetails>

## Filter Flocks 

<APIDetails :endpoint="$page.frontmatter.endpoints.users">
</APIDetails>

## Fetch Flocks Info for User

<APIDetails :endpoint="$page.frontmatter.endpoints.flocks_info">
</APIDetails>

## List Flocks for User

<APIDetails :endpoint="$page.frontmatter.endpoints.flocks_list">
</APIDetails>

## List Flocks Summary

<APIDetails :endpoint="$page.frontmatter.endpoints.flocks_summary">
</APIDetails>

