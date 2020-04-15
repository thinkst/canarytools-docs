---
endpoints:
  configure_device:
    name: Configure Bird
    url: /api/v1/device/configure
    method: POST
    description: Configure a Bird with a specified JSON settings object
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: settings
        required: true
        type: string
        description: A serialized JSON object of the Bird settings
      - name: custom_personality_name
        required: false
        type: string
        description: Custom personality name to save this config under
    response: JSON structure with result and bundle_tag if successful.
  configure_device_with_personality:
    name: Configure Bird with Personality
    url: /api/v1/device/configure_personality
    method: POST
    description: Configure a Bird with a with a supplied personality.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: personality
        required: true
        type: string
        description: A valid personality from the Canary schema or custom saved personality
      - name: additional_settings
        required: false
        type: string
        description: A serialized json object of additional Bird settings
    response: JSON structure with result and bundle_tag if successful.
  shareupload_end:
    name: End Share Upload
    url: /api/v1/shareupload/end
    method: POST
    description: End and save the share upload on a Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: cancel
        required: false
        type: boolean
        description: Ignore changes made to the writable upload share when parameter is present
    response: A JSON structure with result indicator.
  shareupload_start:
    name: Start Share Upload
    url: /api/v1/shareupload/start
    method: POST
    description: Start a share upload for a Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: A JSON structure with result indicator.
  shareupload_status:
    name: Check Share Upload Status
    url: /api/v1/shareupload/status
    method: GET
    description: Check the status of a Bird's share upload.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: A JSON structure with the current share upload status.
  webroot_end:
    name: End Webroot Upload
    url: /api/v1/webrootupload/end
    method: POST
    description: Cancel the webroot upload for a Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: A JSON structure with result indicator.
  webroot_start:
    name: Start Webroot Upload
    url: /api/v1/webrootupload/start
    method: POST
    description: Start a webroot upload for a Bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: A JSON structure with result indicator.
  webroot_status:
    name: Check Webroot Upload Status
    url: /api/v1/webrootupload/status
    method: GET
    description: Check the status of a Bird's webroot upload.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: A JSON structure with the current webroot upload status.
---

# Configure Services

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to configure Birds that are connected to your Console.

:::::

</APIEndpoints>

## Configure Bird

::: tip 
The [Configure Bird with Personality](service-configuration.html#configure-bird-with-personality) endpoint allows for an easier configuration process, especially if you are simply wanting to use an existing personality.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.configure_device">

  ::: slot required-parameters-notes

  ::: tip Settings Object
  The settings object currently requires you to provide a full, valid settings object that conforms to our [settings object](service-configuration.html#settings-object).
  :::

  :::
  
  ::: slot optional-parameters-notes

  ::: tip Custom Personality Name
  Providing `custom_personality_name` allows you to save the provided settings object as a custom personality. 
  This lets you reuse the settings object easily for further Bird configurations.

  :::

  ::::: slot example

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab "cURL"

  ``` bash
  curl https://EXAMPLE.canary.tools/api/v1/device/configure \
    -d auth_token=EXAMPLE_AUTH_TOKEN \
    -d node_id=EXAMPLE_NODE_ID \
    -d settings=EXAMPLE_SETTINGS_OBJECT
  ```

  :::

  ::: tab "Python"

  ``` python
  import requests

  url = 'https://EXAMPLE.canary.tools/api/v1/device/configure'

  payload = {
    'auth_token': 'EXAMPLE_AUTH_TOKEN',
    'node_id': 'EXAMPLE_NODE_ID',
    'settings': 'EXAMPLE_SETTINGS_OBJECT'
  }

  r = requests.post(url, data=payload)

  print(r.json())
  ```

  :::

  ::::


  ::: api-response
  ```json
  {
    "bundle_tag": "<bundle_tag>",
    "custom_personality_name": null,
    "msg": "All properties are expected.",
    "result": "success"
  }
  ```
  :::

  :::::

</APIDetails>

## Configure Bird with Personality

<APIDetails :endpoint="$page.frontmatter.endpoints.configure_device_with_personality">

  ::: slot required-parameters-notes

  ::: tip Personality
  A list of available personalities can be obtained by calling the [List Personalities](personalities.html#list-personalities) endpoint.
  :::

  :::

  ::::: slot example

  A simple example of pushing the `osx-fileshare` personality to a Bird:

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab "cURL"
  ``` bash
  curl https://EXAMPLE.canary.tools/api/v1/device/configure_personality \
    -d auth_token=EXAMPLE_AUTH_TOKEN \
    -d node_id=EXAMPLE_NODE_ID \
    -d personality=osx-fileshare
  ```

  :::

  ::: tab "Python"
  ``` python
  import requests

  url = 'https://EXAMPLE.canary.tools/api/v1/device/configure_personality'

  payload = {
    'auth_token': 'EXAMPLE_AUTH_TOKEN',
    'node_id': 'EXAMPLE_NODE_ID',
    'personality': 'osx-fileshare'
  }

  r = requests.post(url, data=payload)

  print(r.json())
  ```
  :::

  ::::

  ::: api-response

  ```json
  {
    "bundle_tag": "<bundle_tag>",
    "msg": "All properties are expected.",
    "result": "success"
  }
  ```
  :::

  :::::

</APIDetails>


## Settings Object

<div class="section-container margin-top--20">
  <div class="details-content">

Whenever providing a serialized JSON Bird settings object, you'll need to ensure that it contains the full Bird settings (this includes settings that you do not change.)

The easiest way to achieve this is to call the [Bird Info](queries.html#bird-info) endpoint with `settings=true` and alter the returned settings object as you need.

We've provided a full example `bare-canary` Bird settings object for you to inspect.

  </div>
  <div class="example-content">

::: api-response

```json
"settings": {
  "device.ad_pubkey": "<ad_pubkey>",
  "device.desc": "SVR Room",
  "device.dhcp.enabled": true,
  "device.dns1": "192.168.0.1",
  "device.dns2": "192.168.0.2",
  "device.gw": "192.168.0.1",
  "device.ip_address": "192.168.1.2",
  "device.ippers": "win2012",
  "device.mac": "00:00:00:00:00:00",
  "device.name": "ExampleBird",
  "device.netmask": "255.255.255.0",
  "device.personality": "bare",
  "device.usermodule": [],
  "firewall.enabled": false,
  "firewall.rulelist": [
    {
      "port": "null",
      "rule": "",
      "source": ""
    }
  ],
  "ftp.banner": "FTP server ready",
  "ftp.enabled": false,
  "ftp.port": 21,
  "git.enabled": false,
  "git.port": 9418,
  "http.banner": "Apache/2.2.22 (Ubuntu)",
  "http.enabled": false,
  "http.headers": {},
  "http.headers.enabled": false,
  "http.port": 80,
  "http.skin": "nasLogin",
  "http.userwebroot_present": false,
  "httpproxy.banner": "",
  "httpproxy.enabled": false,
  "httpproxy.port": 8080,
  "httpproxy.skin": "squid",
  "https.enabled": false,
  "https.headers": {},
  "https.headers.enabled": false,
  "https.redirect_http.enabled": false,
  "modbus.enabled": false,
  "modbus.majorminorrevision": "1.2",
  "modbus.modelname": "",
  "modbus.port": 502,
  "modbus.productcode": "1",
  "modbus.productname": "1769-L23E-QB1 Ethernet Port",
  "modbus.userapplicationname": "device1",
  "modbus.vendorname": "Rockwell Automation/Allen Bradley",
  "modbus.vendorurl": "http://www.rockwellautomation.com",
  "mssql.enabled": false,
  "mssql.port": 1433,
  "mssql.version": "2012",
  "mysql.banner": "5.5.43-0ubuntu0.14.04.1",
  "mysql.enabled": false,
  "mysql.port": 3306,
  "ntp.enabled": false,
  "ntp.port": 123,
  "portscan.enabled": false,
  "redis.enabled": false,
  "redis.port": 6379,
  "remoteupdates.enabled": true,
  "rollback.enabled": true,
  "sip.enabled": false,
  "sip.port": 5060,
  "smb.advanced.enabled": false,
  "smb.advanced.preferred_dc.enabled": false,
  "smb.advanced.preferred_dc.servers": "",
  "smb.advanced.serversigning": "mandatory",
  "smb.domain": "corp.thinkst.com",
  "smb.enabled": false,
  "smb.filetree": [
    {
      "children": [
        {
          "name": "Default Cisco Router Config.docx",
          "type": "docx"
        },
        {
          "name": "Default Windows Desktop Configuration.docx",
          "type": "docx"
        },
        {
          "children": [
            {
              "name": "network_diagram_dmz.pdf",
              "type": "pdf"
            },
            {
              "name": "network_diagram_ldn_office.pdf",
              "type": "pdf"
            }
          ],
          "name": "network",
          "type": "folder"
        }
      ],
      "name": "IT",
      "type": "folder"
    },
    {
      "children": [
        {
          "name": "Executive Contact Details.docx",
          "type": "docx"
        },
        {
          "name": "NDA_template.docx",
          "type": "docx"
        },
        {
          "name": "Executive Compensation 2019-20.pdf",
          "type": "pdf"
        }
      ],
      "name": "Staff Docs",
      "type": "folder"
    }
  ],
  "smb.guest.enabled": true,
  "smb.mode": "workgroup",
  "smb.netbios_domain.enabled": false,
  "smb.netbiosname": "OFFICESHARE",
  "smb.serverstring": "Office Share",
  "smb.sharecomment": "Office Document Share",
  "smb.sharename": "Documents",
  "smb.workgroup": "OFFICE",
  "snmp.enabled": false,
  "snmp.port": 161,
  "ssh.enabled": false,
  "ssh.port": 22,
  "ssh.preauth_banner": "",
  "ssh.version": "SSH-2.0-MS_1.100",
  "tcpbanner.enabled": false,
  "tcpbanner_1.alertstring": "",
  "tcpbanner_1.alertstring.enabled": false,
  "tcpbanner_1.datareceivedbanner": "502 5.5.2 Error: command not recognized\\r\\n",
  "tcpbanner_1.enabled": false,
  "tcpbanner_1.initbanner": "220 My Simple Fake SMTP Server.\\r\\n",
  "tcpbanner_1.keep_alive.enabled": false,
  "tcpbanner_1.keep_alive_secret": "",
  "tcpbanner_1.port": 8001,
  "tcpbanner_10.datareceivedbanner": "",
  "tcpbanner_10.enabled": false,
  "tcpbanner_10.initbanner": "",
  "tcpbanner_10.port": 8010,
  "tcpbanner_2.datareceivedbanner": "",
  "tcpbanner_2.enabled": false,
  "tcpbanner_2.initbanner": "",
  "tcpbanner_2.port": 8002,
  "tcpbanner_3.datareceivedbanner": "",
  "tcpbanner_3.enabled": false,
  "tcpbanner_3.initbanner": "",
  "tcpbanner_3.port": 8003,
  "tcpbanner_4.datareceivedbanner": "",
  "tcpbanner_4.enabled": false,
  "tcpbanner_4.initbanner": "",
  "tcpbanner_4.port": 8004,
  "tcpbanner_5.datareceivedbanner": "",
  "tcpbanner_5.enabled": false,
  "tcpbanner_5.initbanner": "",
  "tcpbanner_5.port": 8005,
  "tcpbanner_6.datareceivedbanner": "",
  "tcpbanner_6.enabled": false,
  "tcpbanner_6.initbanner": "",
  "tcpbanner_6.port": 8006,
  "tcpbanner_7.datareceivedbanner": "",
  "tcpbanner_7.enabled": false,
  "tcpbanner_7.initbanner": "",
  "tcpbanner_7.port": 8007,
  "tcpbanner_8.datareceivedbanner": "",
  "tcpbanner_8.enabled": false,
  "tcpbanner_8.initbanner": "",
  "tcpbanner_8.port": 8008,
  "tcpbanner_9.datareceivedbanner": "",
  "tcpbanner_9.enabled": false,
  "tcpbanner_9.initbanner": "",
  "tcpbanner_9.port": 8009,
  "telnet.authentication_failed_prompt": "\\nLogin incorrect\\n\\n",
  "telnet.banner": "Welcome to Microsoft Telnet Service\\r\\n",
  "telnet.enabled": false,
  "telnet.password_prompt": "password: ",
  "telnet.port": 23,
  "telnet.user_prompt": "login: ",
  "tftp.enabled": false,
  "tftp.port": 69,
  "vnc.enabled": false,
  "vnc.port": 5900
}
```

:::

  </div>
</div>

## Share Upload

Although we allow for uploading and pushing files through the [Configure Bird](service-configuration.html#configure-bird) endpoint, it is size-constrained as pushing large files over DNS isn't ideal (and takes a considerable amount of time.).

To get around this, you can remotely enable Share Upload on a Bird (from version 2.2 onwards). This temporarily enables a writable share on the Bird that you can connect to over the network and upload files to.

### Check Share Upload Status

<APIDetails :endpoint="$page.frontmatter.endpoints.shareupload_status">

  ::::: slot example

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab "cURL"
  ``` bash
  curl https://EXAMPLE.canary.tools/api/v1/shareupload/status \
    -d auth_token=EXAMPLE_AUTH_TOKEN \
    -d node_id=EXAMPLE_NODE_ID \
    -G
  ```

  :::

  ::: tab "Python"
  ``` python
  import requests

  url = 'https://EXAMPLE.canary.tools/api/v1/shareupload/status'

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
    "job_id": "<job_id>",
    "password": "<password>",
    "pid": "691",
    "result": "progress",
    "type": "Start"
  }
  ```
  :::

  :::::

</APIDetails>

### End Share Upload

<APIDetails :endpoint="$page.frontmatter.endpoints.shareupload_end">

  ::::: slot example

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab "cURL"
  ``` bash
  curl https://EXAMPLE.canary.tools/api/v1/shareupload/end \
    -d auth_token=EXAMPLE_AUTH_TOKEN \
    -d node_id=EXAMPLE_NODE_ID 
  ```

  :::

  ::: tab "Python"
  ``` python
  import requests

  url = 'https://EXAMPLE.canary.tools/api/v1/shareupload/end'

  payload = {
    'auth_token': 'EXAMPLE_AUTH_TOKEN',
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
    "job_id": "<job_id>",
    "password": "<password>",
    "pid": "691",
    "result": "progress",
    "type": "RequestEnd"
  }
  ```
  :::

  :::::

</APIDetails>

### Start Share Upload

<APIDetails :endpoint="$page.frontmatter.endpoints.shareupload_start">

  ::::: slot example

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab "cURL"
  ``` bash
  curl https://EXAMPLE.canary.tools/api/v1/shareupload/status \
    -d auth_token=EXAMPLE_AUTH_TOKEN \
    -d node_id=EXAMPLE_NODE_ID \
    -G
  ```

  :::

  ::: tab "Python"
  ``` python
  import requests

  url = 'https://EXAMPLE.canary.tools/api/v1/shareupload/status'

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
    "job_id": "<job_id>",
    "password": "<password>",
    "result": "progress",
    "type": "RequestStart"
  }
  ```
  :::

  :::::

</APIDetails>

## Webroot Upload

Using the [Configure Bird](service-configuration.html#configure-bird) endpoint, you are able to select a pre-defined site to expose on your HTTP service. These pre-defined webroots are useful and mimic a multitude of existing systems that you'd expect to find on a network.

However, if you'd like to expose your own site, we allow you to upload your own custom webroot to your Birds (from version 2.2 onwards). In order to do this, you can enable a temporary endpoint on your Bird that will allow you access it over the network, and upload a zip containing your site. 

::: tip
For details about how the zip should be structured, you can look at [our help article](https://help.canary.tools/help/creating-a-customized-page-for-my-canarys-web-server).
:::

### Check Webroot Upload Status

<APIDetails :endpoint="$page.frontmatter.endpoints.webroot_status">

  ::::: slot example

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab "cURL"
  ``` bash
  curl https://EXAMPLE.canary.tools/api/v1/webrootupload/status \
    -d auth_token=EXAMPLE_AUTH_TOKEN \
    -d node_id=EXAMPLE_NODE_ID \
    -G
  ```

  :::

  ::: tab "Python"
  ``` python
  import requests

  url = 'https://EXAMPLE.canary.tools/api/v1/webrootupload/status'

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
    "result": "progress",
    "type": "RequestStart"
  }
  ```
  :::

  :::::

</APIDetails>

### End Webroot Upload

<APIDetails :endpoint="$page.frontmatter.endpoints.webroot_end">

  ::::: slot example

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab "cURL"
  ``` bash
  curl https://EXAMPLE.canary.tools/api/v1/webrootupload/end \
    -d auth_token=EXAMPLE_AUTH_TOKEN \
    -d node_id=EXAMPLE_NODE_ID 
  ```

  :::

  ::: tab "Python"
  ``` python
  import requests

  url = 'https://EXAMPLE.canary.tools/api/v1/webrootupload/end'

  payload = {
    'auth_token': 'EXAMPLE_AUTH_TOKEN',
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
    "result": "progress",
    "type": "RequestCancel"
  }
  ```
  :::

  :::::

</APIDetails>

### Start Webroot Upload

<APIDetails :endpoint="$page.frontmatter.endpoints.webroot_start">

  ::::: slot example

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab "cURL"
  ``` bash
  curl https://EXAMPLE.canary.tools/api/v1/webrootupload/start \
    -d auth_token=EXAMPLE_AUTH_TOKEN \
    -d node_id=EXAMPLE_NODE_ID 
  ```

  :::

  ::: tab "Python"
  ``` python
  import requests

  url = 'https://EXAMPLE.canary.tools/api/v1/webrootupload/start'

  payload = {
    'auth_token': 'EXAMPLE_AUTH_TOKEN',
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
    "result": "progress",
    "type": "RequestStart"
  }
  ```
  :::

  :::::

</APIDetails>
