---
endpoints:
  fetch:
    name: All Canarytokens
    url: /api/v1/canarytokens/fetch
    method: GET
    description: Fetch all created Canarytokens.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: A valid flock_id (for returning Canarytokens for a specific Flock)
      - name: include_endpoints
        required: false
        type: string
        description: Include factory endpoints (such as ApeeperFactory)
    response: A JSON structure with list of all Canarytokens.
  paginate:
    name: Paginate Canarytokens
    url: /api/v1/canarytokens/paginate
    method: GET
    description: Fetch a page of all your Canarytokens with a specified limit per page, as well as cursors that allow you to iterate through the remaining pages.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: A valid flock_id (for returning Canarytokens for a specific Flock)
      - name: limit
        required: false
        type: string
        description: The size of the pages (defaults to 10)
      - name: cursor
        required: false
        type: string
        description: A valid page cursor retrieved from the cursor element returned along with a page while
                     doing pagination
    response: A JSON structure with the current page of Canarytokens and cursors pointing to your next and previous pages.
  search:
    name: Search Canarytokens
    url: /api/v1/canarytokens/search
    method: GET
    description: Search through all Canarytokens using optional search filters. Results will be paginated.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: A valid flock_id
      - name: search_string
        required: false
        type: string
        description: A search string to filter on
      - name: kind
        required: false
        type: string
        description: A valid Canarytoken kind to filter for a specific kind
      - name: active
        required: false
        type: boolean
        description: If set to True, only return active tokens. If set to False, only return inactive tokens.
                    (not setting this returns all tokens)
      - name: limit
        required: false
        type: string
        description: The size of the pages (defaults to 10)
      - name: cursor
        required: false
        type: string
        description: A valid page cursor retrieved from the cursor element returned along with a
                     page while doing pagination
    response: A JSON structure with the current page of filtered Canarytokens and cursors pointing
              to your next and previous pages.
---

# Queries

These are a collection of endpoints that allow you query and view your Canarytokens.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## All Canarytokens

::: tip
This will return all your Canarytokens in a single list. This may cause issues if you have many Canarytokens
minted on your Console. A cleaner option is to use [Search Canarytokens](#search-canarytokens) or [Paginate Canarytokens](#paginate-canarytokens) as they will paginate the results and allow you to cycle through them.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch"/>

## Paginate Canarytokens

<APIDetails :endpoint="$page.frontmatter.endpoints.paginate"/>

## Search Canarytokens

<APIDetails :endpoint="$page.frontmatter.endpoints.search"/>
