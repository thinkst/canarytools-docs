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
        default: 10
        description: The size of the pages
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
        default: 10
        description: The size of the pages
      - name: cursor
        required: false
        type: string
        description: A valid page cursor retrieved from the cursor element returned along with a
                     page while doing pagination
    response: A JSON structure with the current page of filtered Canarytokens and cursors pointing
              to your next and previous pages.
---

# Queries

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you query and view your Canarytokens.

:::::

</APIEndpoints>

## All Canarytokens

::: tip
This will return all your Canarytokens in a single list. This may cause issues if you have many Canarytokens
minted on your Console. A cleaner option is to use [Search Canarytokens](#search-canarytokens) or [Paginate Canarytokens](#paginate-canarytokens) as they will paginate the results and allow you to cycle through them.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytokens/fetch \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytokens/fetch'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "result": "success",
  "tokens": [
    {
      "browser_scanner_enabled": true,
      "canarytoken": "<token_code>",
      "created": "1585947447.092035",
      "created_printable": "2020-04-03 20:57:27 (UTC)",
      "enabled": false,
      "flock_id": "flock:default",
      "hostname": "<token_hostname>",
      "key": "<token_key>",
      "kind": "http",
      "memo": "Example Memo",
      "node_id": "<node_id>",
      "triggered_count": 0,
      "updated_id": 2,
      "url": "<token_url>"
    },
    ...
  ]
}
```
:::

:::::

</APIDetails>

## Paginate Canarytokens

<APIDetails :endpoint="$page.frontmatter.endpoints.paginate">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytokens/paginate \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d limit=3
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytokens/paginate'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'limit':'3'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "canarytokens": [
    {
      "access_key_id": "<aws_access_key_id>",
      "canarytoken": "<token_code>",
      "created": "1586249510.069870",
      "created_printable": "2020-04-07 08:51:50 (UTC)",
      "enabled": true,
      "factory_auth": "<factory_auth_token>",
      "flock_id": "flock:default",
      "hostname": "<token_hostname>",
      "key": "<token_key>",
      "kind": "aws-id",
      "memo": "Example Memo",
      "node_id": "<node_id>",
      "renders": {
        "aws-id": "\n    [default]\n    aws_access_key_id = <aws_access_key_id>\n    aws_secret_access_key = <aws_secret_access_key>"
      },
      "secret_access_key": "<aws_secret_access_key>",
      "triggered_count": 0,
      "updated_id": 17,
      "url": "<token_url>",
      "username": "<user_name>"
    },
    {
      "access_key_id": "<aws_access_key_id>",
      "canarytoken": "<token_code>",
      "created": "1586246956.323499",
      "created_printable": "2020-04-07 08:09:16 (UTC)",
      "enabled": true,
      "factory_auth": "<factory_auth_token>",
      "flock_id": "flock:default",
      "hostname": "<token_hostname>",
      "key": "<token_key>",
      "kind": "aws-id",
      "memo": "Example Memo",
      "node_id": "<node_id>",
      "renders": {
        "aws-id": "\n    [default]\n    aws_access_key_id = <aws_access_key_id>\n    aws_secret_access_key = <aws_secret_access_key>"
      },
      "secret_access_key": "<aws_secret_access_key>",
      "triggered_count": 4,
      "updated_id": 14,
      "url": "<token_url>",
      "username": "<user_name>"
    },
    {
      "canarytoken": "<token_code>",
      "cloned_web": "<cloned_domain>",
      "created": "1586183526.183108",
      "created_printable": "2020-04-06 14:32:06 (UTC)",
      "enabled": true,
      "flock_id": "flock:default",
      "hostname": "<token_hostname>",
      "key": "<token_key>",
      "kind": "cloned-web",
      "memo": "Cloned website detector on <cloned_domain>",
      "node_id": "<node_id>",
      "renders": {
        "cloned-web": "<script>\n    if (document.domain != \"<cloned_domain>\" && document.domain != \"<cloned_domain>\") {\n        var l = location.href;\n        var r = document.referrer;\n        var m = new Image();\n        m.src = \"<token_url>\" + encodeURI(l) + \"&r=\" + encodeURI(r);\n    }\n</script>"
      },
      "triggered_count": 0,
      "updated_id": 12,
      "url": "<token_url>"
    }
  ],
  "cursor": {
    "next": "MToxMjozOjQ6Mjo0",
    "next_link": "https://EXAMPLE.canary.tools/api/v1/canarytokens/paginate?cursor=MToxMjozOjQ6Mjo0&auth_token=EXAMPLE_AUTH_TOKEN",
    "prev": null,
    "prev_link": null
  },
  "page_num": 1,
  "page_total": 4,
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Search Canarytokens

<APIDetails :endpoint="$page.frontmatter.endpoints.search">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytokens/search \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d search_string=EXAMPLE \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytokens/search'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'search_string':'EXAMPLE'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "canarytokens": [
    {
      "access_key_id": "<aws_access_key_id>",
      "canarytoken": "<token_code>",
      "created": "1586249510.069870",
      "created_printable": "2020-04-07 08:51:50 (UTC)",
      "enabled": true,
      "factory_auth": "<factory_auth_token>",
      "flock_id": "flock:default",
      "hostname": "<token_hostname>",
      "key": "<token_key>",
      "kind": "aws-id",
      "memo": "Example Memo",
      "node_id": "<node_id>",
      "renders": {
        "aws-id": "\n    [default]\n    aws_access_key_id = <aws_access_key>\n    aws_secret_access_key = <aws_secret_access_key>"
      },
      "secret_access_key": "<aws_secret_access_key>",
      "triggered_count": 0,
      "unacked_alert_count": 0,
      "updated_id": 17,
      "url": "<token_url>",
      "username": "<user_name>"
    },
    {
      "canarytoken": "<token_code>",
      "created": "1585947523.255526",
      "created_printable": "2020-04-03 20:58:43 (UTC)",
      "enabled": true,
      "flock_id": "flock:default",
      "hostname": "<token_hostname>",
      "key": "<token_key>",
      "kind": "dns",
      "memo": "Example Memo",
      "node_id": "<node_id>",
      "triggered_count": 0,
      "unacked_alert_count": 0,
      "updated_id": 4,
      "url": "<token_url>"
    },
    {
      "browser_scanner_enabled": true,
      "canarytoken": "<token_code>",
      "created": "1585947447.092035",
      "created_printable": "2020-04-03 20:57:27 (UTC)",
      "enabled": false,
      "flock_id": "flock:default",
      "hostname": "<token_hostname>",
      "key": "<token_key>",
      "kind": "http",
      "memo": "Example Memo",
      "node_id": "<node_id>",
      "triggered_count": 0,
      "unacked_alert_count": 0,
      "updated_id": 2,
      "url": "<token_url>"
    }
  ],
  "cursor": {
    "next": null,
    "next_link": null,
    "prev": null,
    "prev_link": null
  },
  "page_number": 1,
  "result": "success",
  "total_pages": 1,
  "total_results": 3
}
```
:::

:::::

</APIDetails>