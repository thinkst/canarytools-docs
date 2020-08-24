---
endpoints:
  factorydoc_generate:
    name: Generate a Google Document or Sheet Canarytoken Factory
    url: /api/v1/canarytoken/factorydoc/generate
    method: POST
    description: Generates a Google Document or Google Sheet Canarytoken Factory
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        default: "'flock:default'"
        description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))
      - name: memo
        required: true
        type: string
        description: A reminder of where you are placing this Canarytoken.
      - name: kind
        required: true
        type: string
        description: The type of Factory document you want to generate (`googlesheets_factorydoc` and `googledocs_factorydoc` are accepted)
      - name: share_with
        required: true
        type: string
        description: Email address of the person you are sharing the Google document or sheet Canarytoken with.
    response: A JSON structure with a result indicator and canarytoken information.
  factorydoc_share_history:
    name: Add to Google Document or Sheet Canarytoken Share history
    url: /api/v1/canarytoken/factorydoc/sharehistory
    method: POST
    description: Adds to the Google Doc or Sheet Canarytoken share history.
    params:
      - name: autoreg_id
        required: true
        type: string
        description: The Canarytoken value attached to this Google Doc or Sheet.
      - name: parent
        required: true
        type: string
        description: The previous owner that shared this Google document or sheet with the current owner.
      - name: current
        required: false
        type: boolean
        default: false
        description: Current owner of the Google document or sheet
    response: A JSON structure with a result indicator and the parent document and current document
  register_document:
    name: Auto register endpoint for new Google Document or Sheet Canarytokens
    url: /api/v1/canarytoken/registerdoc
    method: POST
    description: Auto registers a new Google Document or Sheet to an existing Google Document or Sheet Factory
    params:
      - name: autoreg_id
        required: true
        type: string
        description: The Canarytoken value attached to this Google Doc or Sheet Factory
      - name: kind
        required: true
        type: string
        description: The type of Google document to register (allows `autoreg-google-docs` or `autoreg-google-sheets`)
      - name: email
        required: true
        type: string
        description: The email address of the new owner of the Google document or sheet.
      - name: doc_id
        required: true
        type: string
        description: The Google document or sheet id returned from Google when the document or sheet was created.
      - name: doc_name
        required: true
        type: string
        description: New Google document or sheet's name
---

# Google Documents and Sheets

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to generate Google Document and Sheet Canarytokens

:::::

</APIEndpoints>

::: tip
These endpoints are recommended to be used via your Canary Console UI. The Canary Console UI will handle all the different
flows and parameters needed, making your life a lot easier.
:::

## Generate Factory for Google Document and Sheet Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.factorydoc_generate"></APIDetails>

## Add share history to Google Document and Sheet Canarytoken Factory

<APIDetails :endpoint="$page.frontmatter.endpoints.factorydoc_share_history"></APIDetails>

## Auto register new Google Document and Sheet Canarytokens

<APIDetails :endpoint="$page.frontmatter.endpoints.register_document"></APIDetails>
