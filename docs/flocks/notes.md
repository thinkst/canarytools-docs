---
endpoints:
  flock_note:
    name: Get Flock Note
    url: /api/v1/flock/note
    method: GET
    description: Retrieve a Flock's note.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: JSON structure with the Flock note.
  flock_note_add:
    name: Add Flock Note
    url: /api/v1/flock/note/add
    method: POST
    description: Add a note to a specified Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: note
        required: true
        type: string
        description: A note for the Flock
    response: JSON structure with the result indicator.
  flock_note_delete:
    name: Delete Flock Note
    url: /api/v1/flock/note/delete
    method: DELETE
    description: Delete the note for a specified Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: JSON structure with the result indicator.
---

# Notes

These are a collection of endpoints that allow you to configure Flock notes.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Get FLock Note

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_note"/>

## Add FLock Note

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_note_add"/>

## Delete FLock Note

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_note_delete"/>