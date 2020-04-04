---
endpoints:
  cancel:
    name: Cancel Bundle
    url: /api/v1/bundle/cancel
    method: POST
    description: Cancel a specified data bundle.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: bundle_tag
        required: true
        type: string
        description: A valid data bundle tag
    response: A JSON structure containing bundle information.
  info:
    name: Fetch Bundle Information
    url: /api/v1/bundle/info
    method: GET
    description: Fetch a specified data bundle status.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: bundle_tag
        required: true
        type: string
        description: A valid data bundle tag
    response: A JSON structure containing bundle information.
  list:
    name: List Bird Bundles
    url: /api/v1/bundle/list
    method: GET
    description: Fetch a list of data bundles for a given Bird
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid node_id
      - name: in_progress_only
        required: false
        type: boolean
        description: Only return bundles that are currently in progress or waiting
    response: A JSON structure containing bundle information.
  list_all:
    name: List All Bundles
    url: /api/v1/bundle/list/all
    method: GET
    description: Fetch a list of data bundles for all Birds a user can manage.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: in_progress_only
        required: false
        type: boolean
        description: Only return bundles that are currently in progress or waiting
    response: A JSON structure containing bundle information.
---

# Bundles

When pushing updates or settings to a Bird, we bundle the data up, chunk it, and send it through to the Bird. 

You can query the progress of the push by querying the bundle status. Similarly, we can cancel a push by cancelling the bundle.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Cancel Bundle

<APIDetails :endpoint="$page.frontmatter.endpoints.cancel"/>

## Fetch Bundle Information

<APIDetails :endpoint="$page.frontmatter.endpoints.info"/>

## List All Bundles

<APIDetails :endpoint="$page.frontmatter.endpoints.list_all"/>

## List Bird Bundles

<APIDetails :endpoint="$page.frontmatter.endpoints.list"/>
