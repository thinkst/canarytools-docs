---
endpoints:
  disable:
    name: Disable the API
    url: /api/v1/settings/api/disable
    method: POST
    description: Disable the Console API.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with result indicator.
  enable:
    name: Enable the API
    url: /api/v1/settings/api/enable
    method: POST
    description: Enable the Console API.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with result indicator.
  add:
    name: Add an API token.
    url: /api/v1/token/add
    method: POST
    description: Create a new API token.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with the new API token.
  download:
    name: Download the API Configuration File
    url: /api/v1/token/download
    method: GET
    description: Download an API token configuration file for use by the Python API.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: File containing the API configuration.
  delete:
    name: Delete the API Token
    url: /api/v1/token/remove
    method: DELETE
    description: Delete the existing API token.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
---

# API

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Currently your Console can only have a single API key (auth_token). Managing this key, as well as enabling and disabling the use of the API can be done using the following endpoints.

:::::

</APIEndpoints>

## Add an API token

::: tip
This will generate a new API token for you, overwriting the existing token if there is one.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.add"/>

## Delete the API Token

<APIDetails :endpoint="$page.frontmatter.endpoints.delete"/>

## Disable the API

<APIDetails :endpoint="$page.frontmatter.endpoints.disable"/>

## Download the API Configuration File

<APIDetails :endpoint="$page.frontmatter.endpoints.download"/>

## Enable the API

::: tip
Since we currently only allow for a single API key, this can only be achieved by logging into the Console and enabling the setting from your Global Settings page.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.enable"/>
