---
endpoints:
  configure_device:
    name: Configure Devices
    url: /api/v1/devices/configure
    method: POST
    description: Configure a Canary with a specified JSON settings object
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
        description: A serialized JSON object of device settings
      - name: custom_personality_name
        required: false
        type: string
        description: Custom personality name to save this config under
    response: JSON structure with result and bundle_tag if successful.
  configure_device_with_personality:
    name: Configure Device with Personality
    url: /api/v1/devices/configure_personality
    method: POST
    description: Configure a Canary with a with a supplied personality.
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
        description: A valid personality from the Canary schema or Custom saved personality
      - name: additional_settings
        required: false
        type: string
        description: A serialized json object of additional device settings
    response: JSON structure with result and bundle_tag if successful.
  device_note:
    name: Get Device Note
    url: /api/v1/device/note
    method: GET
    description: Retrieve a device's note.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with the device note.
  device_note_add:
    name: Add Device Note
    url: /api/v1/device/note/add
    method: POST
    description: Add a note to a specified device.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
      - name: note
        required: true
        type: string
        description: A note for the device
    response: JSON structure with the result indicator.
  device_note_delete:
    name: Delete Device Note
    url: /api/v1/device/note/delete
    method: POST
    description: Delete the note for a specified device.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: node_id
        required: true
        type: string
        description: A valid Canary node_id
    response: JSON structure with the result indicator.
---

# Device Configuration

These are a collection of endpoints that allow you to configure devices that are connected to your Console.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Configure Device

::: tip 
The [Configure Device with Personality](device-configuration.html#configure-device-with-personality) endpoint allows for an easier configuration process, especially if you are simply wanting to use an existing personality.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.configure_device">

  ::: slot required-parameters-notes

  ::: tip Settings Object
  The settings object currently requires you to provide a full, valid settings object that conforms to our [settings object](device-configuration.html#settings-object-schema).
  :::

  :::
  
  ::: slot optional-parameters-notes

  ::: tip Custom Personality Name
  Providing `custom_personality_name` allows you to save the provided settings object as a custom personality. 
  This lets you reuse the settings object easily for further device configurations. See [Custom Personalities](device-configuration.html#custom-personalities) for more information.
  :::

  :::

</APIDetails>

#### Example 

## Configure Device with Personality

<APIDetails :endpoint="$page.frontmatter.endpoints.configure_device_with_personality">

  ::: slot required-parameters-notes

  ::: tip Personality
  A list of available personalities can be obtained by calling the [List Personalities](device-personalities.html#list-personalities) endpoint.
  :::

  :::

</APIDetails>

#### Example

A simple example of pushing the `osx-fileshare` personality to a device:

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"
``` bash
DOMAIN=my_domain
AUTH_TOKEN=test_auth_token
NODE_ID=node_id

curl "https://${DOMAIN}.canary.tools/api/v1/device/configure_personality?auth_token=${AUTH_TOKEN}" -d 'node_id=${NODE_ID}' -d 'personality=osx-fileshare'

:::

::: tab "Python"
``` python
import requests

DOMAIN = 'my_domain'
AUTH_TOKEN = 'test_auth_token'


```
:::

::::

::: api-response

```json
{
  "bundle_tag": "23370c",
  "msg": "All properties are expected.",
  "result": "success"
}
```
:::

## Get Device Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note"/>

## Add Device Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note_add"/>

## Delete Device Note

<APIDetails :endpoint="$page.frontmatter.endpoints.device_note_delete"/>

## Settings Object

Whenever providing a serialized JSON device settings object, you'll need to ensure that it contains the full device settings (this includes settings that you do not change.)

The easiest way to achieve this is to call the [Device Info](device-queries.html#device-info) endpoint with `settings=true` and alter the returned settings object as you need.

An example `bare-canary` device settings object looks like:

```json
"settings": {
  "device.ad_pubkey": "<ad_pubkey>",
  "device.desc": "in the jhb office",
  "device.dhcp.enabled": true,
  "device.dns1": "192.168.0.1",
  "device.dns2": "192.168.0.2",
  "device.gw": "192.168.0.1",
  "device.ip_address": "192.168.0.3",
  "device.ippers": "win2012",
  "device.mac": "00:00:00:00:00:00",
  "device.name": "nick-office-test",
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