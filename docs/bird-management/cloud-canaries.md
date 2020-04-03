---
endpoints:
  cloudcanary_images:
    name: List Cloud Canary Images
    url: /api/v1/cloudcanary/images
    method: GET
    description: Returns a list of available Cloud Canary Images
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON Structure containing a list of available Cloud Canary images.
---

# Cloud Canaries

These are a collection of endpoints related to Cloud Canaries. Currently this includes **Azure**, **AWS EC2**, and **GCP** Canaries.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## List Cloud Canary Images

<APIDetails :endpoint="$page.frontmatter.endpoints.cloudcanary_images"/>

