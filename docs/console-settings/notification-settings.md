---
endpoints:
  console_settings_change_disable:
    name: Disable Console Settings Change Alerts
    url: /api/v1/settings/console_settings_change/disable
    method: POST
    description: Disable Console settings change alerts.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  console_settings_change_enable:
    name: Enable Console Settings Change Alerts
    url: /api/v1/settings/console_settings_change/enable
    method: POST
    description: Enable Console settings change alerts.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  device_settings_change_disable:
    name: Disable Device Settings Change Alerts
    url: /api/v1/settings/device_settings_change/disable
    method: POST
    description: Disable Device settings change alerts.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  device_settings_change_enable:
    name: Enable Device Settings Change Alerts
    url: /api/v1/settings/device_settings_change/enable
    method: POST
    description: Enable Device settings change alerts.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  masking_disable:
    name: Disable Data Masking
    url: /api/v1/settings/notifications/masking/disable
    method: POST
    description: Disable masking of details in alert notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  masking_enable:
    name: Enable Data Masking
    url: /api/v1/settings/notifications/masking/enable
    method: POST
    description: Enable masking of details in alert notifications.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  summary_email_disable:
    name: Disable Summary Emails
    url: /api/v1/settings/notifications/summary_email/disable
    method: POST
    description: Disable weekly summary emails for your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  summary_email_enable:
    name: Enable Summary Emails
    url: /api/v1/settings/notifications/summary_email/enable
    method: POST
    description: Enable weekly summary emails for your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A JSON structure with result indicator.
  summary_email_save:
    name: Set Summary Emails
    url: /api/v1/settings/notifications/summary_email/save
    method: POST
    description: Set the list of email addresses that will receive the weekly summary emails.
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
        description: If set to true, clears the list of cellphone numbers
    response: A JSON structure with result indicator.
---

# Notification Settings
 
Setting up ways for you to receive your notifications is explained in [Notification Channels](/console-settings/notification-channels.html), but for configuring those notifications, you can look at the following endpoints.

From [Data Masking](#masking) and [Summary Emails](#summary-emails), to [Alerting on Console Changes](#change-alerts) and [Alerting on Device Changes](#change-alerts), you'll be able to manage them all through these endpoints.


<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Change Alerts

Unexpected changes to Bird or Console settings can be a sign that someone is playing around where they shouldn't be. We allow for you to enable alerting in these cases, letting you know as soon as someone makes a change.

### Disable Console Settings Change Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.console_settings_change_disable"/>

### Enable Console Settings Change Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.console_settings_change_enable"/>

### Disable Device Settings Change Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.device_settings_change_disable"/>

### Enable Device Settings Change Alerts

<APIDetails :endpoint="$page.frontmatter.endpoints.device_settings_change_enable"/>

## Data Masking

When we create alerts, they will include sensitive information such as the credentials used. Now, we think that having this information is good as you'll want to change those creds in any case, but we do give you the ability to mask this information in the alert details.

### Disable Data Masking

<APIDetails :endpoint="$page.frontmatter.endpoints.masking_disable"/>

### Enable Data Masking

<APIDetails :endpoint="$page.frontmatter.endpoints.masking_enable"/>

## Summary Emails

If you want, we can send you a weekly summary of your Console activity. Along with that, we'll include any Canary related news that we deem useful (this usually includes a couple worthy news items).

Simply [enable](#enable-summary-emails) and [set a list of email addresses](#set-summary-emails) and lookout for the weekly mail on Mondays!

### Disable Summary Emails

<APIDetails :endpoint="$page.frontmatter.endpoints.summary_email_disable"/>

### Enable Summary Emails

<APIDetails :endpoint="$page.frontmatter.endpoints.summary_email_enable"/>

### Set Summary Emails

<APIDetails :endpoint="$page.frontmatter.endpoints.summary_email_save"/>
