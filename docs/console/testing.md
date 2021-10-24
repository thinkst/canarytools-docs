---
endpoints:
  ping:
    name: Ping
    url: /api/v1/ping
    method: GET
    description: A simple endpoint to test if the API is reachable.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON message with a result indicator.
  syslog_fake_alerts:
    name: Send Fake Syslog Alerts
    url: /api/v1/syslog/fake_alert/<incident_count>
    method: GET
    description: Send fake alerts to your syslog setup.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: alert_all_devices
        required: false
        type: boolean
        description: Create a fake alert for all Birds connected to your Console
    response: A JSON message with a result indicator.
  syslog_test:
    name: Send Syslog Test Message
    url: /api/v1/syslog/test
    method: GET
    description: Test your Syslog setup by sending a dummy test message.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON message with a result indicator.
---
# Testing

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to test connectivity with your Console.

:::::

</APIEndpoints>

## Ping

<APIDetails :endpoint="$page.frontmatter.endpoints.ping">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/ping \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/ping'

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
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Send Fake Syslog Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.syslog_fake_alerts">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/syslog/fake_alert/1 \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/syslog/fake_alert/1'

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
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Send Syslog Test Message

<APIDetails :endpoint="$page.frontmatter.endpoints.syslog_test">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/syslog/test \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/syslog/test'

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
  "result": "success"
}
```
:::

:::::

</APIDetails>
