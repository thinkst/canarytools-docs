---
endpoints:
  flock_settings_change_disable:
    name: Disable Flock Settings Change Alerts
    url: /api/v1/flock/settings/change_control/flock_settings/disable
    method: POST
    description: Disable Flock settings change alerts.
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
  flock_settings_change_enable:
    name: Enable Flock Settings Change Alerts
    url: /api/v1/flock/settings/change_control/flock_settings/enable
    method: POST
    description: Enable Flock settings change alerts.
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
  flock_settings_change_is_enabled:
    name: Are Flock Settings Change Alerts Enabled
    url: /api/v1/flock/settings/change_control/flock_settings/is_enabled
    method: GET
    description: Check if settings change alerts are enabled for a Flock.
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
  flock_settings_change_is_global:
    name: Are Flock Settings Change Alerts Global
    url: /api/v1/flock/settings/change_control/flock_settings/is_global
    method: GET
    description: Check if Flock settings change alerts are set to Global.
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
  flock_settings_change_use_global:
    name: Set Flock Settings Change Alerts to Global
    url: /api/v1/flock/settings/change_control/flock_settings/use_global
    method: POST
    description: Set a Flock's settings change alerts to Global.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id to chang
    response: A JSON structure with result indicator.
  device_settings_change_disable:
    name: Disable Device Settings Change Alerts
    url: /api/v1/flock/settings/change_control/device_settings/disable
    method: POST
    description: Disable Device settings change alerts for a Flock.
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
  device_settings_change_enable:
    name: Enable Device Settings Change Alerts
    url: /api/v1/flock/settings/change_control/device_settings/enable
    method: POST
    description: Enable Device settings change alerts for a Flock.
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
  device_settings_change_is_enabled:
    name: Are Device Settings Change Alerts Enabled
    url: /api/v1/flock/settings/change_control/device_settings/is_enabled
    method: GET
    description: Check if a Flock's Device settings change alerts are enabled.
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
  device_settings_change_is_global:
    name: Are Device Settings Change Alerts Global
    url: /api/v1/flock/settings/change_control/device_settings/is_global
    method: GET
    description: Check if a Flock's Device settings change alerts are set to Global.
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
  device_settings_change_use_global:
    name: Set Device Settings Change Alerts to Global
    url: /api/v1/flock/settings/change_control/device_settings/use_global
    method: POST
    description: Set a Flock's Device settings change alerts to Global.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id to chang
    response: A JSON structure with result indicator.
  change_control_info:
    name: View Flock Change Control Settings
    url: /api/v1/flock/settings/change_control/info
    method: GET
    description: View a Flock's Change Control Settings
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id to chang
    response: A JSON structure with the Flock's Change Control details.
---

# Notification Settings
 
<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Change Alerts

Unexpected changes to Bird or Flock settings can be a sign that someone is playing around where they shouldn't be. We allow for you to enable alerting in these cases, letting you know as soon as someone makes a change.

### Disable Flock Settings Change Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_settings_change_disable"/>

### Enable Flock Settings Change Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_settings_change_enable"/>

### Are Flock Settings Change Alerts Enabled

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_settings_change_is_enabled"/>

### Are Flock Settings Change Alerts Global

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_settings_change_is_global"/>

### Set Flock Settings Change Alerts to Global

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_settings_change_use_global"/>

### Disable Device Settings Change Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.device_settings_change_disable"/>

### Enable Device Settings Change Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.device_settings_change_enable"/>

### Are Device Settings Change Alerts Enabled

<APIDetails :endpoint="$page.frontmatter.endpoints.device_settings_change_is_enabled"/>

### Are Device Settings Change Alerts Global

<APIDetails :endpoint="$page.frontmatter.endpoints.device_settings_change_is_global"/>

### Set Device Settings Change Alerts to Global

<APIDetails :endpoint="$page.frontmatter.endpoints.device_settings_change_use_global"/>

### View Flock Change Control Settings

<APIDetails :endpoint="$page.frontmatter.endpoints.change_control_info"/>

