---
endpoints:
  get_user:
    name: Get User
    url: /api/v1/user/get
    method: GET
    description: Retrieves a user's details.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be returned
    response: JSON structure with the user's details.
  get_user_auth:
    name: Get User Auth
    url: /api/v1/user/auth
    method: GET
    description: Retrieves a user's authorization details.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be returned
    response: JSON structure with the user's authorization details.
  filter_users:
    name: Filter Users
    url: /api/v1/users/filter
    method: GET
    description: List all users that match a specified `filter_str`.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: filter_str
        required: true
        type: string
        description: String to match on
    response: JSON structure with the list of filtered users.
  list_users:
    name: List Users
    url: /api/v1/users/list
    method: GET
    description: List all users and their roles.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with the list of users.
---

# Queries

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to view users on your Console.

:::::

</APIEndpoints>

## Get User

<APIDetails :endpoint="$page.frontmatter.endpoints.get_user">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/get \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -d email=EXAMPLE_EMAIL \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/get'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_EMAIL'
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
  "user": {
    "access_level": "admin",
    "disabled": false,
    "email": "<user_email>",
    "id": "<user_id>",
    "managed_flocks": "",
    "no_direct_login": false,
    "note": "Example User Note",
    "saml_provisioned": false,
    "summary_email_enabled": true,
    "supervisor": false,
    "totp_enabled": true,
    "watched_flocks": "",
    "webauthn_credential": "",
    "webauthn_enabled": false
  }
}
```
:::

:::::

</APIDetails>

## Get User Auth

<APIDetails :endpoint="$page.frontmatter.endpoints.get_user_auth">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/auth \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -d email=EXAMPLE_EMAIL \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/auth'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_EMAIL'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "access_level": 1,
  "email": "<user_email>",
  "is_sso_login": false,
  "managed_flocks": [],
  "result": "success",
  "saml_login": false,
  "watched_flocks": []
}
```
:::

:::::

</APIDetails>

## Filter Users

<APIDetails :endpoint="$page.frontmatter.endpoints.filter_users">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/users/filter \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -d filter_str='EXAMPLE_FILTER_STRING' \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/users/filter'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'filter_str': 'EXAMPLE_FILTER_STRING'
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
  "users": [
    {
      "access_level": "1",
      "disabled": "None",
      "email": "<user_email>",
      "id": "<user_id>",
      "note": "",
      "supervisor": "False",
      "totp_enabled": "True"
    }
  ]
}
```
:::

:::::

</APIDetails>

## List Users

<APIDetails :endpoint="$page.frontmatter.endpoints.list_users">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/users/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN  \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/users/list'

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
  "users": [
    {
      "access_level": "1",
      "disabled": "None",
      "email": "<user_email>",
      "id": "<user_id>",
      "managed_flocks": "",
      "note": "",
      "supervisor": "False",
      "totp_enabled": "True",
      "watched_flocks": "",
      "webauthn_enabled": false
    },
    ...
  ]
}
```
:::

:::::

</APIDetails>
