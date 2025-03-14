---
endpoints:
  list_canarytokens:
    name: List Kinds of Canarytokens
    url: /api/v1/canarytokens/list
    method: GET
    description: Lists the available Canarytokens on your Canary Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator and Canarytokens information.
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

      - name: kind
        required: true
        type: string
        description: Specifies the type of Canarytoken. Please check "[List Canarytokens](/canarytokens/actions.html#list-kinds-of-canarytokens)" for available
                     Canarytoken kind values.

      - name: memo
        required: true
        type: string
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken, limited to 10000 characters.

      - name: aws_access_key
        required: false
        type: string
        description: AWS Access Key ID (required if automating creation of AWS S3 token)

      - name: aws_secret_key
        required: false
        type: string
        description: AWS Secret Access Key (required if automating creation of AWS S3 token)

      - name: aws_session_token
        required: false
        type: string
        description: AWS Session Token (required if automating creation of AWS S3 token, using temporary credentials)

      - name: aws_region
        required: false
        type: string
        description: AWS region (required if automating creation of AWS S3 token)

      - name: azure_id_cert_file_name
        required: false
        type: string
        description: Azure ID config will use this as the file path to the certificate (required when creating Azure ID tokens).

      - name: browser_redirect_url
        required: false
        type: string
        description: Browser redirect URL is the URL you want your Canarytoken server to redirect attackers to after they have
                     triggered your Canarytoken token (required when creating fast-redirect and slow-redirect tokens)

      - name: browser_scanner_enabled
        required: false
        type: boolean
        default: true
        description: Enables a Javascript scanner to retrieve more information
                     (only valid with 'http' Canarytokens)

      - name: cloned_web
        required: false
        type: string
        description: Domain to check against (required when creating cloned-web tokens)

      - name: custom_domain
        required: false
        type: string
        description: Specifies the custom Canarytoken domain to use (that's already been linked to the Console) when creating a Canarytoken

      - name: doc
        required: false
        type: file
        description: Upload MS Word Document to canarytoken; optionally used with MS Word Document (doc-msword) token. With curl use the following flag
                     `-F 'doc=@upload-me.docx; type=application/vnd.openxmlformats-officedocument.wordprocessingml.document'`

      - name: exe
        required: false
        type: file
        description: The Windows executable that you would like tokened (required when creating signed-exe tokens)

      - name: expected_referrer
        required: false
        type: string
        description: The expected referrer to make a request when creating the `Cloned CSS` and `Azure Entra Login` Canarytokens.

      - name: flock_id
        required: false
        type: string
        default: "'flock:default'"
        description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))

      - name: idp_app_type
        required: false
        type: string
        description: Type of the Fake App for the IdP App Canarytoken

      - name: pdf
        required: false
        type: file
        description: Upload PDF file to canarytoken; optionally used with Adobe PDF canarytoken (pdf-acrobat-reader). With curl use the following flag
                    `-F pdf=@upload-me.pdf; type=application/pdf`

      - name: process_name
        required: false
        type: string
        description: Name of the process you want to monitor (required when creating sensitive-cmd tokens)

      - name: pwa_app_name
        required: false
        type: string
        description: Name of the Fake App for the `pwa` Canarytoken

      - name: pwa_icon
        required: false
        type: string
        description: Name of the icon used by your Fake App for the `pwa` Canarytoken

      - name: s3_log_bucket
        required: false
        type: string
        description: S3 bucket where logs will be stored (required when creating aws-s3 tokens)

      - name: s3_source_bucket
        required: false
        type: string
        description: S3 bucket to monitor for access  (required when creating aws-s3 tokens)

      - name: tokened_usernames
        required: false
        type: string
        description: A comma separated list of Active Directory usernames to token (required when creating active-directory-login tokens)

      - name: web_image
        required: false
        type: file
        description: Upload an Image file (jpeg or png) that will be displayed on the Canarytokens URL (required when creating web-image tokens)
                     With curl use the following flag&#58;
                     `-F 'web_image=@upload-me.png; type=image/png'` for png files
                     `-F 'web_image=@upload-me.jpg; type=image/jpeg'` for jpeg files

    response: A JSON structure with the created Canarytoken information.
  delete:
    name: Delete Canarytoken
    url: /api/v1/canarytoken/delete
    method: POST
    description: Delete a Canarytoken. You'll need to delete all incidents on a token before you can delete the token itself. If there are still incidents
                  attached to the token, you can specify `clear_incidents=true` to delete them all.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: canarytoken
        required: true
        type: string
        description: A valid Canarytoken
      - name: clear_incidents
        required: false
        type: boolean
        description: Delete associated incidents
    response: A JSON structure with result indicator.
  bulk_delete:
    name: Bulk Delete Canarytokens
    url: /api/v1/canarytokens/delete
    method: POST
    description: Bulk delete Canarytokens that match the specified criterion. You'll need to delete all incidents on the matching tokens
                  before you can delete the tokens, otherwise no tokens will be deleted and an error returned.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: domains
        required: true
        type: string
        description: A comma separated list of custom domains from which all tokens should be deleted.
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
    name: Fetch a Canarytoken
    url: /api/v1/canarytoken/fetch
    method: GET
    description: Fetch information about a specific Canarytoken.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: canarytoken
        required: true
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
      - name: aws_session_token
        required: false
        type: string
        description: AWS Session Token. Required when using temporary AWS authentication (this
                     is not stored on the Console and is only used
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
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken, limited to 10000 characters.
    response: A JSON structure with result indicator.
  update_redirect_url:
    name: Update Canarytoken Redirect URL
    url: /api/v1/canarytoken/update/redirect_url
    method: POST
    description: Update the redirect URL of a Canarytoken that supports redirects.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: canarytoken
        required: true
        type: string
        description: A valid Canarytoken that support redirects (e.g. slow redirect token or QR code token)
      - name: redirect_url
        required: true
        type: string
        description: A valid url that the user should be redirected to after opening the Canarytoken
    response: A JSON structure with result indicator.
---

# Actions

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to mint new, interact with, and view your existing Canarytokens.

:::::

</APIEndpoints>

## List Kinds of Canarytokens

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
  -d auth_token=EXAMPLE_AUTH_TOKEN -G
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
  "canarytokens": {
      "active-directory-login": "Active Directory Login",
      "autoreg-google-docs": "Google Doc",
      "autoreg-google-sheets": "Google Sheet",
      "aws-id": "AWS API Key",
      "aws-s3": "AWS S3 Bucket",
      "azure-entra-login": "Azure Entra Login",
      "azure-id": "Azure Login Certificate and Config",
      "cloned-css": "CSS cloned site",
      "cloned-web": "Cloned Website",
      "credit-card": "Credit Card",
      "dns": "DNS",
      "doc-msexcel": "MS Excel Document",
      "doc-msword": "MS Word Document",
      "fast-redirect": "Fast Redirect",
      "gmail": "Gmail",
      "google-docs": "Google Doc",
      "google-sheets": "Google Sheet",
      "http": "Web Bug",
      "msexcel-macro": "MS Excel Macro Document",
      "msword-macro": "MS Word Macro Document",
      "mysql-dump": "MySQL Dump File",
      "office365mail": "Office 365 Mail Bug",
      "pdf-acrobat-reader": "Acrobat PDF",
      "pwa": "Fake App",
      "qr-code": "QR Code",
      "sensitive-cmd": "Sensitive Command",
      "signed-exe": "Custom Exe/Binary",
      "slack-api": "Slack API Key",
      "slow-redirect": "Slow Redirect",
      "web-image": "Custom Web Image",
      "windows-dir": "Windows Folder",
      "wireguard": "WireGuard VPN",
  },
    "result": "success"
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

## Bulk Delete Canarytokens

<APIDetails :endpoint="$page.frontmatter.endpoints.bulk_delete">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytokens/delete \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d domains="EXAMPLE_DOMAIN1,EXAMPLE_DOMAIN2"
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytokens/delete'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'domains': 'EXAMPLE_DOMAIN1,EXAMPLE_DOMAIN2'
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
  "deleted_count": 1
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
  -d canarytoken=EXAMPLE_CANARYTOKEN \
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

## Fetch a Canarytoken

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

<APIDetails :endpoint="$page.frontmatter.endpoints.remove_s3">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/remove/s3 \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d canarytoken=EXAMPLE_CANARYTOKEN \
  -d aws_access_key=EXAMPLE_AWS_ACCESS_KEY \
  -d aws_secret_key=EXAMPLE_AWS_SECRET_KEY \
  -d aws_region=EXAMPLE_AWS_REGION
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/remove/s3'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'canarytoken': 'EXAMPLE_CANARYTOKEN',
  'aws_access_key': 'EXAMPLE_AWS_ACCESS_KEY',
  'aws_secret_key': 'EXAMPLE_AWS_SECRET_KEY',
  'aws_region': 'EXAMPLE_AWS_REGION'
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

## Update Canarytoken Redirect URL

<APIDetails :endpoint="$page.frontmatter.endpoints.update_redirect_url">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/update/redirect_url \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d canarytoken=EXAMPLE_CANARYTOKEN \
  -d redirect_url='https://example.com'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/update/redirect_url'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'canarytoken': 'EXAMPLE_CANARYTOKEN',
  'redirect_url': 'https://example.com'
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
}
```
:::

:::::

</APIDetails>