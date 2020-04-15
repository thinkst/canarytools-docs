---
endpoints:
  info:
    name: Fetch Console Settings
    url: /api/v1/settings
    method: GET
    description: Returns all global settings for a Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with all the global settings.
---

# Overview
 
Console Settings endpoints will configure globally defined settings for your Console. 

::: tip 

[Flocks](/guide/terminology.html#flocks) will, by default, inherit these settings, but you
can individually configure a Flock's settings using the [Flock Settings](/flocks-settings/overview.html) endpoints.

:::
  
<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

You can inspect all global settings using the the [Fetch Console Settings](#fetch-console-settings) endpoint.

This will include global configuration for your [API](/console-settings/api.html), [Canarytokens](/console-settings/canarytokens.html), [Ignore Lists](/console-settings/ignore-lists.html),
[Notification Channels](/console-settings/notification-channels.html), and [Notification Settings](/console-settings/notification-settings.html).

:::::

</APIEndpoints>

## Fetch Console Settings

<APIDetails :endpoint="$page.frontmatter.endpoints.info">
</APIDetails>


