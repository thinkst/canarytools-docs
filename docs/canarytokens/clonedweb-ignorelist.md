---
endpoints:
  disable:
    name: Disable Ignore List
    url: /api/v1/canarytokens/clonedsite/ignorelist/disable
    method: POST
    description: Disable the ignore list for a specific Cloned Web token.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: canarytoken
        required: true
        type: string
        description: A valid Canarytoken
    response: A JSON structure with result indicator.
  enable:
    name: Enable Ignore List
    url: /api/v1/canarytokens/clonedsite/ignorelist/enable
    method: POST
    description: Enable the ignore list for a specific Cloned Web token.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: canarytoken
        required: true
        type: string
        description: A valid Canarytoken
    response: A JSON structure with result indicator.
  fetch:
    name: Fetch Ignore List
    url: /api/v1/canarytokens/clonedsite/ignorelist/fetch
    method: GET
    description: Enable the ignore list for a specific Cloned Web token.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: canarytoken
        required: true
        type: string
        description: A valid Canarytoken
    response: A JSON structure containing the ignore list info for the specified Cloned Web token.
  save:
    name: Save Ignore List
    url: /api/v1/canarytokens/clonedsite/ignorelist/save
    method: POST
    description: Save a new ignore list for a specific Cloned Web token.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: canarytoken
        required: true
        type: string
        description: A valid Canarytoken
      - name: ignores
        required: false
        type: string
        description: A comma separated list of regex ignores
    response: A JSON structure with result indicator.
---

# Cloned Web Ignore List

We have added the ability to add your own regex or website to be ignored when alerting for Cloned web Canarytokens.

This is useful if you see that your Cloned Web token is generating alerts that you deem "safe".

![Cloned Web Ignore](../images/cloned-web-ignore.png)

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Disable Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytokens/clonedsite/ignorelist/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=flock:default \
  -d canarytoken=EXAMPLE_CANARYTOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytokens/clonedsite/ignorelist/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'flock:default',
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

## Enable Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytokens/clonedsite/ignorelist/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=flock:default \
  -d canarytoken=EXAMPLE_CANARYTOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytokens/clonedsite/ignorelist/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'flock:default',
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

## Fetch Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytokens/clonedsite/ignorelist/fetch \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=flock:default \
  -d canarytoken=EXAMPLE_CANARYTOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytokens/clonedsite/ignorelist/fetch'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'flock:default',
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
  "ignore_lists": {
    "enabled": "true",
    "ignores": "^https?://web.archive.org,^https?://[a-z]{2}.hideproxy.me/"
  },
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Save Ignore List

<APIDetails :endpoint="$page.frontmatter.endpoints.save">

::: slot optional-parameters-notes

::: warning
Sending through a save without `ignores`, will assume you want to blank previously set values.
:::

:::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/canarytokens/clonedsite/ignorelist/save \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=flock:default \
  -d canarytoken=EXAMPLE_CANARYTOKEN \
  -d ignores='^https?://web.archive.org','^https?://[a-z]{2}.hideproxy.me/'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/canarytokens/clonedsite/ignorelist/save'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'flock:default',
  'canarytoken': 'EXAMPLE_CANARYTOKEN',
  'ignores':'^https?://web.archive.org,^https?://[a-z]{2}.hideproxy.me/'
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