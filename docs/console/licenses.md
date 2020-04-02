---
endpoints:
  licenses:
    name: Bird Licenses
    url: /api/v1/license
    method: GET
    description: Retrieve a summary of available Bird licenses.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure containing a list of Canary license information.
  licenses_detailed_info:
    name: Bird Licenses Detailed Information
    url: /api/v1/license/detailed/info
    method: GET
    description: Retrieve a list of Cloud / Virtual license details including limits and URLs to images.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure containing detailed Canary license information.
---
# Licenses

These are a collection of endpoints that allow you query your existing Bird licenses attached to your Console.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Bird Licenses

<APIDetails :endpoint="$page.frontmatter.endpoints.licenses"/>

## Detailed Bird License Information

<APIDetails :endpoint="$page.frontmatter.endpoints.licenses_detailed_info"/>

