---
endpoints:
    - name: All Devices
      url: /api/v1/devices/all
      method: GET
      description: Retrieve a list of all connected devices
      params:
        - name: auth_token
          required: true
          type: string
          description: A valid auth token
        - name: tz
          required: false
          type: string
          description: Timezone for standardised timestamps (fields that end in "_std").
                       Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a>
                       to specify the timezone
    - name: Live Devices
      url: /api/v1/devices/live
      method: GET
      description: Retrieve all live devices.
      params:
        - name: auth_token
          required: true
          type: string
          description: A valid auth token
        - name: tz
          required: false
          type: string
          description: Timezone for standardised timestamps (fields that end in "_std").
                       Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a>
                       to specify the timezone
    - name: Dead Devices
      url: /api/v1/devices/dead
      method: GET
      description: Retrieve all connected but offline devices.
      params:
        - name: auth_token
          required: true
          type: string
          description: A valid auth token
        - name: tz
          required: false
          type: string
          description: Timezone for standardised timestamps (fields that end in "_std").
                       Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a>
                       to specify the timezone
---

# Devices

These are a collection of endpoints that allow you to interact with devices that are paired to your Console.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## All Devices

<APIDetails :endpoint="$page.frontmatter.endpoints[0]"/>

## Live Devices

<APIDetails :endpoint="$page.frontmatter.endpoints[1]"/>

## Dead Devices

<APIDetails :endpoint="$page.frontmatter.endpoints[2]"/>
