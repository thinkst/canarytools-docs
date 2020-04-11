---
endpoints:
  flock_email_get:
    name: List Notification Emails
    url: /api/v1/flock/settings/notifications/email
    method: GET
    description: Retrieve the list of notification emails for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the list of notification emails.
  flock_email_add:
    name: Add Notification Emails
    url: /api/v1/flock/settings/notifications/email/add
    method: POST
    description: Add a new email(s) to the notifications list.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: addresses
        required: true
        type: string
        description: A comma separated list of valid email addresses to add
    response: A JSON structure with result indicator.
  flock_email_disable:
    name: Disable Notification Emails
    url: /api/v1/flock/settings/notifications/email/disable
    method: POST
    description: Disable notification emails for a Flock.
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
  flock_email_enable:
    name: Enable Notification Emails
    url: /api/v1/flock/settings/notifications/email/enable
    method: POST
    description: Enable notification emails for a Flock.
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
  flock_email_enabled:
    name: Check if Notification Emails are Enabled
    url: /api/v1/flock/settings/notifications/email/is_enabled
    method: GET
    description: Check if notification emails are enabled for a Flock.
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
  flock_email_global:
    name: Check if Notification Emails are Global
    url: /api/v1/flock/settings/notifications/email/is_global
    method: GET
    description: Check if notification emails are set to Global for a Flock.
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
  flock_email_set:
    name: Set Notification Emails
    url: /api/v1/flock/settings/notifications/email/save
    method: POST
    description: Set the email notification list for a Flock
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: addresses
        required: true
        type: string
        description: A comma separated list of valid email addresses
    response: A JSON structure with result indicator.
  flock_email_use_global:
    name: Use Global for Notification Emails
    url: /api/v1/flock/settings/notifications/email/use_global
    method: POST
    description: Set the Flock's notification email state to Global.
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
  flock_sms_get:
    name: List Notification Numbers
    url: /api/v1/flock/settings/notifications/sms
    method: GET
    description: Retrieve the list of notification numbers for a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the list of notification numbers.
  flock_sms_add:
    name: Add Notification Numbers
    url: /api/v1/flock/settings/notifications/sms/add
    method: POST
    description: Add new cellphone numbers to the notifications list.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: addresses
        required: true
        type: string
        description: A comma separated list of valid cellphone to add
    response: A JSON structure with result indicator.
  flock_sms_disable:
    name: Disable SMS Notifications
    url: /api/v1/flock/settings/notifications/sms/disable
    method: POST
    description: Disable SMS notifications for a Flock.
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
  flock_sms_enable:
    name: Enable SMS Notifications
    url: /api/v1/flock/settings/notifications/sms/enable
    method: POST
    description: Enable SMS notifications for a Flock.
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
  flock_sms_enabled:
    name: Check if SMS Notifications are Enabled
    url: /api/v1/flock/settings/notifications/sms/is_enabled
    method: GET
    description: Check if SMS notifications are enabled for a Flock.
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
  flock_sms_global:
    name: Check if SMS Notifications are Global
    url: /api/v1/flock/settings/notifications/sms/is_global
    method: GET
    description: Check if SMS notifications are set to Global for a Flock.
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
  flock_sms_set:
    name: Set Notification Numbers
    url: /api/v1/flock/settings/notifications/sms/save
    method: POST
    description: Set the SMS notification list for a Flock
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: addresses
        required: true
        type: string
        description: A comma separated list of valid cellphone numbers
    response: A JSON structure with result indicator.
  flock_sms_use_global:
    name: Use Global for SMS Notifications
    url: /api/v1/flock/settings/notifications/sms/use_global
    method: POST
    description: Set the Flock's SMS notification state to Global.
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

# Notifications

Below are endpoints that allow you to configure your Email and SMS notification settings for a Flock. We do also have a section for [Webhooks](/flock-settings/webhooks.html) if you need to configure webhook settings.
 
<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Emails

Receive notifications in your email inbox. Simple, yet effective.

### Add Notification Emails

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_email_add"/>

### Check if Notification Emails are Enabled

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_email_enabled"/>

### Check if Notification Emails are Global

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_email_global"/>

### Disable Notification Emails

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_email_disable"/>

### Enable Notification Emails

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_email_enable"/>

### List Notification Emails

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_email_get"/>

### Set Notification Emails

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_email_set"/>

### Use Global for Notification Emails

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_email_use_global"/>

## SMS

Receive notifications directly to your cellphone. Simple, yet effective.

### Add Notification Numbers

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_sms_add"/>

### Check if SMS Notifications are Enabled

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_sms_enabled"/>

### Check if SMS Notifications are Global

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_sms_global"/>

### Disable SMS Notifications

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_sms_disable"/>

### Enable SMS Notifications

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_sms_enable"/>

### List Notification Numbers

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_sms_get"/>

### Set Notification Numbers

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_sms_set"/>

### Use Global for SMS Notifications

<APIDetails :endpoint="$page.frontmatter.endpoints.flock_sms_use_global"/>

