# Getting Started

In this section we'll walk through the basics of connecting to your Console using the API.

Before being able to use the examples, you're going to need to find out your `DOMAIN` and `AUTH_TOKEN`.

## API Details

`DOMAIN` is the unique hash identifying your Console. In our examples, we'll be using `EXAMPLE`.

`AUTH_TOKEN` is the API key that you'll need to use in order to make calls to your API. We'll use `EXAMPLE_AUTH_TOKEN` throughout the examples.

Both of these can be obtained by navigating to `/settings` on your Console, and looking at the API section:

![Get API Details](../images/get-api-details.png)

## Hello Console

Let's begin by ensuring that we can successfully contact our Console. We can do this by calling the [Ping](/console/testing.html#ping) endpoint:

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/ping \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/ping'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::

:::  api-response 
``` json
{
  "result": "success"
}
```
:::

If you see the `success` result you're good to go!

If you instead see an `error` result, you can examine the `message` field to determine what the cause might be. For example, if you used an invalid `auth_token` you would see a response similar to:

::: api-response
```json
{
  "message": "Invalid auth_token",
  "result": "error"
}
```
:::

## Hello Birds

Now that we know we're able to connect to our Console, let's inspect our Birds.

By calling the [All Birds](/bird-management/queries.html#all-birds) endpoint, we'll get a list of our currently paired Birds.

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/devices/all \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -G
```

:::


::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/devices/all'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "devices": [ ... ],
  "feed": "All Devices",
  "result": "success",
  "updated": "Sat, 01 Jan 2000 00:00:00 GMT",
  "updated_std": "1999-12-31 22:00:00 UTC+0000",
  "updated_timestamp": 946677600
}
```
:::