---
endpoints:
  device_note:
    name: Get Bird Note
    url: /api/v1/device/note
    method: GET
    description: Retrieve a Bird's note.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with the Bird note.
  device_note_add:
    name: Add Bird Note
    url: /api/v1/device/note/add
    method: POST
    description: Add a note to a specified Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: note
        required: true
        type: string
        description: A note for the Bird
    response: JSON structure with the result indicator.
  device_note_delete:
    name: Delete Bird Note
    url: /api/v1/device/note/delete
    method: POST
    description: Delete the note for a specified Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with the result indicator.
---

# Bird Notes

These are a collection of endpoints that allow you to configure Bird notes.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Get Bird Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note"/>

## Add Bird Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note_add"/>

## Delete Bird Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note_delete"/>
