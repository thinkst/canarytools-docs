---
endpoints:
  ignore_list_info:
    name: Fetch Ignore List Info
    url: /api/v1/flock/settings/whitelisting/info
    method: GET
    description: Fetch the Ignore List info for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the ignore list settings info.
  notifications_info:
    name: Fetch Notifications Info
    url: /api/v1/flock/settings/notifications/info
    method: GET
    description: Fetch the notification settings info for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the notification settings info.
  webhook_info:
    name: Fetch Webhook Info
    url: /api/v1/flock/settings/webhooks/info
    method: GET
    description: Fetch the webhook settings info for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the webhook settings info.
---

# Flock Settings Info

You an easily query a Flock's individual settings config by calling the below endpoints. For a Flock's full settings, you can call the [Flock Settings](/flocks/queries.html#flock-settings) endpoint.

## Fetch Ignore List Info

<APIDetails :endpoint="$page.frontmatter.endpoints.ignore_list_info">

::::: slot description
Fetch all ignore list info for a Flock. This includes the [Default Ignore List](/flocks-settings/default-ignore-list.html), [Hostname Ignore List](/flocks-settings/hostname-ignore-list.html), and [Source Port Ignore List](/flocks-settings/source-port-ignore-list.html).
:::::

</APIDetails>

## Fetch Notifications Info

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_info">

::::: slot description
Fetch all notification settings info for a Flock. This includes the [SMS](/flocks-settings/notifications.html#sms) and [Email](/flocks-settings/notifications.html#email) notifications settings.
:::::

</APIDetails>

## Fetch Webhook Info

<APIDetails :endpoint="$page.frontmatter.endpoints.webhook_info">

::::: slot description
Fetch all webhook settings info for a Flock. This includes the [Slack](/flocks-settings/webhooks.html#slack), [MS Teams](/flocks-settings/webhooks.html#ms-teams), and [Generic](/flocks-settings/webhooks.html#generic) settings.
:::::

</APIDetails>