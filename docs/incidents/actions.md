---
endpoints:
  acknowledge:
    name: Acknowledge Incident
    url: /api/v1/incident/acknowledge
    method: POST
    description: Acknowledge a specified incident.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: incident
        required: false
        type: string
        description: A valid incident key
    response: JSON structure with result indicator.
  delete:
    name: Acknowledge Incident
    url: /api/v1/incident/delete
    method: DELETE
    description: Deletes a specified incident.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: incident
        required: false
        type: string
        description: A valid incident key
    response: JSON structure with result indicator.
  fetch:
    name: Fetch Incident
    url: /api/v1/incident/fetch
    method: GET
    description: Retrieve a specified incident.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: incident
        required: false
        type: string
        description: A valid incident key
      - name: hash_id
        required: false
        type: string
        description: A valid incident hash
      - name: extended_details
        required: false
        type: boolean
        description: Return all incident fields
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a> to specify the timezone
    response: JSON structure containing the specified incident.
  unacknowledge:
    name: Acknowledge Incident
    url: /api/v1/incident/unacknowledge
    method: POST
    description: Unacknowledge a specified incident.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: incident
        required: false
        type: string
        description: A valid incident key
    response: JSON structure with result indicator.
  acknowledge_incidents:
    name: Acknowledge Multiple Incidents
    url: /api/v1/incidents/acknowledge
    method: POST
    description: Acknowledge multiple incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: Acknowledge incidents for a specific flock
      - name: node_id
        required: false
        type: string
        description: Acknowledge incidents for a specific node
                     (cannot be used in conjunction with src_host)
      - name: src_host
        required: false
        type: string
        description: Acknowledge incidents for a specific source IP address
                     (cannot be used in conjunction with src_host)
      - name: older_than
        required: false
        type: string
        description: Acknowledge incidents older than the
                     provided period. Periods are "[quantity][unit]", where
                     "[unit]" is one of 'h', 'd', 'w' (hours, days or weeks)
                     e.g. 1h or 1d or 1w
      - name: filter_str
        required: false
        type: string
        description: The string used when searching for incidents to be acknowledged.
                     This string will attempt to match against incident details such
      - name: filter_logtypes
        required: false
        type: string
        description: The logtype of the incidents to be acknowledged
    response: JSON structure with result indicator.
  delete_incidents:
    name: Delete Multiple Incidents
    url: /api/v1/incidents/delete
    method: POST
    description: Delete multiple acknowledged incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: Delete incidents for a specific flock
      - name: node_id
        required: false
        type: string
        description: Delete incidents for a specific node
                     (cannot be used in conjunction with src_host)
      - name: src_host
        required: false
        type: string
        description: Delete incidents for a specific source IP address
                     (cannot be used in conjunction with src_host)
      - name: older_than
        required: false
        type: string
        description: Delete incidents older than the
                     provided period. Periods are "[quantity][unit]", where
                     "[unit]" is one of 'h', 'd', 'w' (hours, days or weeks)
                     e.g. 1h or 1d or 1w
      - name: filter_str
        required: false
        type: string
        description: The string used when searching for incidents to be deleted.
                     This string will attempt to match against incident details such
      - name: filter_logtypes
        required: false
        type: string
        description: The logtype of the incidents to be deleted
      - name: include_unacknowledged
        required: false
        type: boolean
        description: Include unacknowledged incidents when deleting
    response: JSON structure with result indicator.
  unacknowledge_incidents:
    name: Unacknowledge Multiple Incidents
    url: /api/v1/incidents/unacknowledge
    method: POST
    description: Unacknowledge multiple incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: Unacknowledge incidents for a specific flock
      - name: node_id
        required: false
        type: string
        description: Unacknowledge incidents for a specific node
                     (cannot be used in conjunction with src_host)
      - name: src_host
        required: false
        type: string
        description: Unacknowledge incidents for a specific source IP address
                     (cannot be used in conjunction with src_host)
      - name: older_than
        required: false
        type: string
        description: Unacknowledge incidents older than the
                     provided period. Periods are "[quantity][unit]", where
                     "[unit]" is one of 'h', 'd', 'w' (hours, days or weeks)
                     e.g. 1h or 1d or 1w
      - name: filter_str
        required: false
        type: string
        description: The string used when searching for incidents to be unacknowledged.
                     This string will attempt to match against incident details such
      - name: filter_logtypes
        required: false
        type: string
        description: The logtype of the incidents to be unacknowledged
    response: JSON structure with result indicator.
---

# Actions

These are a collection of endpoints that allow you to interact with incidents.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Acknowledge Incident

<APIDetails :endpoint="$page.frontmatter.endpoints.acknowledge"/>

## Delete Incident

<APIDetails :endpoint="$page.frontmatter.endpoints.delete"/>

## Fetch Incident

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch">

::: slot optional-parameters-notes

::: tip
Either `incident` or `hash_id` is required.
:::

:::

</APIDetails>

## Unacknowledge Incident

<APIDetails :endpoint="$page.frontmatter.endpoints.unacknowledge"/>

## Acknowledge Multiple Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.acknowledge_incidents"/>

## Delete Multiple Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.delete_incidents"/>

## Unacknowledge Multiple Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.unacknowledge_incidents"/>
