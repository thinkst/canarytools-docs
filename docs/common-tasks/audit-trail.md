# Viewing Audit Trail Logs

In this example we'll show you how to use a few API's to navigate your Console's Audit Trail.

<div class="section-container">
  <div class="details-content">

We'll start by using the [Audit Trail](/console/audit-trail.html#fetch) API to obtain list of Console actions.

To make handling a little easier, we'll set the optional `limit` parameter to 5.

While we're at it, we'll also use the `action_filter` parameter to refine the results to only show user logins. (This is useful to determine who is logging into your console and when)

  </div>
  <div class="example-content">

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/audit_trail/fetch \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d limit=5 \
  -d action_filter=user_login \
  -G
```
:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/audit_trail/fetch'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'limit':5,
  'action_filter': 'user_login'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::
:::  api-response 
``` json
{
  "audit_trail": [
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 513,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-17 11:58:10 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 512,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-17 10:44:20 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-GB,en-US;q=0.9,en;q=0.8",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 509,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-17 09:45:09 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 473,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-16 20:59:50 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 471,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-16 20:58:51 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    }
  ],
  "cursor": {
    "next": "MDo0NzE6NTozOjI6MTAz",
    "prev": null
  },
  "page_count": 103,
  "page_number": 1,
  "result": "success"
}
```
:::
  </div>
</div>

<div class="section-container">
  <div class="details-content">

We can see from the response that we are looking at page 1 of the results, out of a total of 103 pages.

To view the next page of results, we'll extract the `next` cursor provided in the response, 
and use it with the optional `cursor` parameter in the API.

In this case, the cursor is `MDo0NzE6NTozOjI6MTAz`.

  </div>
  <div class="example-content">

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/audit_trail/fetch \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d action_filter=user_login \
  -d cursor=MDo0NzE6NTozOjI6MTAz \
  -G
```
:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/audit_trail/fetch'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'action_filter': 'user_login',
  'cursor': 'MDo0NzE6NTozOjI6MTAz'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::
:::  api-response 
``` json
{
  "audit_trail": [
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 400,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-16 13:01:58 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-GB,en-US;q=0.9,en;q=0.8",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 386,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-16 12:48:05 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 374,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-16 10:28:40 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-GB,en-US;q=0.9,en;q=0.8",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 348,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-16 10:18:09 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 323,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-16 08:02:23 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    }
  ],
  "cursor": {
    "next": "MDozMjM6NTozOjM6MTAz",
    "prev": "MTo0MDA6NTozOjE6MTAz"
  },
  "page_count": 103,
  "page_number": 2,
  "result": "success"
}
```
:::
  </div>
</div>

<div class="section-container">
  <div class="details-content">

Finally, we'll use the `previous` cursor to navigate back to the first page of results.

In this case, the cursor is `MTo0MDA6NTozOjE6MTAz`.

  </div>
  <div class="example-content">

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/audit_trail/fetch \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d action_filter=user_login \
  -d cursor=MTo0MDA6NTozOjE6MTAz \
  -G
```
:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/audit_trail/fetch'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'action_filter': 'user_login',
  'cursor': 'MTo0MDA6NTozOjE6MTAz'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::
:::  api-response 
``` json
{
  "audit_trail": [
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 513,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-17 11:58:10 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 512,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-17 10:44:20 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-GB,en-US;q=0.9,en;q=0.8",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 509,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-17 09:45:09 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 473,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-16 20:59:50 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    },
    {
      "action_type": "user_login",
      "additional_information": null,
      "flock_id": null,
      "id": 471,
      "message": "User <user_email> logged in",
      "timestamp": "2020-04-16 20:58:51 UTC+0000",
      "user": "<user_email>",
      "user_browser_agent": "<browser_agent_string>",
      "user_browser_language": "en-US,en;q=0.9",
      "user_ip": "<user_ip>"
    }
  ],
  "cursor": {
    "next": "MDo0NzE6NTozOjI6MTAz",
    "prev": null
  },
  "page_count": 103,
  "page_number": 1,
  "result": "success"
}
```
:::
  </div>
</div>