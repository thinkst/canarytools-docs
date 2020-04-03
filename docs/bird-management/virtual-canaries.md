---
endpoints:
  canaryvm_download:
    name: Download CanaryVM Image
    url: /api/v1/canaryvm/download
    method: GET
    description: Returns a URL to the versioned CanaryVM Image.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: version
        required: true
        type: string
        description: A valid CanaryVM version
    response: A JSON Structure containing the download URL for the specified version of the CanaryVM image.
  canaryvm_download_seed:
    name: Download CanaryVM Image Seed Data
    url: /api/v1/canaryvm/downloadseed
    method: GET
    description: Returns a URL to the versioned CanaryVM Image Seed Data.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: version
        required: true
        type: string
        description: A valid CanaryVM version
    response: A JSON Structure containing the URL for the specified version of the CanaryVM image seed file.
  hypervcanary_download:
    name: Download Hyper-V Canary Image
    url: /api/v1/hypervcanary/download
    method: GET
    description: Returns a URL to the versioned Hyper-V Canary Image.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: version
        required: true
        type: string
        description: A valid Hyper-V Canary version
    response: A JSON Structure containing the download URL for the specified version of the Hyper-V Canary image.
  hypervcanary_download_seed:
    name: Download Hyper-V Canary Image Seed Data
    url: /api/v1/hypervcanary/downloadseed
    method: GET
    description: Returns a URL to the versioned Hyper-V Canary Image Seed Data.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: version
        required: true
        type: string
        description: A valid Hyper-V Canary version
    response: A JSON Structure containing the URL for the specified version of the Hyper-V Canary image seed file.
---

# Virtual Canaries

These are a collection of endpoints that allow you to view Bird related updates.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Download CanaryVM Image

<APIDetails :endpoint="$page.frontmatter.endpoints.canaryvm_download"/>

## Download CanaryVM Image Seed Data

::: warning
You are likely looking for [Download CanaryVM Image](#download-canaryvm-image). This endpoint is specifically used to download
the seed data that gets attached to the 2nd hard drive in very rare cases where you need to replace it.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.canaryvm_download_seed"/>

## Download Hyper-V Canary Image

<APIDetails :endpoint="$page.frontmatter.endpoints.hypervcanary_download"/>

## Download Hyper-V Canary Image Seed Data

::: warning
You are likely looking for [Download Hyper-V Canary Image](#download-hyper-v-canary-image). This endpoint is specifically used to download
the seed data that gets attached to the 2nd hard drive in very rare cases where you need to replace it.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.hypervcanary_download_seed"/>
