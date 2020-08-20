---
endpoints:
  list_canarytokens:
    name: List available Canarytokens
    url: /api/v1/canarytokens/list
    method: GET
    description: Lists the available Canarytokens on your Canary Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator and Canarytokens information.
  delete_apeeper:
    name: Delete Apeeper Canarytoken Factory
    url: /api/v1/apeeperfactory/delete
    method: POST
    description: Delete an Apeeper Canarytoken factory.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: hash
        required: true
        type: string
        description:  A valid ApeeperFactory hash
    response: A JSON structure with result indicator.
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
        default: "'flock:default'"
        description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))
      - name: memo
        required: true
        type: string
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken
      - name: kind
        required: true
        type: string
        description: Specifies the type of Canarytoken. Please check "[List Canarytokens](/canarytokens/actions.html#list-canarytokens)" for available
                     Canarytoken kind values.
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
        default: true
        description: Enables a Javascript scanner to retrieve more information
                     (only valid with 'http' Canarytokens)
      - name: aws_id_username
        required: false
        type: string
        description: AWS ID Username is optional if the client wants to create an AWS API key linked to certain NameError
                     otherwise its randomly generated (optional when creating aws-id tokens)
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
    response: A JSON structure with the created Canarytoken information.
  delete:
    name: Delete Canarytoken
    url: /api/v1/canarytoken/delete
    method: POST
    description: Delete a Canarytoken.
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
  remove_s3:
    name: Remove AWS S3 Canarytoken
    url: /api/v1/canarytoken/remove/s3
    method: POST
    description: Remove an AWS S3 Canarytoken from your Amazon console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: canarytoken
        required: true
        type: string
        description: A valid Canarytoken
      - name: aws_access_key
        required: true
        type: string
        description: AWS Access Key ID (this is not stored on the Console and is only used for
                     the duration of the operation)
      - name: aws_secret_key
        required: true
        type: string
        description: AWS Secret Access Key (this is not stored on the Console and is only used
                     for the duration of the operation)
      - name: aws_region
        required: true
        type: string
        description: AWS Region where the token is located
      - name: delete_buckets
        required: false
        type: boolean
        default: false
        description: Boolean indicating if buckets must be deleted
      - name: s3_source_bucket
        required: false
        type: string
        description: Name of the S3 bucket which was being monitored
                     (required if delete_buckets is true)
    response: A JSON structure with result indicator.
  update:
    name: Update Canarytoken Memo
    url: /api/v1/canarytoken/update
    method: POST
    description: Update the memo of a Canarytoken.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: canarytoken
        required: true
        type: string
        description: A valid Canarytoken
      - name: memo
        required: true
        type: string
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken
    response: A JSON structure with result indicator.
---

# Actions

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you mint new, interact with, and view your existing Canarytokens.

:::::

</APIEndpoints>

## List Canarytokens

::: tip
The values returned by this Canarytokens API correspond to the `kind` parameter used to create
Canarytokens. As an example, if you wanted to create a Cloned Web Canarytoken, you would check the
response to this Canarytokens API and use `cloned-web` to define the Canarytoken type you wish to create.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.list_canarytokens">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytokens/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytokens/list'

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
  "canarytokens":{
    "apeeper":"EC2 Meta-data Service",
    "autoreg-google-docs":"Google Document",
    "autoreg-google-sheets":"Google Sheet",
    "aws-id":"Amazon API Key",
    "aws-s3":"Amazon S3",
    "cloned-web":"Cloned Website",
    "dns":"DNS",
    "doc-msword":"MS Word .docx Document",
    "fast-redirect":"Fast HTTP Redirect",
    "google-docs":"Google Document",
    "google-sheets":"Google Sheet",
    "googledocs_factorydoc":"Document Factory",
    "googlesheets_factorydoc":"Document Factory",
    "http":"Web",
    "msexcel-macro":"MS Excel .xlsm Document",
    "msword-macro":"MS Word .docm Document",
    "office365mail":"Office 365 email token",
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

## Create Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.create">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/create \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d memo='Example Memo' \
  -d kind=EXAMPLE_KIND
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/create'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'memo': 'Example Memo',
  'kind': 'EXAMPLE_TOKEN_KIND'
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
    "browser_scanner_enabled": true,
    "canarytoken": "<token_code>",
    "created": "1586161315.087693",
    "created_printable": "2020-04-06 08:21:55 (UTC)",
    "enabled": true,
    "flock_id": "flock:default",
    "hostname": "<token_hostname>",
    "key": "<token_key>",
    "kind": "http",
    "memo": "Example Memo",
    "triggered_count": 0,
    "updated_id": 7,
    "url": "<token_url>"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Delete Apeeper Canarytoken Factory

<APIDetails :endpoint="$page.frontmatter.endpoints.delete_apeeper"/>

## Delete Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.delete">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/delete \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d canarytoken=EXAMPLE_CANARYTOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/delete'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'canarytoken': 'EXAMPLE_CANARYTOKEN'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Disable Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d canarytoken=EXAMPLE_CANARYTOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'canarytoken': 'EXAMPLE_CANARYTOKEN'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Download Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.download">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/download \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d canarytoken=EXAMPLE_CANARYTOKEN
  -G -L -O -J
```

:::

::: tab "Python"

``` python
import requests
import re


url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/download'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'canarytoken': 'EXAMPLE_CANARYTOKEN'
}

r = requests.get(url, allow_redirects=True, params=payload)
filename = re.findall("filename=(.+)", r.headers["Content-Disposition"])[0]
with open(filename, 'wb') as f:
    f.write(r.content)
```

:::

::::

::: api-response
```bash
$ ls -l
-rw-r--r--  1 user  thinkst  5095 Apr  7 12:29 <filename>
```
:::

:::::

</APIDetails>

## Enable Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d canarytoken=EXAMPLE_CANARYTOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'canarytoken': 'EXAMPLE_CANARYTOKEN'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Fetch Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/fetch \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d canarytoken=EXAMPLE_CANARYTOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/fetch'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'canarytoken': 'EXAMPLE_CANARYTOKEN'
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
  "token": {
    "canarytoken": "<token_code>",
    "created": "1585947523.255526",
    "created_printable": "2020-04-03 20:58:43 (UTC)",
    "enabled": true,
    "flock_id": "flock:default",
    "hostname": "<token_hostname>",
    "key": "<token_key>",
    "kind": "dns",
    "memo": "Example Memo",
    "triggered_count": 0,
    "updated_id": 4,
    "url": "<token_url>"
  }
}
```
:::

:::::

</APIDetails>

## Remove AWS S3 Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.remove_s3"/>

## Update Canarytoken Memo

<APIDetails :endpoint="$page.frontmatter.endpoints.update">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/update \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d canarytoken=EXAMPLE_CANARYTOKEN \
  -d memo='Example Memo'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/update'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'canarytoken': 'EXAMPLE_CANARYTOKEN',
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
  "result": "success",
  "token": {
    "canarytoken": "<token_code>",
    "created": "1585947523.255526",
    "created_printable": "2020-04-03 20:58:43 (UTC)",
    "enabled": true,
    "flock_id": "flock:default",
    "hostname": "<token_hostname>",
    "key": "<token_key>",
    "kind": "dns",
    "memo": "Updated Example Memo",
    "triggered_count": 0,
    "updated_id": 4,
    "url": "<token_url>"
  }
}
```
:::

:::::

</APIDetails>