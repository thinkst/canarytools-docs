---
endpoints:
  create:
    name: Create Canarytoken
    url: /api/v1/canarytoken/create
    method: POST
    description: Create a new Canarytoken.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: A valid flock_id (defaults to the Default Flock)
      - name: memo
        required: true
        type: string
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken.
      - name: kind
        required: true
        type: string
        description: Specifies the type of Canarytoken. Supported classes include
                        http, dns, cloned-web, doc-msword, web-image, windows-dir, aws-s3,
                        pdf-acrobat-reader, msword-macro, msexcel-macro, aws-id, apeeper, qr-code,
                        svn, sql, fast-redirect, slow-redirect
      - name: web_image
        required: false
        type: string
        description: An image file for use with web-image tokens (request must be multipart/form-data encoded
                     if parameter is present, required when using web-image)
      - name: cloned_web
        required: false
        type: string
        description: Domain to check against (required when creating cloned-web tokens)
      - name: s3_source_bucket
        required: false
        type: string
        description: S3 bucket to monitor for access  (optional when creating aws-s3 tokens)
      - name: s3_log_bucket
        required: false
        type: string
        description: S3 bucket where logs will be stored (optional when creating aws-s3 tokens)
      - name: aws_access_key
        required: false
        type: string
        description: AWS Secret Access Key (required if automating creation of AWS S3 token)
      - name: aws_region
        required: false
        type: string
        description: AWS region (required if automating creation of AWS S3 token)
      - name: browser_scanner_enabled
        required: false
        type: boolean
        description: Enables a Javascript scanner to retrieve more information
                     (only valid with 'http' Canarytokens, defaults to true)
      - name: aws_id_username
        required: false
        type: string
        description: AWS ID Username is optional if the client wants to create an AWS API key linked to certain NameError
                     otherwise its randomly generated (optional when creating aws-id tokens)
    response: A JSON structure with the created Canarytoken information.
  fetch:
    name: Fetch Canarytoken
    url: /api/v1/canarytoken/fetch
    method: GET
    description: Fetch information about a specific Canarytoken.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: canarytoken
        required: false
        type: string
        description: A valid Canarytoken
    response: A JSON structure with the Canarytoken.
---

# Actions

These are a collection of endpoints that allow you mint new, interact with, and view your existing Canarytokens.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Create Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.create"/>

## Fetch Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch"/>
