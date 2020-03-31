---
endpoints:
  notifications_disconnect_disable:
    name: Disable Bird Disconnect Notifications
    url: /api/v1/device/notifications/disconnects/disable
    method: POST
    description: Disable a Bird's disconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
  notifications_disconnect_enable:
    name: Enable Bird Disconnect Notifications
    url: /api/v1/device/notifications/disconnects/enable
    method: POST
    description: Enable a Bird's disconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
  notifications_incidents_disable:
    name: Disable Bird Incident Notifications
    url: /api/v1/device/notifications/incidents/disable
    method: POST
    description: Disable a Bird's incident notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
  notifications_incidents_enable:
    name: Enable Bird Incident Notifications
    url: /api/v1/device/notifications/incidents/enable
    method: POST
    description: Enable a Bird's incident notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
  notifications_reconnects_disable:
    name: Disable Bird Reconnect Notifications
    url: /api/v1/device/notifications/reconnects/disable
    method: POST
    description: Disable a Bird's reconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
  notifications_reconnects_enable:
    name: Enable Bird Reconnect Notifications
    url: /api/v1/device/notifications/reconnects/enable
    method: POST
    description: Enable a Bird's reconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and Bird data.
---

# Bird Notifications

These are a collection of endpoints that allow you to configure a Bird's notification settings.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Disable Bird Disconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_disconnect_disable"/>

## Enable Bird Disconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_disconnect_enable"/>

## Disable Bird Incident Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_incidents_disable"/>

## Enable Bird Incident Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_incidents_enable"/>

## Disable Bird Reconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_reconnects_disable"/>

## Enable Bird Reconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_reconnects_enable"/>