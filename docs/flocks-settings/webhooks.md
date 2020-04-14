---
endpoints:
  webhooks_disable:
    name: Disable Flock Webhooks
    url: /api/v1/flock/settings/webhooks/disable
    method: POST
    description: Disable a Flock's webhooks.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with result indicator.
  webhooks_enable:
    name: Enable Flock Webhooks
    url: /api/v1/flock/settings/webhooks/enable
    method: POST
    description: Enable a Flock's webhooks.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with result indicator.
  generic_get:
    name: List Generic Webhooks
    url: /api/v1/flock/settings/webhooks/generic
    method: GET
    description: Retrieve generic webhooks for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the list of generic webhooks.
  generic_add:
    name: Add Generic Webhook
    url: /api/v1/flock/settings/webhooks/generic/add
    method: POST
    description: Add a generic webhook to a Flock
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: url
        required: true
        type: string
        description: A valid URL that can accept POSTed data
    response: A JSON structure with the result indicator.
  generic_remove:
    name: Remove Generic Webhook
    url: /api/v1/flock/settings/webhooks/generic/remove
    method: POST
    description: Remove a generic webhook from a Flock
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: url
        required: true
        type: string
        description: A valid URL that can accept POSTed data
    response: A JSON structure with the result indicator.
  generic_test:
    name: Test Generic Webhook
    url: /api/v1/flock/settings/webhooks/generic/test
    method: POST
    description: Test a generic webhook for a Flock
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: url
        required: true
        type: string
        description: A valid URL that can accept POSTed data
    response: A JSON structure with the result indicator.
  webhooks_enabled:
    name: Check if Webhooks are Enabled
    url: /api/v1/flock/settings/webhooks/is_enabled
    method: GET
    description: Check if webhooks are enabled for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the enabled state.
  webhooks_global:
    name: Check if Webhooks are set to Global
    url: /api/v1/flock/settings/webhooks/is_global
    method: GET
    description: Check if webhooks are set to Global for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the Global state.
  msteams_get:
    name: List MS Teams Webhooks
    url: /api/v1/flock/settings/webhooks/ms_teams
    method: GET
    description: Retrieve MS Teams webhooks for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the list of MS Teams webhooks.
  msteams_add:
    name: Add MS Teams Webhook
    url: /api/v1/flock/settings/webhooks/ms_teams/add
    method: POST
    description: Add an MS Teams webhook to a Flock
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: url
        required: true
        type: string
        description: A valid MS Teams webhook 
    response: A JSON structure with the result indicator.
  msteams_remove:
    name: Remove MS Teams Webhook
    url: /api/v1/flock/settings/webhooks/ms_teams/remove
    method: POST
    description: Remove an MS Teams webhook from a Flock
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: url
        required: true
        type: string
        description: A valid MS Teams webhook 
    response: A JSON structure with the result indicator.
  msteams_test:
    name: Test MS Teams Webhook
    url: /api/v1/flock/settings/webhooks/ms_teams/test
    method: POST
    description: Test an MS Teams webhook for a Flock
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: url
        required: true
        type: string
        description: A valid MS Teams webhook 
    response: A JSON structure with the result indicator.
  slack_get:
    name: List Slack Webhooks
    url: /api/v1/flock/settings/webhooks/slack
    method: GET
    description: Retrieve Slack webhooks for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the list of Slack webhooks.
  slack_remove:
    name: Remove Slack Webhook
    url: /api/v1/flock/settings/webhooks/slack/remove
    method: POST
    description: Remove a Slack webhook from a Flock
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: team
        required: true
        type: string
        description: Slack team tied to the webhook
      - name: channel
        required: true
        type: string
        description: Slack channel tied to the webhook
    response: A JSON structure with the result indicator.
  slack_test:
    name: Test Slack Webhook
    url: /api/v1/flock/settings/webhooks/slack/test
    method: POST
    description: Test an Slack webhook for a Flock
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: url
        required: true
        type: string
        description: A valid Slack webhook 
    response: A JSON structure with the result indicator.
  webhooks_use_global:
    name: Use Global for Flock Wehooks
    url: /api/v1/flock/settings/webhooks/use_global
    method: POST
    description: Set the Flock's webhook state to Global.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with result indicator.
---

# Webhooks
 
<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

You can send Flock notifications to different services using Webhooks. These include [Slack](#slack), [MS Teams](#ms-teams), and simply a [Generic](#generic) endpoint that accepts POSTed data. 

:::::

</APIEndpoints>

## Check if Webhooks are Enabled

<APIDetails :endpoint="$page.frontmatter.endpoints.webhooks_enabled"/>

## Check if Webhooks are Global

<APIDetails :endpoint="$page.frontmatter.endpoints.webhooks_global"/>

## Disable Flock Webhooks

<APIDetails :endpoint="$page.frontmatter.endpoints.webhooks_disable"/>

## Enable Flock Wehooks

<APIDetails :endpoint="$page.frontmatter.endpoints.webhooks_enable"/>

## Use Global for Flock Wehooks

<APIDetails :endpoint="$page.frontmatter.endpoints.webhooks_use_global"/>

## Generic Webhooks

If you have an endpoint that accepts JSON data, we can setup a webhook to POST all notifications. Simple, but useful.

### Add Generic Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.generic_add"/>

### List Generic Webhooks

<APIDetails :endpoint="$page.frontmatter.endpoints.generic_get"/>

### Remove Generic Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.generic_remove"/>

### Test Generic Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.generic_test"/>

## MS Teams Webhooks

Have an MS Teams account and want us to pipe Flock notifications directly into your channels? Setting up your Flock to do just that is as easy as supplying a [valid MS Teams URL](https://docs.microsoft.com/en-us/microsoftteams/office-365-custom-connectors).

### Add MS Teams Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.msteams_add"/>

### List MS Teams Webhooks

<APIDetails :endpoint="$page.frontmatter.endpoints.msteams_get"/>

### Remove MS Teams Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.msteams_remove"/>

### Test MS Teams Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.msteams_test"/>

## Slack Webhooks

Have an MS Teams account and want us to pipe Flock notifications directly into your channels? Setting up your Flock to do just that is as easy as supplying a [valid MS Teams URL](https://docs.microsoft.com/en-us/microsoftteams/office-365-custom-connectors).

### Add Slack Webhook

We currently don't expose the Slack add process via the API directly as it requires a multi-step process which includes Authenticating with Slack and granting permissions for the webhook to POST data to your channels.

A step-by-step guide to adding a Slack webhook via the Console UI can be found [here](https://help.canary.tools/help/edit-delete-how-do-i-webhook-notifications).

### List Slack Webhooks

<APIDetails :endpoint="$page.frontmatter.endpoints.slack_get"/>

### Remove Slack Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.slack_remove"/>

### Test Slack Webhook

<APIDetails :endpoint="$page.frontmatter.endpoints.slack_test"/>
