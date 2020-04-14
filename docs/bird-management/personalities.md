---
endpoints:
  personalities_list:
    name: List Personalities
    url: /api/v1/personalities/list
    method: GET
    description: Returns a list of available Bird personalities for a specified version or Bird (node_id).
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: false
        type: string
        description: A valid Canary node_id
      - name: version
        required: false
        type: string
        description: A valid version number
    response: JSON structure with personalities for the specified node id's version or specified version.
  personalities_delete:
    name: Delete Personality
    url: /api/v1/personalities/delete
    method: DELETE
    description: Delete a specified custom personality.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: personality
        required: true
        type: string
        description: Custom personality to delete 
      - name: flock_id
        required: true
        type: string
        description: Specify the Flock which has the custom personality you would like to delete.
    response: A JSON message with a result indicator.
  device_custompersonality_exists:
    name: Bird Custom Personality Exists
    url: /api/v1/device/custompersonality/exists
    method: GET
    description: Checks if a custom personality exists for a specified Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: name
        required: true
        type: string
        description: The name of the Custom personality
    response: A JSON message with a result indicator.
---

# Personalities

These are a collection of endpoints that allow you interact with Bird personalities. This includes the built in Bird personalities as well as custom personalities that you create.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## List Personalities

<APIDetails :endpoint="$page.frontmatter.endpoints.personalities_list">

::: slot optional-parameters-notes

::: tip
At least one of the optional parameters is required.
:::

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/personalities/list \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/personalities/list'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "personalities": "[{\"list\": [{\"settings\": {}, \"name\": \"\", \"desc\": \"Pick One\"}, {\"settings\": {\"device.ippers\": \"linux\"}, \"name\": \"bare\", \"desc\": \"Bare Canary (no services)\"}, {\"settings\": {\"http.enabled\": true, \"tftp.enabled\": true, \"smb.enabled\": true, \"vnc.enabled\": true, \"sip.enabled\": true, \"tcpbanner_1.enabled\": true, \"ftp.enabled\": true, \"telnet.enabled\": true, \"httpproxy.enabled\": true, \"git.enabled\": true, \"ntp.enabled\": true, \"redis.enabled\": true, \"device.ippers\": \"linux\", \"tcpbanner.enabled\": true, \"mssql.enabled\": true, \"modbus.enabled\": true, \"ssh.enabled\": true, \"mysql.enabled\": true}, \"name\": \"merry-christmas\", \"desc\": \"Christmas Tree (all services)\"}], \"name\": \"General\"}, {\"list\": [{\"settings\": {\"vnc.enabled\": true, \"smb.sharename\": \"Documents\", \"smb.netbiosname\": \"OFFICESHARE\", \"smb.enabled\": true, \"device.mac_prefix\": \"00:03:93\", \"telnet.authentication_failed_prompt\": \"\\\\nLogin incorrect\\\\n\\\\n\", \"telnet.enabled\": false, \"smb.serverstring\": \"Office Share\", \"smb.sharecomment\": \"Office Document Share\", \"device.ippers\": \"osx\", \"ssh.version\": \"SSH-2.0-OpenSSH_7.4\", \"telnet.password_prompt\": \"Password:\", \"telnet.user_prompt\": \"login: \", \"ssh.enabled\": true, \"ssh.port\": 22, \"vnc.port\": 5900, \"telnet.banner\": \"Darwin/BSD\\\\r\\\\n\\\\r\\\\n\"}, \"name\": \"osx-fileshare\", \"desc\": \"Mac OS X Fileshare\"}], \"name\": \"Apple\"}, {\"list\": [], \"name\": \"Custom\"}]"
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Delete Personality

<APIDetails :endpoint="$page.frontmatter.endpoints.personalities_delete">

  ::: slot required-parameters-notes

  ::: warning 
  You cannot delete built-in personalities. Only custom personalities that you've saved can be deleted.
  :::

  :::

  ::::: slot example

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab "cURL"

  ``` bash
  curl -X DELETE https://EXAMPLE.canary.tools/api/v1/personalities/delete \
    -d auth_token=EXAMPLE_AUTH_TOKEN \
    -d personality=EXAMPLE_PERSONALITY \
    -d flock_id=EXAMPLE_FLOCK_ID 
  ```

  :::

  ::: tab "Python"

  ``` python
  import requests

  url = 'https://EXAMPLE.canary.tools/api/v1/personalities/delete'

  payload = {
    'auth_token': 'EXAMPLE_AUTH_TOKEN',
    'personality': 'EXAMPLE_PERSONALITY',
    'flock_id': 'EXAMPLE_FLOCK_ID'
  }

  r = requests.delete(url, data=payload)

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

## Bird Custom Personality Exists

<APIDetails :endpoint="$page.frontmatter.endpoints.device_custompersonality_exists">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/device/custompersonality/exists \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -d name=EXAMPLE_CUSTOM_PERSONALITY_NAME \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/device/custompersonality/exists'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id': 'EXAMPLE_NODE_ID',
  'name': 'EXAMPLE_CUSTOM_PERSONALITY_NAME'
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "exists": true,
  "result": "success"
}
```
:::

:::::
  
</APIDetails>