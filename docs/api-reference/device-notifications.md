---
endpoints:
  notifications_disconnect_disable:
    name: Disable Device Disconnect Notifications
    url: /api/v1/device/notifications/disconnects/disable
    method: POST
    description: Disable a device's disconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and device data.
  notifications_disconnect_enable:
    name: Enable Device Disconnect Notifications
    url: /api/v1/device/notifications/disconnects/enable
    method: POST
    description: Enable a device's disconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and device data.
  notifications_incidents_disable:
    name: Disable Device Incident Notifications
    url: /api/v1/device/notifications/incidents/disable
    method: POST
    description: Disable a device's incident notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and device data.
  notifications_incidents_enable:
    name: Enable Device Incident Notifications
    url: /api/v1/device/notifications/incidents/enable
    method: POST
    description: Enable a device's incident notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and device data.
  notifications_reconnects_disable:
    name: Disable Device Reconnect Notifications
    url: /api/v1/device/notifications/reconnects/disable
    method: POST
    description: Disable a device's reconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and device data.
  notifications_reconnects_enable:
    name: Enable Device Reconnect Notifications
    url: /api/v1/device/notifications/reconnects/enable
    method: POST
    description: Enable a device's reconnect notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator and device data.
---

# Device Notifications

These are a collection of endpoints that allow you to configure a device's notification settings.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Disable Device Disconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_disconnect_disable"/>

## Enable Device Disconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_disconnect_enable"/>

## Disable Device Incident Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_incidents_disable"/>

## Enable Device Incident Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_incidents_enable"/>

## Disable Device Reconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_reconnects_disable"/>

## Enable Device Reconnect Notifications 

<APIDetails :endpoint="$page.frontmatter.endpoints.notifications_reconnects_enable"/>