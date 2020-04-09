---
endpoints:
  create:
    name: Create Flock
    url: /api/v1/flock/create
    method: POST
    description: Create a new Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: name
        required: true
        type: string
        description: The name of the flock
      - name: managers
        required: false
        type: string
        description: A comma-separated list of emails who can manage the flock
      - name: watchers
        required: false
        type: string
        description: A comma-separated list of emails who can watch the flock
    response: A JSON structure with the created flock_id.
  delete:
    name: Delete Flock
    url: /api/v1/flock/delete
    method: POST
    description: Delete an existing Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: ID of the Flock to delete
    response: A JSON structure with result indicator.
  move_sensor:
    name: Move Sensor to Flock
    url: /api/v1/flock/move
    method: POST
    description: Move a Sensor to a Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: dest_flock_id
        required: true
        type: string
        description: flock_id of the Flock to move to
      - name: node_id
        required: true
        type: string
        description: ID of Bird or Canarytoken to move
      - name: clear_incidents
        required: false
        type: boolean
        description: If true, delete all incidents tied to the Sensor before moving it
    response: A JSON structure with result indicator.
  rename:
    name: Rename Flock
    url: /api/v1/flock/rename
    method: POST
    description: Rename an existing Flock.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: ID of the Flock to delete
      - name: name
        required: true
        type: string
        description: The new name for the Flock
    response: A JSON structure with result indicator.
  assign_managers:
    name: Assign Flock Managers
    url: /api/v1/users/flock/assign/managers
    method: POST
    description: Assign users to a Flock as managers.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: ID of the Flock to delete
      - name: emails
        required: true
        type: string
        description: A comma separated list of emails of the users to be added as managers
    response: A JSON structure with result indicator.
  assign_watchers:
    name: Assign Flock Watcher
    url: /api/v1/users/flock/assign/watchers
    method: POST
    description: Assign users to a Flock as watchers.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: ID of the Flock to delete
      - name: emails
        required: true
        type: string
        description: A comma separated list of emails of the users to be added as watchers
    response: A JSON structure with result indicator.
---

# Actions

[Flocks](/guide/terminology.html#flocks) allow you to organize Console entities into separate groups. This allows you to create separate Flocks for different teams or locations, splitting access and management between the Flocks.

The following endpoints allow you to perform actions against Flocks on your Consoles, including actions like [Creating](#create-flock) a new Flock, [Deleting](#delete-flock) a Flock, [Moving Sensors](#move-sensor-to-flock) to a Flock, and [Renaming](#rename-flock) a Flock.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Assign Flock Managers

<APIDetails :endpoint="$page.frontmatter.endpoints.assign_managers">

::::: slot description

[Managers](/guide/terminology.html#managers) of a Flock can perform all actions on a Flock, including changing settings, adding new users, and more.

Calling this endpoint will set the Managers of the specified Flock using the provided `managers` list.


::: warning
The supplied list will overwrite the existing Managers list, meaning it'll remove any existing Managers not specified.
:::

:::::

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/users/flock/assign/managers \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -d emails='EXAMPLE_EMAIL,EXAMPLE_EMAIL' 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/users/flock/assign/managers'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID',
  'emails': 'EXAMPLE_EMAIL,EXAMPLE_EMAIL'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Assign Flock Watchers

<APIDetails :endpoint="$page.frontmatter.endpoints.assign_watchers">

::::: slot description

[Watchers](/guide/terminology.html#watchers) of a Flock can only view Flock with the exception of being able to interact with Incidents.

Calling this endpoint will set the Watchers of the specified Flock using the provided `watchers` list.


::: warning
The supplied list will overwrite the existing Watchers list, meaning it'll remove any existing Watchers not specified.
:::

:::::

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/users/flock/assign/watchers \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -d emails='EXAMPLE_EMAIL,EXAMPLE_EMAIL' 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/users/flock/assign/watchers'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID',
  'emails': 'EXAMPLE_EMAIL,EXAMPLE_EMAIL'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Create Flock

<APIDetails :endpoint="$page.frontmatter.endpoints.create">

::::: slot description

A [Flock](/guide/terminology.html#flocks) allows you to group [Sensors](/guide/terminology.html#sensors) and users. It allows you to configure settings that are specific only to the Flock, including notification channels and recipients.

Flocks are defined by a unique `flock_id` which is returned in the response when calling this endpoint.

:::::

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/create \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d name='EXAMPLE_FLOCK_NAME' 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/create'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'name': 'EXAMPLE_FLOCK_NAME'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "flock_id": "<flock_id>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Delete Flock

<APIDetails :endpoint="$page.frontmatter.endpoints.delete">

::::: slot description

Deleting a Flock will remove it from your Console. You can only delete an empty FLock, meaning you'll need to move (or remove) any [Sensors](/guide/terminology.html#sensors) from the Flock before deleting it.

::: warning 
You cannot delete the [Default Flock](/guide/terminology.html#default-flock), but you can [Rename](#rename-flock) it if you want to.
:::::

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/delete \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/delete'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "result": "success"
}
```
:::

:::::


</APIDetails>

## Move Sensor to Flock

<APIDetails :endpoint="$page.frontmatter.endpoints.move_sensor">

::::: slot description

You'll need to delete all incidents before moving a [Sensor](/guide/terminology.html#sensors) between Flocks (this ensures that sensitive data isn't spilled across Flocks). If there are still incidents tied to the Sensor, you can specify `clear_incidents=true` to clear all of those incidents.

:::::

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/move \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d dest_flock_id=EXAMPLE_DESTINATION_FLOCK_ID \
  -d node_id=EXAMPLE_NODE_ID
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/move'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'dest_flock_id': 'EXAMPLE_DESTINATION_FLOCK_ID',
  'node_id': 'EXAMPLE_NODE_ID'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "flock_id": "<flock_id>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Rename Flock

<APIDetails :endpoint="$page.frontmatter.endpoints.rename">

::::: slot example


:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/flock/rename \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d flock_id=EXAMPLE_FLOCK_ID \
  -d name='EXAMPLE_NAME'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/flock/rename'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'flock_id': 'EXAMPLE_FLOCK_ID',
  'name': 'EXAMPLE_NAME'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "flock_id": "<flock_id>",
  "result": "success"
}
```
:::

:::::

</APIDetails>