---
endpoints:
  device_note:
    name: Get Device Note
    url: /api/v1/device/note
    method: GET
    description: Retrieve a device's note.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with the device note.
  device_note_add:
    name: Add Device Note
    url: /api/v1/device/note/add
    method: POST
    description: Add a note to a specified device.
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
        description: A note for the device
    response: JSON structure with the result indicator.
  device_note_delete:
    name: Delete Device Note
    url: /api/v1/device/note/delete
    method: POST
    description: Delete the note for a specified device.
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

# Device Notes

These are a collection of endpoints that allow you to configure device notes.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Get Device Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note"/>

## Add Device Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note_add"/>

## Delete Device Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note_delete"/>
