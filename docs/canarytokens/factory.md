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
    name: Create Canarytoken Factory Auth String
    url: /api/v1/canarytoken/create_factory
    method: POST
    description: Create an auth string for the Canarytoken Factory endpoint.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: memo
        required: true
        type: string
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken
    response: A JSON structure with auth string and Canarytoken factory endpoint.
  delete_factory:
    name: Delete Canarytoken Factory Auth String
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
  list_factory_auth_strings:
    name: List Canarytoken Factory Auth Strings
    url: /api/v1/canarytoken/list_factories
    method: GET
    description: List all Factory auth strings for the Canarytoken Factory endpoint.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with a list of factory auth strings.
  factory:
    name: Create Canarytokens Using Factory
    url: /api/v1/canarytoken/factory/create
    method: POST
    description: Create Canarytokens using a Canarytokens Factory auth string
    params:
      - name: factory_auth
        required: true
        type: string
        description: A valid factory_auth string
      - name: flock_id
        required: false
        type: string
        default: "flock_id of factory"
        description: A valid flock_id (defaults to the flock_id of the token factory)
      - name: memo
        required: true
        type: string
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken
      - name: kind
        required: true
        type: string
        description:  Specifies the type of Canarytoken. Please check "[List Factory Tokens](/canarytokens/factory.html#list)" for available
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
      - name: browser_scanner_enabled
        required: false
        type: boolean
        default: true
        description: Enables a Javascript scanner to retrieve more information
                     (only valid with 'http' Canarytokens)
      - name: browser_redirect_url
        required: false
        type: string
        description: Browser redirect URL is the URL you want your Canarytoken server to redirect attackers to after they have
                     triggered your Canarytoken token (required when creating fast-redirect and slow-redirect tokens)
      - name: exe
        required: false
        type: string
        description: The Windows executable that you would like tokened (required when creating signed-exe tokens)
      - name: web_image
        required: false
        type: string
        description: Image file (jpeg or png) that will be displayed on the Canarytokens URL (required when creating web-image tokens)
      - name: doc
        type: file
        description: Upload MS Word Document to canarytoken; optionally used with MS Word Document (doc-msword) token. With curl use the following flag
                     `-F 'doc=@upload-me.docx; type=application/vnd.openxmlformats-officedocument.wordprocessingml.document'`
      - name: pdf
        type: file
        description: Upload PDF file to canarytoken; optionally used with Adobe PDF canarytoken (pdf-acrobat-reader). With curl use the following flag
                    `-F pdf=@upload-me.pdf; type=application/pdf`
      - name: process_name
        required: false
        type: string
        description: Name of the process you want to monitor (required when creating sensitive-cmd tokens)
        
      - name: azure_id_cert_file_name
        required: false
        type: string
        description: Azure ID config will use this as the file path to the certificate (required when creating Azure ID tokens).
       
    response: A JSON structure with the generated Canarytoken.
  factory_download:
    name: Download Canarytoken using the Factory auth string
    url: /api/v1/canarytoken/factory/download
    method: GET
    description: Download the generated file (if one exists) for the supplied Canarytoken using the Factory auth string
    params:
      - name: factory_auth
        required: true
        type: string
        description: A valid Canarytoken factory auth string
      - name: canarytoken
        required: true
        type: string
        description: An identifier for a Canarytoken that supports downloadable files
    response: A file if the Canarytoken supports file generation, otherwise an error.
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
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
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
  "factory_canarytokens": {
    "aws-id": "AWS API Key",
    "azure-id": "Azure Login Certificate and Config",
    "cloned-web": "Cloned Website",
    "dns": "DNS",
    "doc-msexcel": "MS Excel Document",
    "doc-msword": "MS Word Document",
    "fast-redirect": "Fast Redirect",
    "http": "Web Bug",
    "msexcel-macro": "MS Excel Macro Document",
    "msword-macro": "MS Word Macro Document",
    "pdf-acrobat-reader": "Acrobat PDF",
    "qr-code": "QR Code",
    "sensitive-cmd": "Sensitive Command",
    "signed-exe": "Custom Exe/Binary",
    "slack-api": "Slack API Key",
    "slow-redirect": "Slow Redirect",
    "web-image": "Custom Web Image",
    "windows-dir": "Windows Folder",
    "wireguard": "WireGuard VPN"
  },
  "result": "success"
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
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/factory/create \
  -d factory_auth=EXAMPLE_FACTORY_AUTH_TOKEN \
  -d memo='Example Memo' \
  -d kind=EXAMPLE_KIND
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/factory/create'

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

## Download Canarytoken using Factory Auth String

<APIDetails :endpoint="$page.frontmatter.endpoints.factory_download">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/factory/download \
  -d factory_auth=EXAMPLE_FACTORY_AUTH \
  -d canarytoken=EXAMPLE_CANARYTOKEN
  -G -L -O -J
```

:::

::: tab "Python"

``` python
import requests
import re


url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/factory/download'

payload = {
  'factory_auth': 'EXAMPLE_FACTORY_AUTH',
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

## Create Canarytoken Factory Auth String

<APIDetails :endpoint="$page.frontmatter.endpoints.create_factory">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/create_factory \
  -d auth_token=EXAMPLE_AUTH_TOKEN -d flock_id=flock:default \
  -d memo='Example Memo'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/create_factory'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'flock:default',
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

## List Canarytoken Factory Auth Strings

<APIDetails :endpoint="$page.frontmatter.endpoints.list_factory_auth_strings">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytoken/list_factories \
  -d auth_token=EXAMPLE_AUTH_TOKEN -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytoken/list_factories'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.get(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "factories": [
    {
      "factory_auth": "<Factory Auth String>",
      "flock_id": "flock:default",
      "memo": "Example Memo"
    }, 
    {
      "factory_auth": "<Factory Auth String 2>",
      "flock_id": "flock:default",
      "memo": "Example Memo 2"
    }
  ], 
  "result": "success"
}
```
:::

:::::

</APIDetails>
