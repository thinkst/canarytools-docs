---
endpoints:
  list_factory_canarytokens:
    name: List Canarytokens available via Canarytoken Factory
    url: /api/v1/canarytokens/factory/list
    method: GET
    description: Lists the Canarytokens available via your Canarytokens Factory.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator and Canarytokens Factory information.
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
        default: "'flock:default'"
        description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))
      - name: memo
        required: true
        type: string
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken
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
        default: "'flock:default'"
        description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))
      - name: memo
        required: true
        type: string
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken
      - name: kind
        required: true
        type: string
        description:  Specifies the type of Canarytoken. Supported classes include
                      http, dns, cloned-web, doc-msword, web-image, windows-dir,
                      pdf-acrobat-reader, msword-macro, msexcel-macro, aws-id, qr-code,
                      svn, sql, fast-redirect, slow-redirect, slack-api
      - name: web_image
        required: false
        type: string
        description: An image file for use with web-image tokens (request must be multipart/form-data encoded
                     if parameter is present, required when using web-image)
      - name: cloned_web
        required: false
        type: string
        description: Domain to check against (required when creating cloned-web tokens)
      - name: browser_scanner_enabled
        required: false
        type: boolean
        default: true
        description: Enables a Javascript scanner to retrieve more information
                     (only valid with 'http' Canarytokens)
      - name: aws_id_username
        required: false
        type: string
        description: AWS ID Username is optional if you want to create an AWS API key linked to
                     certain Name otherwise it is randomly generated.
      - name: browser_redirect_url
        required: false
        type: string
        description: Browser redirect URL is the URL you want your Canarytoken server to redirect attackers to after they have
                     triggered your Canarytoken token (required when creating fast-redirect and slow-redirect tokens)
      - name: trigger_type
        required: false
        type: string
        description: SQL action that triggers the SQL Canarytoken - these can be `SELECT`, `INSERT`, `UPDATE` or `DELETE`
                     (required when creating sql tokens)
      - name: trigger_name
        required: false
        type: string
        description: Name of the trigger we will create (required when creating sql tokens with `trigger_type` as `INSERT`, `UPDATE` or `DELETE`)
      - name: table_name
        required: false
        type: string
        description: Name of table that will activate the trigger when the `trigger_type` action is executed on this table (required when creating
                     sql tokens with `trigger_type` as `INSERT`, `UPDATE` or `DELETE`)
      - name: view_name
        required: false
        type: string
        description: Name of the view that will be created to call your specified function (from `function_name`) and trigger the embedded
                     Canarytoken (required when creating sql tokens with `trigger_type` as `SELECT`)
      - name: function_name
        required: false
        type: string
        description: Name of the table-view function created to trigger your Canarytoken (required when creating sql tokens with `trigger_type` as `SELECT`)
      - name: exe
        required: false
        type: string
        description: The Windows executable that you would like tokened (required when creating signed-exe tokens)
      - name: web_image
        required: false
        type: string
        description: Image file (jpeg or png) that will be displayed on the Canarytokens URL (required when creating web-image tokens)
    response: A JSON structure with the generated Canarytoken.
---

# Factory

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Sometimes you want to automate the creation of Canarytokens across your fleet. Perhaps you want every EC2 instance to reach out and fetch a token on creation (or startup). The Canary Console API allows for the automation, but it seems a bad idea to use your API key on every host.

The Canarytoken factory gives you a limited use key that is able to create other tokens. You can leave this key on a host knowing that even if an attacker were able to grab it, he'd be able to create new tokens but not remove (or alter) anything else.

:::::

</APIEndpoints>

## List Canarytokens available via Canarytoken Factory

::: tip
The values returned by this Canarytokens Factory API correspond to the `kind` parameter used to create
Canarytokens via the Canarytokens Factory. As an example, if you wanted to create a Cloned Web Canarytoken, you would check the
response to this Canarytoken Factory API and use `cloned-web` to define the Canarytoken type you wish to create via the Canarytoken Factory.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.list_factory_canarytokens">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytokens/factory/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytokens/factory/list'

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
  "factory_canarytokens":{
    "aws-id":"Amazon API Key",
    "cloned-web":"Cloned Website",
    "dns":"DNS",
    "doc-msword":"MS Word .docx Document",
    "fast-redirect":"Fast HTTP Redirect",
    "http":"Web",
    "msexcel-macro":"MS Excel .xlsm Document",
    "msword-macro":"MS Word .docm Document",
    "pdf-acrobat-reader":"Acrobat Reader PDF Document",
    "qr-code":"QR Code",
    "signed-exe":"Signed Exe",
    "slack-api":"Slack API Key",
    "slow-redirect":"Slow HTTP Redirect",
    "sql":"SQL Server",
    "svn":"SVN Repo",
    "web-image":"Remote Web Image",
    "windows-dir":"Windows Directory Browsing"
  },
  "result":"success"
}
```
:::

:::::

</APIDetails>

## Create Canarytokens Using Factory

<APIDetails :endpoint="$page.frontmatter.endpoints.factory">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/factory \
  -d factory_auth=EXAMPLE_FACTORY_AUTH_TOKEN \
  -d memo='Example Memo' \
  -d kind=EXAMPLE_KIND
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/factory'

payload = {
  'factory_auth': 'EXAMPLE_FACTORY_AUTH_TOKEN',
  'memo': 'Example Memo',
  'kind': 'EXAMPLE_KIND'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "canarytoken": {
    "access_key_id": "<access_key_id>",
    "canarytoken": "<token_code>",
    "created": "1586246956.323499",
    "created_printable": "2020-04-07 08:09:16 (UTC)",
    "enabled": true,
    "factory_auth": "<factory_auth_token>",
    "flock_id": "flock:default",
    "hostname": "<token_hostname>",
    "key": "canarydrop:<key>",
    "kind": "aws-id",
    "memo": "Example Memo",
    "renders": {
      "aws-id": "\n    [default]\n    aws_access_key_id = <aws_access_key>\n    aws_secret_access_key = <aws_secret_access_key>"
    },
    "secret_access_key": "<aws_secret_access_key>",
    "triggered_count": 0,
    "updated_id": 14,
    "url": "<token_url>",
    "username": "<token_user_name>"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Create Canarytoken Factory Auth String

<APIDetails :endpoint="$page.frontmatter.endpoints.create_factory">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/create_factory \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d memo='Example Memo'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/create_factory'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'memo': 'Example Memo'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "factory_auth": "<factory_auth_token>",
  "factory_url": "/api/v1/canarytoken/factory",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Delete Canarytoken Factory Auth String

<APIDetails :endpoint="$page.frontmatter.endpoints.delete_factory">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/canarytoken/delete_factory \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d factory_auth=EXAMPLE_FACTORY_AUTH_TOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/delete_factory'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'factory_auth': 'EXAMPLE_FACTORY_AUTH_TOKEN'
}

r = requests.delete(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "msg": "TokenFactory auth string deleted",
  "result": "success"
}
```
:::

:::::

</APIDetails>
