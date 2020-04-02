---
endpoints:
  personalities_list:
    name: List Personalities
    url: /api/v1/personalities/list
    method: GET
    description: Returns a list of available Bird personalities for a specified version or Bird (node_id).
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: false
        type: string
        description: A valid Canary node_id
      - name: version
        required: false
        type: string
        description: A valid version number
    response: JSON structure with personalities for the specified node id's version or specified version.
  personalities_delete:
    name: Delete Personality
    url: /api/v1/personalities/delete
    method: DELETE
    description: Delete a specified custom personality.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: personality
        required: true
        type: string
        description: Custom personality to delete 
      - name: flock_id
        required: true
        type: string
        description: Specify the Flock which has the custom personality you would like to delete.
    response: A JSON message with a result indicator.
  device_custompersonality_exists:
    name: Bird Custom Personality Exists
    url: /api/v1/device/custompersonality/exists
    method: GET
    description: Checks if a custom personality exists for a specified Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: A JSON message with a result indicator.
---

# Personalities

These are a collection of endpoints that allow you interact with Bird personalities. This includes the built in Bird personalities as well as custom personalities that you create.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## List Personalities

<APIDetails :endpoint="$page.frontmatter.endpoints.personalities_list"/>

## Delete Personality

<APIDetails :endpoint="$page.frontmatter.endpoints.personalities_delete">

  ::: slot required-parameters-notes

  ::: warning 
  You cannot delete built-in personalities. Only custom personalities that you've saved can be deleted.
  :::

  :::
  
</APIDetails>

## Bird Custom Personality Exists

<APIDetails :endpoint="$page.frontmatter.endpoints.device_custompersonality_exists"/>