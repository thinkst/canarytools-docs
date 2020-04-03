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
        description: Number of audit logs returned in each page of results (defaults to 100).
                     Cannot be used with a cursor.
      - name: cursor
        required: false
        type: string
        description: The cursor string retrieved from the cursor element returned along with a page
                     while doing pagination.
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

These are a collection of endpoints that allow you interact with the Audit Trail. These are audit logs that are generated whenever an action is performed on your Console.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Fetch Audit Trail Logs

<APIDetails :endpoint="$page.frontmatter.endpoints.fetch"/>

#### Example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/audit_trail/fetch \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d limit=5
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/audit_trail/features'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
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
      "id": 72,
      "message": "User <user_name> logged in",
      "timestamp": "2020-04-03 09:53:59 UTC+0000",
      "user": "<user_name>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "192.168.1.2"
    }
  ],
  "cursor": {
    "next": "MDo3MjoxOjM6Mjo3Mg==",
    "prev": null
  },
  "page_count": 72,
  "page_number": 1,
  "result": "success"
}
```
:::

## Purge Audit Trail Logs

::: danger
Purging logs will permanently remove them and they will not be recoverable.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.purge"/>

## Download Audit Trail Logs

<APIDetails :endpoint="$page.frontmatter.endpoints.download"/>