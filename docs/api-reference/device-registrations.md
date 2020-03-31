---
endpoints:
  pending_commissions:
    name: Pending Device Commissions
    url: /api/v1/devices/commission/pending
    method: GET
    description: Fetch a list of devices waiting to be registered to the Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON Structure of devices pending commissions.
  cancel_commission:
    name: Cancel Device Commission
    url: /api/v1/device/cancel_commission
    method: POST
    description: Cancel a device commission.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with result indicator.
  confirm_commission:
    name: Confirm Device Commission
    url: /api/v1/device/commission
    method: POST
    description: Confirm a device commission.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: flock_id
        required: false
        type: string
        description: ID of the flock to assign the device to (defaults to `flock:default`).
    response: JSON structure with result indicator.
  decommission_device:
    name: Decommission Device
    url: /api/v1/device/decommission
    method: POST
    description: Decommission a device.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: skip_poweroff
        required: false
        type: boolean
        description: In 2.1.3 Canaries or newer, requesting a decommission
                will first attempt to poweroff the Canary if it's online. Pass in the value
                'true' to skip the poweroff step and immediately decommission the bird (defaults to `false`).
    response: JSON structure with result indicator.
---

# Device Registrations

These are a collection of endpoints that allow you to control registration aspects of devices that are (or are trying to be) registered with your Console.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Pending Device Commissions

<APIDetails :endpoint="$page.frontmatter.endpoints.pending_commissions"/>

## Cancel Device Commission

<APIDetails :endpoint="$page.frontmatter.endpoints.cancel_commission"/>

## Confirm Device Commission

<APIDetails :endpoint="$page.frontmatter.endpoints.confirm_commission"/>

## Decommission Device

::: warning
Decommissioning a device will completely remove the device from your Console. This means you'll need to re-register the device with your Console if you want it back.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.decommission_device"/>