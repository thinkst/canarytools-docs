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
