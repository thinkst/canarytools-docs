---
endpoints:
  fetch:
    name: Fetch Audit Trail logs
    url: /api/v1/audit_trail/fetch
    method: GET
    description: Returns a list of audit trail logs.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: tz
        required: false
        type: string
        description: Timezone for standardised timestamps (fields that end in "_std").
                  Use the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">pytz names</a> to specify the timezone
      - name: limit
        required: false
        type: int
        default: 100
        description: Number of audit logs returned in each page of results.
                     Cannot be used with a cursor.
      - name: cursor
        required: false
        type: string
        description: The cursor string retrieved from the cursor element returned along with a page
                     while doing pagination.
      - name: action_filter
        required: false
        type: string
        description: Only return logs from this action type (example values are `user_login`,
                    `device_push_settings`, `user_assign_to_flock`, `flock_move`)
      - name: search_term
        required: false
        type: string
        description: Only return logs that have a field matching this query term. '%20' should be used in place of any spaces between words.

      - name: start_date
        required: false
        type: string 
        description: Only return logs that were created after the given date. This should be in the format "yyyy-mm-dd".

      - name: end_date
        required: false
        type: string
        description: Only return logs that were created before the given date. This should be in the format "yyyy-mm-dd".
    response: JSON structure with list of logs and the previous and next cursor.
  purge:
    name: Purge Audit Trail Logs
    url: /api/v1/audit_trail/purge
    method: POST
    description: Deletes audit_trail logs older than (and including) a provided id.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: id
        required: true
        type: int
        description: Delete logs before this point (including this point)
    response: A JSON message with a result indicator and message.
  download:
    name: Download Audit Trail Logs
    url: /api/v1/audit_trail/download/json
    method: GET
    description: Downloads a zipped json file of audit trail entries.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: A `canary_audit_trail.json.zip` file of type `application/x-zip-compressed`.
---

# Audit Trail

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to interact with the Audit Trail. These are audit logs that are generated whenever an action is performed on your Console.

:::::

</APIEndpoints>

## Fetch Audit Trail Logs

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/audit_trail/fetch \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d limit=5 \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/audit_trail/fetch'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'limit':5
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "audit_trail": [
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 73,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-03 12:56:42 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 72,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-03 09:53:59 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 71,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-02 13:40:05 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "device_schedule_reboot",
      "additional_information": null,
      "flock_id": "flock:default",
      "id": 70,
      "message": "User 'API Token' scheduled the device <device_id> to be rebooted",
      "timestamp": "2020-04-02 13:14:49 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "device_schedule_reboot",
      "additional_information": null,
      "flock_id": "flock:default",
      "id": 69,
      "message": "User 'API Token' scheduled the device <device_id> to be rebooted",
      "timestamp": "2020-04-02 13:11:27 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "",
      "user_ip": "<user_ip>"
    }
  ],
  "cursor": {
    "next": "MDo2OTo1OjM6MjoxNQ==",
    "prev": null
  },
  "page_count": 15,
  "page_number": 1,
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Purge Audit Trail Logs

::: danger
Purging logs will permanently remove them and they will not be recoverable.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.purge">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/audit_trail/purge \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d id=72 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/audit_trail/purge'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'id':72
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "72 logs purged successfully",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Download Audit Trail Logs

<APIDetails :endpoint="$page.frontmatter.endpoints.download">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/audit_trail/download/json \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/audit_trail/download/json'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::

The output of this response would be a downloaded file.

:::::

</APIDetails>
