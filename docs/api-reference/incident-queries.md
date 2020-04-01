---
endpoints:
  all:
    name: All Incidents
    url: /api/v1/incidents/all
    method: GET
    description: Returns all incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: false
        type: string
        description: Get all incidents for a specific node_id
      - name: flock_id
        required: false
        type: string
        description: Get all incidents for a specific flock_id
      - name: incidents_since
        required: false
        type: int
        description: Only return incidents whose updated_id is greater than this
                     integer. The returned feed includes a max_updated_id field if the incident
                     list has entries
      - name: event_limit
        required: false
        type: int
        description: Specify the maximum number of event logs to be returned with the incident     
      - name: limit
        required: false
        type: int
        description: Parameter used to initiate cursor pagination. The limit is used to specify
                    the page sizes returned when iterating through the pages representing all incidents
      - name: cursor
        required: false
        type: string
        description: The cursor string retrieved from the cursor element returned along with a page
                     while doing pagination
      - name: shrink
        required: false
        type: boolean
        description: A 'true' value will remove duplicated entries  (defaults to 'false' for backwards
                    compatibility but you really want this to be true)
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a> to specify the timezone
    response: JSON structure with a list of incidents.
  acknowledged:
    name: Acknowledged Incidents
    url: /api/v1/incidents/acknowledged
    method: GET
    description: Returns all acknowledged incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: false
        type: string
        description: Get all incidents for a specific node
      - name: flock_id
        required: false
        type: string
        description: Get all incidents for a specific flock_id
      - name: incidents_since
        required: false
        type: int
        description: Only return incidents whose updated_id is greater than this
                     integer. The returned feed includes a max_updated_id field if the incident
                     list has entries
      - name: event_limit
        required: false
        type: int
        description: Specify the maximum number of event logs to be returned with the incident     
      - name: limit
        required: false
        type: int
        description: Parameter used to initiate cursor pagination. The limit is used to specify
                    the page sizes returned when iterating through the pages representing all incidents
      - name: cursor
        required: false
        type: string
        description: The cursor string retrieved from the cursor element returned along with a page
                     while doing pagination
      - name: shrink
        required: false
        type: boolean
        description: A 'true' value will remove duplicated entries  (defaults to 'false' for backwards
                    compatibility but you really want this to be true)
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a> to specify the timezone
    response: JSON structure with a list of acknowledged incidents.
  unacknowledged:
    name: Acknowledged Incidents
    url: /api/v1/incidents/unacknowledged
    method: GET
    description: Returns all unacknowledged incidents.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: false
        type: string
        description: Get all incidents for a specific node
      - name: flock_id
        required: false
        type: string
        description: Get all incidents for a specific flock_id
      - name: incidents_since
        required: false
        type: int
        description: Only return incidents whose updated_id is greater than this
                     integer. The returned feed includes a max_updated_id field if the incident
                     list has entries
      - name: event_limit
        required: false
        type: int
        description: Specify the maximum number of event logs to be returned with the incident     
      - name: limit
        required: false
        type: int
        description: Parameter used to initiate cursor pagination. The limit is used to specify
                    the page sizes returned when iterating through the pages representing all incidents
      - name: cursor
        required: false
        type: string
        description: The cursor string retrieved from the cursor element returned along with a page
                     while doing pagination
      - name: shrink
        required: false
        type: boolean
        description: A 'true' value will remove duplicated entries  (defaults to 'false' for backwards
                    compatibility but you really want this to be true)
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a> to specify the timezone
    response: JSON structure with a list of unacknowledged incidents.
  search:
    name: Search Incidents
    url: /api/v1/incidents/search
    method: GET
    description: Search for incidents by logtype or string. This works with pagination.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: false
        type: string
        description: Only return incidents for a specific device.
      - name: flock_id
        required: false
        type: string
        description: Only return incidents for a specific flock.
      - name: filter_str
        required: false
        type: string
        description: The string used when searching for incidents. This string will attempt to match
                     against incident details such as alert name, node_id, source IP, and destination IP
      - name: filter_logtypes
        required: false
        type: string
        description: Comma separated list of logtypes of the incidents to be returned
      - name: filter_incident_state
        required: false
        type: string
        description: Only return incidents in a specific state {all, unacknowledged, acknowledged}.
                     (defaults to 'unacknowledged')   
      - name: limit
        required: false
        type: int
        description: Parameter used to initiate cursor pagination. The limit is used to specify
                    the page sizes returned when iterating through the pages representing all
                    *filter_incident_state* incidents.
      - name: cursor
        required: false
        type: string
        description: The cursor string retrieved from the cursor element returned along with a page while
                     doing pagination
    response: JSON structure with all incidents that match the search criteria.
---

# Incident Queries

These are a collection of endpoints that allow you to interact with incidents.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## All Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.all"/>

## Acknowledged Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.acknowledged"/>

## Unacknowledged Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.unacknowledged"/>

## Search Incidents

<APIDetails :endpoint="$page.frontmatter.endpoints.search"/>