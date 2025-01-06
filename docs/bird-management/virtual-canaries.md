---
endpoints:
  canaryvm_download:
    name: Download CanaryVM Image
    url: /api/v1/canaryvm/download
    method: GET
    description: Returns a URL to the versioned CanaryVM Image.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: version
        required: true
        type: string
        description: A valid CanaryVM version
      - name: format
        required: false
        type: string
        default: "vmx"
        description: "The format of the Virtual Canary archive. Options are: `vmx` and `ova`"
    response: A JSON Structure containing the download URL for the specified version of the CanaryVM image.
  canaryvm_download_seed:
    name: Download CanaryVM Image Seed Data
    url: /api/v1/canaryvm/downloadseed
    method: GET
    description: Returns a URL to the versioned CanaryVM Image Seed Data.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: version
        required: true
        type: string
        description: A valid CanaryVM version
    response: A JSON Structure containing the URL for the specified version of the CanaryVM image seed file.
  hypervcanary_download:
    name: Download Hyper-V Canary Image
    url: /api/v1/hypervcanary/download
    method: GET
    description: Returns a URL to the versioned Hyper-V Canary Image.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: version
        required: true
        type: string
        description: A valid Hyper-V Canary version
      - name: format
        required: true
        type: string
        description: "Format of the Hyper-V Canary archive. Options are: `zip`"
    response: A JSON Structure containing the download URL for the specified version of the Hyper-V Canary image.
  hypervcanary_download_seed:
    name: Download Hyper-V Canary Image Seed Data
    url: /api/v1/hypervcanary/downloadseed
    method: GET
    description: Returns a URL to the versioned Hyper-V Canary Image Seed Data.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: version
        required: true
        type: string
        description: A valid Hyper-V Canary version
    response: A JSON Structure containing the URL for the specified version of the Hyper-V Canary image seed file.
---

# Virtual Canaries

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints related to Virtual Canaries. Currently, this includes **CanaryVM** (for VMWare) and **Hyper-V** Canaries.

:::::

</APIEndpoints>

## Download CanaryVM Image

<APIDetails :endpoint="$page.frontmatter.endpoints.canaryvm_download">

::::: slot example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"
``` bash
curl https://EXAMPLE.canary.tools/api/v1/canaryvm/download \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d version=EXAMPLE_VERSION \
  -G
```
:::

::: tab "Python"
``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canaryvm/download'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'version': 'EXAMPLE_VERSION'
}

r = requests.get(url, params=payload)

print(r.json())
```
:::

::::

::: api-response

```json
{
  "link": "<download_link>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Download CanaryVM Image Seed Data

::: warning
You are likely looking for [Download CanaryVM Image](#download-canaryvm-image). This endpoint is specifically used to download
the seed data that gets attached to the 2nd hard drive in very rare cases where you need to replace it.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.canaryvm_download_seed">

::::: slot example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"
``` bash
curl https://EXAMPLE.canary.tools/api/v1/canaryvm/downloadseed \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d version=EXAMPLE_VERSION \
  -G
```
:::

::: tab "Python"
``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canaryvm/downloadseed'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'version': 'EXAMPLE_VERSION'
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
  "seedlink": "<seed_link>"
}
```
:::

:::::

</APIDetails>

## Download Hyper-V Canary Image

<APIDetails :endpoint="$page.frontmatter.endpoints.hypervcanary_download">

::::: slot example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"
``` bash
curl https://EXAMPLE.canary.tools/api/v1/hypervcanary/download \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d version=EXAMPLE_VERSION \
  -d format=zip \
  -G
```
:::

::: tab "Python"
``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/hypervcanary/download'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'version': 'EXAMPLE_VERSION',
  'format': 'zip'
}

r = requests.get(url, params=payload)

print(r.json())
```
:::

::::

::: api-response

```json
{
  "link": "<download_link>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Download Hyper-V Canary Image Seed Data

::: warning
You are likely looking for [Download Hyper-V Canary Image](#download-hyper-v-canary-image). This endpoint is specifically used to download
the seed data that gets attached to the 2nd hard drive in very rare cases where you need to replace it.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.hypervcanary_download_seed">

::::: slot example 

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"
``` bash
curl https://EXAMPLE.canary.tools/api/v1/hypervcanary/downloadseed \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d version=EXAMPLE_VERSION \
  -G
```
:::

::: tab "Python"
``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/hypervcanary/downloadseed'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'version': 'EXAMPLE_VERSION'
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
  "seedlink": "<seed_link>"
}
```
:::

:::::

</APIDetails>
