---
endpoints:
  global_search:
    name: Global Search
    url: /api/v1/global/search
    method: GET
    description: Search across all Console entities (incidents / Flocks / Canarytokens / Birds / users).
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: filter_str
        required: false
        type: string
        description: A string to match on
      - name: type
        required: false
        type: string
        description: Type of results to return. Do not include to search across all entities, other wise it must be one of
                    ['incidents', 'canarytokens', 'devices', 'users', 'flocks']
    response: A JSON structure with the search results.
---
# Global Search

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

A search that spans all entities in your Console.

:::::

</APIEndpoints>


<APIDetails :endpoint="$page.frontmatter.endpoints.global_search"/>