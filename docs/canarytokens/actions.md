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
  create_factory:
    name: Create Canarytoken Factory
    url: /api/v1/canarytoken/create_factory
    method: POST
    description: Create an auth string for the Canarytoken Factory endpoint.
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
    response: A JSON structure with auth string and Canarytoken factory endpoint.
  delete_factory:
    name: Delete Canarytoken Factory
    url: /api/v1/canarytoken/delete_factory
    method: DELETE
    description: Delete an auth string for the Canarytoken Factory endpoint.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: factory_auth
        required: true
        type: string
        description: An existing factory auth string
    response: A JSON structure with result indicator.
  disable:
    name: Disable Canarytoken
    url: /api/v1/canarytoken/disable
    method: POST
    description: Disable a Canarytoken.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: canarytoken
        required: true
        type: string
        description: A valid Canarytoken
    response: A JSON structure with result indicator.
  download:
    name: Download Canarytoken
    url: /api/v1/canarytoken/download
    method: GET
    description: Download the generated file (if one exists) for the supplied Canarytoken.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: canarytoken
        required: true
        type: string
        description: An identifier for a Canarytoken that supports downloadable files
    response: A file if the Canarytoken supports file generation, otherwise an error.
  enable:
    name: Enable Canarytoken
    url: /api/v1/canarytoken/enable
    method: POST
    description: Enable a disabled Canarytoken.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: canarytoken
        required: true
        type: string
        description: A valid Canarytoken
    response: A JSON structure with result indicator.
  factory:
    name: Create Canarytokens Using Factory
    url: /api/v1/canarytoken/factory
    method: POST
    description: Create an auth string for the Canarytoken Factory endpoint.
    params:
      - name: factory_auth
        required: true
        type: string
        description: A valid factory_auth string
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
        description: Specifies the type of Canarytoken (currently only supports aws-id)
      - name: aws_id_username
        required: false
        type: string
        description: AWS ID Username is optional if you want to create an AWS API key linked to 
                     certain Name otherwise it is randomly generated.
    response: A JSON structure with the generated Canarytoken.
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

## Disable Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.disable"/>

## Download Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.download"/>

## Enable Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.enable"/>

## Fetch Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch"/>

## Factory

Sometimes you want to automate the creation of Canarytokens across your fleet. Perhaps you want every EC2 instance to reach out and fetch a token on creation (or startup). The Canary Console API allows for the automation, but it seems a bad idea to use your API key on every host.

The Canarytoken factory gives you a limited use key that is able to create other tokens. You can leave this key on a host knowing that even if an attacker were able to grab it, he'd be able to create new tokens but not remove (or alter) anything else.

### Create Canarytokens Using Factory

<APIDetails :endpoint="$page.frontmatter.endpoints.factory"/>

### Create Canarytoken Factory Auth String

<APIDetails :endpoint="$page.frontmatter.endpoints.create_factory"/>

### Delete Canarytoken Factory Auth String

<APIDetails :endpoint="$page.frontmatter.endpoints.delete_factory"/>


