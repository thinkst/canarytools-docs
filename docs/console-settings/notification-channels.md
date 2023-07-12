---
endpoints:
  email_disable:
    name: Disable Email Notifications
    url: /api/v1/settings/notifications/email/disable
    method: POST
    description: Disable email notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  email_enable:
    name: Enable Email Notifications
    url: /api/v1/settings/notifications/email/enable
    method: POST
    description: Enable email notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  email_save:
    name: Set Email Notifications List
    url: /api/v1/settings/notifications/email/save
    method: POST
    description: Set the list of email addresses to send notifications to.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: addresses
        required: false
        type: string
        description: A comma separated list of email addresses
      - name: clear
        required: false
        type: boolean
        description: If set to true, clears the list of email addresses
    response: A JSON structure with result indicator and the current list of emails.
  info:
    name: View Notification Information
    url: /api/v1/settings/notifications/info
    method: GET
    description: View the current notification configuration for your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with notification information.
  sms_disable:
    name: Disable SMS Notifications
    url: /api/v1/settings/notifications/sms/disable
    method: POST
    description: Disable SMS notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  sms_enable:
    name: Enable SMS Notifications
    url: /api/v1/settings/notifications/sms/enable
    method: POST
    description: Enable SMS notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  sms_save:
    name: Set SMS Notifications List
    url: /api/v1/settings/notifications/sms/save
    method: POST
    description: Set the list of cellphone numbers to send notifications to.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: numbers
        required: false
        type: string
        description: A comma separated list of cellphone numbers
      - name: clear
        required: false
        type: boolean
        description: If set to true, clears the list of cellphone numbers
    response: A JSON structure with result indicator and the current list of cellphone numbers.
  generic_get:
    name: List Generic Webhooks
    url: /api/v1/settings/generic/list
    method: GET
    description: Retrieve generic webhooks and list the names of the headers configured for the webhook. (Header values are not shown as they may be sensitive.)
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with the list of generic webhooks.
  generic_add:
    name: Add a Generic Webhook
    url: /api/v1/settings/generic/add
    method: POST
    description: Add a new generic webhook.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: url
        required: true
        type: string
        description: The URL of the webhook that we'll post data to
      - name: headers
        required: false
        type: string
        description: JSON structure of the headers to configure for the webhook.
    response: A JSON structure with result indicator.
  generic_remove:
    name: Remove a Generic Webhook
    url: /api/v1/settings/generic/remove
    method: POST
    description: Remove an existing generic webhook.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: url
        required: true
        type: string
        description: The URL of the webhook that you want to remove
    response: A JSON structure with result indicator.
  generic_test:
    name: Test an Existing Generic Webhook
    url: /api/v1/settings/generic/test
    method: POST
    description: Test an existing generic webhook endpoint by sending it test data.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: url
        required: true
        type: string
        description: The URL of the webhook that we'll send test data to
    response: A JSON structure with result indicator.
  msteams_add:
    name: Add a Generic Webhook
    url: /api/v1/settings/ms_teams/add
    method: POST
    description: Add a new MS Teams webhook.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: url
        required: true
        type: string
        description: The URL of the MS Teams webhook that we'll post data to
    response: A JSON structure with result indicator.
  msteams_remove:
    name: Remove an MS Teams Webhook
    url: /api/v1/settings/ms_teams/remove
    method: POST
    description: Remove an existing MS Teams webhook.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: url
        required: true
        type: string
        description: The URL of the MS Teams webhook that you want to remove
    response: A JSON structure with result indicator.
  msteams_test:
    name: Test an Existing MS Teams Webhook
    url: /api/v1/settings/ms_teams/test
    method: POST
    description: Test an existing MS Teams webhook by sending it test data.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: url
        required: true
        type: string
        description: The URL of the MS Teams webhook that we'll send test data to
    response: A JSON structure with result indicator.
  slack_remove:
    name: Remove an Existing Slack Webhook
    url: /api/v1/settings/slack/remove
    method: POST
    description: Remove an existing Slack webhook.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: team
        required: true
        type: string
        description: Team associated with the Slack webhook
      - name: channel
        required: true
        type: string
        description: Channel associated with the Slack webhook
    response: A JSON structure with result indicator.
  slack_test:
    name: Test an Existing Slack Webhook
    url: /api/v1/settings/slack/test
    method: POST
    description: Test an existing Slack webhook by sending it test data.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: url
        required: true
        type: string
        description: The URL of the Slack webhook that we'll send test data to
    response: A JSON structure with result indicator.
  pubsub_new_subscription:
    name: Add a Google Pub/Sub subscriber
    url: /api/v1/pubsub/new_subscription
    method: POST
    description: Adds a new Pub/Sub subscriber.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: subscription_name
        required: true
        type: string
        description: The name of the subscriber
    response: A JSON structure with result indicator.
  pubsub_remove_subscription:
    name: Remove an existing Google Pub/Sub subscriber
    url: /api/v1/pubsub/remove_subscription
    method: DELETE
    description: Removes a Pub/Sub subscriber.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: subscription_name
        required: true
        type: string
        description: The name of the subscriber
    response: A JSON structure with result indicator.
  pubsub_test:
    name: Sends a test message to subscribers
    url: /api/v1/pubsub/test
    method: POST
    description: Sends a test message to subscribers.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
---

# Notification Channels
 
<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

When an alert is triggered on your Birds, or a change happens on your Console, we can send you a notification to let you know something is up.

These notifications can be sent to different channels and they can also be customized so that you only receive the notifications that matter to you (take a look at [Ignore Lists](/console-settings/ignore-lists.html) to filter alerts generated from your Birds).

The following endpoints will allow you to configure your notification channels such as [Webhooks](#webhooks) ([Slack](#slack), [MS Teams](#ms-teams), [Generic](#generic)), [SMS](#sms), [Email](#email) and [Syslog](#syslog).

::: tip
Viewing your Console's current notification setup is as easy as querying the [Info](#info) endpoint.
:::

:::::

</APIEndpoints>

## Email

Whenever an alert comes in, we can send you a notification directly to your inbox. Simple, but effective.

#### Disable Email Notifications

<APIDetails :endpoint="$page.frontmatter.endpoints.email_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/notifications/email/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/notifications/email/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
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

#### Enable Email Notifications

<APIDetails :endpoint="$page.frontmatter.endpoints.email_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/notifications/email/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/notifications/email/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
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

#### Set Email Notifications List

<APIDetails :endpoint="$page.frontmatter.endpoints.email_save">

::: slot optional-parameters-notes

::: tip
At least one of the optional parameters is required.
:::

:::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/notifications/email/save \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d addresses=EXAMPLE_ADDRESSES_LIST
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/notifications/email/save'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'addresses': 'EXAMPLE_ADDRESSES_LIST'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "emails": "<email_address>,<email_address>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Info

<APIDetails :endpoint="$page.frontmatter.endpoints.info">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/notifications/info \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/notifications/info'

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
  "emails": {
    "addresses": "fail@domain.com,test@domain.com",
    "enabled": "True"
  },
  "result": "success",
  "sms": {
    "enabled": "False",
    "numbers": ""
  }
}
```
:::

:::::

</APIDetails>

## SMS

Whenever an alert comes in, we can send you a notification directly to your cellphone. Simple, but effective.

#### Disable SMS Notifications

<APIDetails :endpoint="$page.frontmatter.endpoints.sms_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/notifications/sms/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/notifications/sms/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
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

#### Enable SMS Notifications

<APIDetails :endpoint="$page.frontmatter.endpoints.sms_enable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/notifications/sms/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/notifications/sms/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
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

#### Set SMS Notifications List

<APIDetails :endpoint="$page.frontmatter.endpoints.sms_save">

::: slot optional-parameters-notes

::: tip
At least one of the optional parameters is required.
:::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/notifications/sms/save \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d numbers=EXAMPLE_CELLPHONE_NUMBERS_LIST
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/notifications/sms/save'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'numbers': 'EXAMPLE_CELLPHONE_NUMBERS_LIST'
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

## Syslog

We don't currently have endpoints publicly available to enable and manage your Syslog setup. Instead, we deal with all the setup and simply require the Syslog details from you to get it done. We have a KB article that will [explain the setup process](https://help.canary.tools/hc/en-gb/articles/360002432118-How-can-I-get-alerts-via-Syslog).

## Webhooks

### Generic

If you simply want us to POST JSON data to a URL, the Generic Webhook is perfect for you.

### List Generic Webhooks

<APIDetails :endpoint="$page.frontmatter.endpoints.generic_get">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/generic/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/generic/list'

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
  "generic_webhooks": [
    {
      "header_names": [
          "Header-Name",
          "Header-Name-2",
          "Header-Name-3"
      ],
      "url": "<webhook_url>",
      "webhook_id": "<webhook_id>"
    },
    {
      "header_names": [],
      "url": "<webhook_url>",
      "webhook_id": "<webhook_id>"
    }
  ],
  "result": "success",
  "webhooks_enabled": true
}
```
:::

:::::

</APIDetails>

#### Add a Generic Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.generic_add">

::: slot optional-parameters-notes

::: tip Webhook headers JSON structure:
The headers are specified as `"Name": "Value"`

```json
{
  "Header-Name-1": "Value",
  "Header-Name-2": "Value_2",
  "Header-Name-3": "Value_3"
}
```

:::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/generic/add \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d url=EXAMPLE_URL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/generic/add'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'url': 'EXAMPLE_URL'
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
  "webhook": "<url>"
}
```
:::

:::::

</APIDetails>

#### Remove a Generic Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.generic_remove">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/generic/remove \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d url=EXAMPLE_URL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/generic/remove'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'url': 'EXAMPLE_URL'
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

#### Test an Existing Generic Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.generic_test">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/generic/test \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d url=EXAMPLE_URL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/generic/test'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'url': 'EXAMPLE_URL'
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
  "webhook": "<url>"
}
```
:::

:::::

</APIDetails>

### MS Teams

Have an MS Teams account and want us to pipe notifications directly into your channels? Setting up your Console to do just that is as easy as supplying a [valid MS Teams URL](https://docs.microsoft.com/en-us/microsoftteams/office-365-custom-connectors).

#### Add an MS Teams Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.msteams_add">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/ms_teams/add \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d url=EXAMPLE_URL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/ms_teams/add'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'url': 'EXAMPLE_URL'
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
  "webhook": "<url>"
}
```
:::

:::::

</APIDetails>

#### Remove an MS Teams Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.msteams_remove">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/ms_teams/remove \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d url=EXAMPLE_URL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/ms_teams/remove'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'url': 'EXAMPLE_URL'
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

#### Test an Existing MS Teams Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.msteams_test">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/ms_teams/test \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d url=EXAMPLE_URL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/ms_teams/test'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'url': 'EXAMPLE_URL'
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
  "webhook": "<url>"
}
```
:::

:::::

</APIDetails>

### Slack

If your business uses Slack and wants notifications sent directly into a specific channel in your team, then this is the section for you. 

Within a few clicks (we currently don't expose the [Add](#add-a-slack-webhook) functionality via the API as the UI is pretty seamless) you'll have your Slack Webhook setup and ready to notify you on any new alerts.

#### Add a Slack Webhook

We currently don't expose the Slack add process via the API directly as it requires a multi-step process which includes Authenticating with Slack and granting permissions for the webhook to POST data to your channels.

A step-by-step guide to adding a Slack webhook via the Console UI can be found [here](https://help.canary.tools/hc/en-gb/articles/360002432278-How-do-I-configure-Slack-Webhook-notifications).

#### Remove an Existing Slack Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.slack_remove">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/slack/remove \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d team=EXAMPLE_TEAM \
  -d channel=EXAMPLE_CHANNEL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/slack/remove'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'team': 'EXAMPLE_TEAM',
  'channel': 'EXAMPLE_CHANNEL'
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

#### Test an Existing Slack Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.slack_test">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/slack/test \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d url=EXAMPLE_URL
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/slack/test'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'url': 'EXAMPLE_URL'
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
  "webhook": "<url>"
}
```
:::

:::::

</APIDetails>

## Google Cloud Pub/Sub

We totally understand the need to fit notifications into existing pipelines, so in addition
to email, SMS, webhooks, and using the API, we also have Pub/Sub.

If you'd like to have this enabled on your Console [drop us a mail](mailto:support@canary.tools) and we'll get you sorted!

#### Add a Subscriber

<APIDetails :endpoint="$page.frontmatter.endpoints.pubsub_new_subscription">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/pubsub/new_subscription \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d subscription_name=EXAMPLE_SUB_NAME
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/pubsub/new_subscription'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'subscription_name': 'EXAMPLE_SUB_NAME'
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

#### Remove a Subscriber

<APIDetails :endpoint="$page.frontmatter.endpoints.pubsub_remove_subscription">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/pubsub/remove_subscription \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d subscription_name=EXAMPLE_SUB_NAME
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/pubsub/remove_subscription'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'subscription_name': 'EXAMPLE_SUB_NAME'
}

r = requests.delete(url, data=payload)

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

#### Send a test message to Subscribers

<APIDetails :endpoint="$page.frontmatter.endpoints.pubsub_test">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/pubsub/test \
  -d auth_token=EXAMPLE_AUTH_TOKEN
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/pubsub/test'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
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