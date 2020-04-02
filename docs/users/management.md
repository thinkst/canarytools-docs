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
---

# Management

These are a collection of endpoints that allow you to deal with user management.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Acknowledge Incident

<APIDetails :endpoint="$page.frontmatter.endpoints.acknowledge"/>

