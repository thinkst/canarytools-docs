# Incident Objects

Each log entry is termed an event, and consists of actions such as a single SSH login attempt, or a single POST to a website, or a single SIP request. An event will result in an incident being created, but subsequent similar events from the same source will be bundled together if they occur in close proximity. This means that if someone launches a brute-force attack, there is a single incident created with an event assigned to each login attempt.

The incident object contains a record of the individual events that constitute the incident.

## Basic Structure

Incident feeds have this basic structure:

<div class="section-container">
  <div class="details-content">

::: attribute-details

**updated**
Human readable date when the incident was updated<br><br>
**updated_std**
The date/time when the incident was updated in the format `YYYY-MM-DD HH:MM:SS TZ` <br><br>
**updated_time**
Timestamp of the updated time eg. `1574945951` <br><br>
**created**
Timestamp of the incident creation time eg. `1574945951` <br><br>
**created_std**
The date/time when the incident was created in the format `YYYY-MM-DD HH:MM:SS TZ` <br><br>
**dst_host**
Optional - The destination IP address of the attack <br><br>
**dst_port**
Optional - The destination port of the attack <br><br>
**events_count**
Number of events for the incident <br><br>
**flock_id**
ID of the Flock in which the incident occurred <br><br>
**flock_name**
Name of the Flock in which the incident occurred <br><br>
**name**
Optional - The name of the device on which the incident occurred <br><br>
**node_id**
Optional - The node_id of the device on which the incident occurred <br><br>
**src_host**
The source IP address of the attacker <br><br>
**src_host_reverse**
The source hostname of the attacker<br><br>
**src_port**
The source port of the attacker <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
{
  "feed": "Unacknowledged Incidents",
[...]
  "incidents": [
    {
      "id": "...",
      "summary": "<EVENT_DESCRIPTION>",
      "updated": "...",
      "updated_std": "...",
      "updated_time": "..."
[...]
      "description": {
[...]
        "logtype": "<LOGTYPE>",
        "description": "<EVENT_DESCRIPTION>",
        "created": "...",
        "created_std": "...",
        "dst_host": "...",
        "dst_port": "...",
        "events": [
          <EVENT_DICT>,
          <EVENT_DICT>,
          ...,
        ]
        "events_count": "...",
        "flock_id": "...",
        "flock_name": "...",
        "name": "...",
        "node_id": "...",
        "src_host": "...",
        "src_host_reverse": "...",
        "src_port": "..."
      }
    }
  ]
}
```
:::
  </div>
</div>

The “events” field contains a list of `<EVENT_DICT>` s. In the incident types below, only the `<EVENT_DESCRIPTION>` and `<EVENT_DICT>` values are defined as the rest of the incident object is the same across the various incident types.

All fields will be present in each incident, unless noted otherwise.

The actual data returned by the API may include additional fields. However, any field not described in this document should be considered experimental and likely to disappear.

## Canary Disconnected

<div class="section-container">
  <div class="details-content">

::: attribute-details

**EVENT_DICT**
Empty, no additional event data. <br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Canary Disconnected"
<LOGTYPE> = "1004"
<EVENT_DICT> = { }
```
:::
  </div>
</div>

## Canary Settings Changed

<div class="section-container">
  <div class="details-content">

::: attribute-details

**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>
**SETTINGS**
A string containing the changed settings <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Canary Settings Changed"
<LOGTYPE> = "23002"
<EVENT_DICT> ={
                "timestamp": ...,
                "timestamp_std": "...",
                "SETTINGS": "..."
            }
```
:::
  </div>
</div>

## Console Settings Changed

<div class="section-container">
  <div class="details-content">

::: attribute-details

**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>
**SETTINGS**
A string containing the changed settings. <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Console Settings Changed"
<LOGTYPE> = "23001"
<EVENT_DICT> ={
                "timestamp": ...,
                "timestamp_std": "...",
                "SETTINGS": "..."
            }
```
:::
  </div>
</div>

## Flock Settings Changed

<div class="section-container">
  <div class="details-content">

::: attribute-details

**SETTINGS**
A string containing the changed settings. <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Console Settings Changed"
<LOGTYPE> = "23003"
<EVENT_DICT> ={
                "SETTINGS": "enable_emails_notifications=True\nModified by user"
            }
```
:::
  </div>
</div>

## Canarytokens

Most Canarytokens make use of `HTTP` and `DNS` as their underlying communication channel.

### HTTP
<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`17001` - TOKENS HTTP REMOTE IMAGE <br>
`17003` - TOKENS HTTP CLONED SITE <br>
`17004` - TOKENS DOC MSWORD <br>
`17005` - TOKENS HTTP AWS S3 <br>
`17006` - TOKENS HTTP GOOGLE DOCS <br>
`17007` - TOKENS HTTP GOOGLE SHEETS <br>
`17008` - TOKENS HTTP SIGNED EXE <br>
`17009` - TOKENS HTTP QR CODE <br>
`17012` - TOKENS HTTP AWS ID <br>
`17016` - TOKENS HTTP FAST REDIRECT <br>
`17017` - TOKENS HTTP SLOW REDIRECT <br>
`17019` - TOKENS HTTP OFFICE365 MAIL <br>
`17020` - TOKENS HTTP SLACK API <br>
`17021` - TOKENS HTTP GMAIL <br>
`17022` - TOKENS HTTP WIREGUARD <br>
`17023` - TOKENS HTTP DOC MSEXCEL <br>
`17024` - TOKENS HTTP AZURE ID <br>
`17025` - TOKENS HTTP CLONED CSS <br>
`17026` - TOKENS HTTP AZURE ENTRA LOGIN <br>
`17027` - TOKENS HTTP CREDIT CARD <br>
`17028` - TOKENS HTTP PWA <br>
`17029` - TOKENS HTTP MYSQL DUMP <br>
<br>
**type**
A string containing the token type. <br><br>
**canarytoken**
Unique string that acts as the Canarytoken. <br><br>
**headers**
Headers is a dict. <br><br>
**kind**
Type of Canarytoken triggered. <br><br>
**url**
URL of the HTTP Canarytoken. <br><br>
**geoip**
Geographic lookup of source ip. <br><br>
**ip_blocklist**
Lookup object of where the source ip is a known proxy, tor or vpn source. <br><br>
**cloned_site**
`Cloned Site/CSS` - URL of cloned site. <br><br>
**original_site**
`Cloned Site/CSS` - Domain of protected site. <br><br>
**referer**
`Cloned Site` - HTTP referer. <br><br>
**masked_card_number**
`Credit Card` - Credit Card Number. <br><br>
**transaction_amount**
`Credit Card` - Transaction Amount. <br><br>
**transaction_currency**
`Credit Card` - Transaction Currency. <br><br>
**transaction_date**
`Credit Card` - Transaction Date. <br><br>
**transaction_type**
`Credit Card` - Transaction Type. <br><br>
**merchant**
`Credit Card` - Merchant. <br><br>
**location**
`PWA` - Location. <br><br>

**additional_info**
Stores Token specific data dependent on service, for example S3 bucket operation details received from AWS API's. <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Canarytoken triggered"
<LOGTYPE> = "17000 | 17001 | 17003 | 17004 | 17005 | 17006 | 17007 | 17008 | 17009 | 17012 | 17016 | 17017 | 17019 | 17020 | 17021 | 17022 | 17023 | 17024 | 17025 | 17026 | 17027 | 17028 | 17029 "
<EVENT_DICT> = {
                 "type": "http",
                 "canarytoken": "<tokenvalue>",
                 "headers" : {
                   <headername_1>: <headervalue_1> , <headername_2>: <headervalue_2> , ...
                 },
                 "url": "<tokenurl>"
               }
```
:::
  </div>
</div>

### DNS
<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`16006` - TOKENS DNS DESKTOPINI <br>
`16008` - TOKENS DNS PDF ACROBAT_READER <br>
`16009` - TOKENS DNS MSWORD MACRO <br>
`16010` - TOKENS DNS MSEXCEL MACRO <br>
`16011` - TOKENS DNS SENSITIVE CMD <br>
`16012` - TOKENS DNS ACTIVE DIRECTORY LOGIN <br>
`17023` - TOKENS DOC MSEXCEL <br><br>
**type**
A string containing the token type. <br><br>
**canarytoken**
Unique string that acts as the Canarytoken. <br><br>
**hostname**
Hostname of the DNS Canarytoken. <br><br>
**generic_data**
Encoded additional information. See [Encoding additional information in your token](https://docs.canarytokens.org/guide/dns-token.html#encoding-additional-information-in-your-token) <br><br>
**windows_desktopini_access_username**
`Windows Folder` - Host username. <br><br>
**windows_desktopini_access_domain**
`Windows Folder` - Host domain. <br><br>
**windows_desktopini_computer_name**
`Windows Folder` - Host computer name. <br><br>
**ms_macro_os**
`MS Excel / Word Macro` - Host OS. <br><br>
**ms_macro_username**
`MS Excel / Word Macro` - Host username. <br><br>
**ms_macro_ip**
`MS Excel / Word Macro` - Host local ip. <br><br>
**cmd_computer_name**
`Sensitive Command` - Host computer name. <br><br>
**cmd_user_name**
`Sensitive Command` - Host user name. <br><br>
**cmd_invocation_id**
`Sensitive Command` - Unique identifier per command's executed instance, this changes every execution. <br><br>
**cmd_resolved_ip**
`ACTIVE DIRECTORY LOGIN` - Source IP address. <br><br>
**cmd_workstation**
`ACTIVE DIRECTORY LOGIN` - Source Hostname. <br><br>
**cmd_user_name**
`ACTIVE DIRECTORY LOGIN` - Username. <br><br>
**cmd_machine_name**
`ACTIVE DIRECTORY LOGIN` - Domain Controller. <br><br>
**cmd_event_record_id**
`ACTIVE DIRECTORY LOGIN` - Event record ID. <br><br>
:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Canarytoken triggered"
<LOGTYPE> = "16000 | 16006 | 16008 | 16009 | 16010 | 16011 | 16012"
<EVENT_DICT> = {
                 "type": "dns",
                 "canarytoken": "<tokenvalue>",
                 "hostname": "<tokenhostname>",
                 "generic_data": "<only present when additional data is encoded>",
                 "windows_desktopini_access_username": "<only present for windows folder alerts>",
                 "windows_desktopini_access_domain": "<only present for windows folder alerts>",
                 "windows_desktopini_computer_name": "<only present for windows folder alerts>",
                 "ms_macro_os": "<only present for MS Word / Excel alerts>",
                 "ms_macro_username": "<only present for MS Word / Excel alerts>",
                 "ms_macro_ip": "<only present for MS Word / Excel alerts>",
                 "cmd_computer_name": "<only present for sensitive command alerts>",
                 "cmd_user_name": "<only present for sensitive command alerts>",
                 "cmd_invocation_id": "<only present for sensitive command alerts>",
                 "cmd_resolved_ip": "<only present for active directory login alerts>",
                 "cmd_workstation": "<only present for active directory login alerts>",
                 "cmd_user_name": "<only present for active directory login alerts>",
                 "cmd_machine_name": "<only present for active directory login alerts>",
                 "cmd_event_record_id": "<only present for active directory login alerts>"
               }
```
:::
  </div>
</div>

Other Tokens use their own communication channel.

### Wireguard
<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`17022` - TOKENS WIREGUARD <br><br>
**type**
A string containing the token type <br><br>
**canarytoken**
Unique string that acts as the Canarytoken. <br><br>
**client_public_key**
Connecting client's public key. <br><br>
**client_session_index**
Connecting client session ID. <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Canarytoken triggered"
<LOGTYPE> = "17022"
<EVENT_DICT> = {
                 "client_public_key": "...",
                 "client_session_index": "..."
               }
```
:::
  </div>
</div>

---

## Custom TCP Service Request
The Custom TCP Service module lets the Canary administrator create simple services that either immediately prints a banner on connection, or wait for the client to send data before responding.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`20001` - TCP banner sent immediately on connection. <br>
`20002` - TCP banner sent after the client sent a line. <br>
`20003` - TCP banner keep alive connection made. <br>
`20004` - TCP banner keep alive secret received. <br>
`20005` - TCP banner keep alive data received. <br>
`20006` - TCP banner connection refused. <br><br>
**BANNER_ID**
Multiple banners are supported, the id identifies which banner service was triggered. <br><br>
**DATA**
Optional. The attacker's supplied data. <br><br>
**FUNCTION**
Indicates which trigger fired, either `'DATA_RECEIVED'` for when a banner was sent after the attacker sent data, or `'CONNECTION_MADE'` for when a banner was sent immediately on connection. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Custom TCP Service Request"
<LOGTYPE> = "20001 | 20002 | 20003 | 20004 | 20005 | 20006"
<EVENT_DICT> = {
                 "BANNER_ID": "...",
                 "DATA": "...",
                 "FUNCTION": "...",
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## Dummy Incident
Alert data sent via Syslog or Webhook when testing connections.

<div class="section-container">
  <div class="details-content">
  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "This is a dummy incident"
<EVENT_DICT> = {
                "ReverseDNS": "theattackers.ip.local",
                "CanaryName": "DummyDevice",
                "CanaryIP": "1.1.1.1",
                "AlertType": "CanaryIncident",
                "AdditionalDetails": {
                  "Field2": "VALUE2",
                  "Field3": "VALUE3",
                  "Field1": "VALUE1"
                },
                "CanaryID": "0000000testnode",
                "Description": "Fake Location",
                "Timestamp": "1691096157",
                "Intro": "This is a dummy incident.",
                "Flock": "flock:dummyincidentflock",
                "CanaryLocation": "Fake Location",
                "SourceIP": "2.2.2.2"
              }
```
:::
  </div>
</div>

## FTP Login Attempt

<div class="section-container">
  <div class="details-content">

::: attribute-details

**USERNAME**
Attacker supplied username. <br><br>
**PASSWORD**
Attacker supplied password. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "FTP Login Attempt"
<LOGTYPE> = "2000"
<EVENT_DICT> = {
                 "USERNAME": "...",
                 "PASSWORD": "..."
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## Git Repository Clone Attempt

<div class="section-container">
  <div class="details-content">

::: attribute-details

**HOST**
Git client's view of the Canary's hostname. <br><br>
**REPO**
Name of the repository the client attempted to clone. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Git Repository Clone Attempt"
<LOGTYPE> = "19001"
<EVENT_DICT> = {
                 "HOST": "...",
                 "REPO": "..."
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## HTTP Incidents

Currently, there are 7 types of HTTP Incidents:

1. Page loads, triggered by GET requests. They are disabled by default as they’re noisy, and needs to be specifically enabled.
2. Login attempts, triggered by POST requests. They are always enabled.
3. POST requests to non login pages.
4. Error page requested. This is usually triggered by tools trying random urls.
5. A scan of the HTTP web skin detected. This is triggered by many many GET requests to random urls.
6. HTTP API requested received. This is only on certain HTTP web skins that support HTTP API.
7. POST request that resulted in a error page. This is usually triggered by tools trying POSTs to random urls.

::: attribute-details

**LOGTYPE**
`3000` - HTTP GET <br>
`3001` - HTTP LOGIN ATTEMPT <br>
`3002` - HTTP POST <br>
`3003` - HTTP ERROR <br>
`3004` - HTTP SCAN <br>
`3005` - HTTP API REQUEST <br>
`3006` - HTTP POST ERROR PAGE <br>

:::

### HTTP API Request

Triggered by a HTTP request to a Canary configured as an [API server.](https://help.canary.tools/hc/en-gb/articles/360019295837-Use-a-custom-configuration-file-to-configure-my-custom-webroot)

<div class="section-container">
  <div class="details-content">

::: attribute-details

**HEADERS**
Headers Present in the request. <br><br>
**HOSTNAME**
Destination Hostname. <br><br>
**METHOD**
HTTP Method. <br><br>
**PATH**
Web path requested by the source. <br><br>
**POSTDATA**
Additional POST data sent by source. <br><br>
**RESPONSE**
The response code eg. `200` <br><br>
**SKIN**
Which Webserver skin was used eg. `nasLogin` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**USERAGENT**
Useragent of the source's browser. <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "HTTP API Request"
<LOGTYPE> = "3005"
<EVENT_DICT> = {
                 "POSTDATA": {
                     "...": "..."
                 },
                 "timestamp": ...,
                 "HOSTNAME": "...",
                 "RESPONSE": ...,
                 "HEADERS": {
                     "...": "...",
                     },
                 "timestamp_std": "...",
                 "SKIN": "...",
                 "PATH": "...",
                 "USERAGENT": "...",
                 "METHOD": "..."
                }
```
:::
  </div>
</div>

### HTTP Page Load

<div class="section-container">
  <div class="details-content">

::: attribute-details

**PATH**
Web path requested by the source. <br><br>
**USERAGENT**
Useragent of the source's browser. <br><br>
**CHANNEL**
Optional. Set to `'TLS'` if an encrypted site is configured, otherwise absent. <br><br>
**METHOD**
The HTTP request method used eg. `GET/POST/DELETE` <br><br>
**RESPONSE**
The response code eg. `200` <br><br>
**SKIN**
Which Webserver skin was used eg. `nasLogin` <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "HTTP Page Load"
<LOGTYPE> = "3000 | 3002 | 3003"
<EVENT_DICT> = {
                 "PATH": "...",
                 "USERAGENT": "...",
                 "CHANNEL": "...",
                 "METHOD": "...",
                 "RESPONSE": ...,
                 "SKIN": "...",
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

### HTTP Login Attempt

<div class="section-container">
  <div class="details-content">

::: attribute-details

**USERNAME**
Attacker supplied username. <br><br>
**PASSWORD**
Attacker supplied password. <br><br>
**PATH**
Web path requested by the source. <br><br>
**USERAGENT**
Useragent of the source's browser. <br><br>
**CHANNEL**
Optional. Set to `'TLS'` if an encrypted site is configured, otherwise absent. <br><br>
**METHOD**
The HTTP request method used eg. `GET/POST/DELETE` <br><br>
**RESPONSE**
The response code eg. `200` <br><br>
**SKIN**
Which Webserver skin was used eg. `nasLogin` <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "HTTP Login Attempt"
<LOGTYPE> = "3001"
<EVENT_DICT> = {
               "USERNAME": "...",
               "PASSWORD": "..."
               "PATH": "...",
               "USERAGENT": "...",
               "CHANNEL": "...",
               "METHOD": "...",
               "RESPONSE": "...",
               "SKIN": "...",
               "timestamp": ...,
               "timestamp_std": "..."
               }
```
:::
  </div>
</div>

### HTTP POST ERROR PAGE

<div class="section-container">
  <div class="details-content">

::: attribute-details

**PATH**
Web path requested by the source. <br><br>
**USERAGENT**
Useragent of the source's browser. <br><br>
**CHANNEL**
Optional. Set to `'TLS'` if an encrypted site is configured, otherwise absent. <br><br>
**METHOD**
The HTTP request method used eg. `GET/POST/DELETE` <br><br>
**RESPONSE**
The response code eg. `200` <br><br>
**SKIN**
Which Webserver skin was used eg. `nasLogin` <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "HTTP Post Request to an Error Page"
<LOGTYPE> = "3006"
<EVENT_DICT> = {
               "PATH": "...",
               "USERAGENT": "...",
               "CHANNEL": "...",
               "METHOD": "...",
               "RESPONSE": "...",
               "SKIN": "...",
               "timestamp": ...,
               "timestamp_std": "..."
               }
```
:::
  </div>
</div>

### HTTP Service Scan

Triggered by scans for HTTP services

<div class="section-container">
  <div class="details-content">

::: attribute-details

**METHOD**
The HTTP request method used eg. `GET/POST/DELETE` <br><br>
**PATH**
Web path requested by the source. <br><br>
**RESPONSE**
The response code eg. `200` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "HTTP Service Scan"
<LOGTYPE> = "3004"
<EVENT_DICT> = {
                 "METHOD": "...",
                 "PATH": "...",
                 "RESPONSE": ...,
               }
```
:::
  </div>
</div>


## HTTP Proxy Request

Triggered by any request through the HTTP proxy module.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**USERNAME**
Optional. Attacker supplied proxy username. <br><br>
**PASSWORD**
Optional. Attacker supplied proxy password. <br><br>
**URL**
URL requested by the source. <br><br>
**USERAGENT**
Useragent of the source's browser. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "HTTP Proxy Request"
<LOGTYPE> = "7001"
<EVENT_DICT> = {
                 "USERNAME": "...",
                 "PASSWORD": "..."
                 "URL": "...",
                 "USERAGENT": "..."
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## LDAP Bind Attempt

Triggered by a LDAP BIND request.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**DN**
Distinguished Name. <br><br>
**MECH**
SASL Mechanism. <br><br>
**VER**
Version. <br><br>
**SEARCH_ATTRIBUTE**
Search Target. <br><br>
**REQ**
Request. <br><br>
**PASSWORD**
Password. <br><br>
**TYPE**
Authentication type. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "LDAP Bind Attempt Detected"
<LOGTYPE> = "31001"
<EVENT_DICT> =  {
                 "DN": "...",
                 "MECH": "...",
                 "VER": "...",
                 "timestamp": ...,
                 "REQ": "...",
                 "timestamp_std": "...",
                 "PASSWORD": "...",
                 "TYPE": "..."
                }
```
:::
  </div>
</div>

## Local Tampering Detected

Triggered by local tampering with a Canary host.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**MESSAGE**
Tampering cause summary. <br><br>
**MESSAGE_THINKST**
Tampering cause details.  <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Local Tampering Detected"
<LOGTYPE> = "30001"
<EVENT_DICT> = {
                "timestamp": ...,
                "timestamp_std": "...",
                "MESSAGE": "...",
                "MESSAGE_THINKST": "...",
               }
```
:::
  </div>
</div>

## ModBus Request

Triggered by any valid ModBus request.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`18001` - Modbus Query Function <br>
`18002` - Modbus Read Function <br>
`18003` - Modbus Write Function <br><br>
**UNIT_ID**
ModBus unit target. <br><br>
**FUNC_CODE**
ModBus function code. <br><br>
**FUNC_NAME**
Optional. ModBus function name, if available.  <br><br>
**SFUNC_CODE**
Optional. ModBus subfunction code, if available. <br><br>
**SFUNC_NAME**
Optional. ModBus subfunction name, if available. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "ModBus Request"
<LOGTYPE> = "18001 | 18002 | 18003"
<EVENT_DICT> = {
                 "UNIT_ID": "...",
                 "FUNC_CODE": "...",
                 "FUNC_NAME": "...",
                 "SFUNC_CODE": "...",
                 "SFUNC_NAME": "...",
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## Mongo Request

Triggered by any valid MongoDB request.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`28001` - Mongo Command <br>
`28002` - Mongo Auth Command <br><br>
**cmd**
Command attempted. <br><br>
**db**
Database accessed. <br><br>
**user**
Attacker supplied database username.  <br><br>
**password**
Attacker supplied database password. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Mongo Authentication Attempt"
<LOGTYPE> = "28001 | 28002"
<EVENT_DICT> = {
                 "timestamp": "...",
                 "cmd": "...",
                 "db": "...",
                 "timestamp_std": "...",
                 "user": "...",
                 "password": "..."
               }
```
:::
  </div>
</div>

## MSSQL Login Attempt

Triggered by any attempt to authenticate to the MS-SQL Server module.

SQL Server supports multiple authentication modes, and the fields that come through depending on the mode.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`9001` for SQL Server authentication <br>
`9002` for Windows authentication <br><br>
**USERNAME**
Attacker supplied database username. <br><br>
**PASSWORD**
Optional. Attacker supplied database password. <br><br>
**HOSTNAME**
Optional. Attacker supplied hostname. <br><br>
**DOMANNAME**
Optional. Attacker supplied Active Directory name. <br><br>
**APPNAME**
Name of the app with which the query was made eg. `SQLCMD` <br><br>
**HOSTNAME**
Hostname of the attacker <br><br>
**SERVERNAME**
IP address of the attacker <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "MSSQL Login Attempt"
<LOGTYPE> = "9001 | 9002"
<EVENT_DICT> = {
                 "USERNAME": "...",
                 "PASSWORD": "..."
                 "HOSTNAME": "...",
                 "DOMAINNAME": "..."
                 "APPNAME": "...",
                 "HOSTNAME": "...",
                 "SERVERNAME": "...",
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## MySQL Login Attempt
Triggered by an authentication attempt against the MySQL service.

The client sends a hashed password, not a cleartext password. The Canary will try to crack the hash with passwords one might expect in a brute-force.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**USERNAME**
Attacker supplied database username. <br><br>
**CLIENT_HASH**
Attacker supplied database password hash. <br><br>
**SALT**
Attacker supplied database password hash salt. <br><br>
**PASSWORD**
Recovered password if possible, otherwise <br>`<Password not in common list>` <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "MySQL Login Attempt"
<LOGTYPE> = "8001"
<EVENT_DICT> = {
                 "USERNAME": "...",
                 "CLIENT_HASH": "...",
                 "SALT": "...",
                 "PASSWORD": "..."
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## Network Settings Roll-back
Triggered by a Canary reverting it's network settings after a settings push if it can't connect to the Console.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**Canary Status**
The status of the canary after the rollback <br><br>
**Erroneous network settings**
The settings which changed, causing the rollback <br><br>
**Restored network settings**
The settings restored after the rollback <br><br>
**Rollback time**
The timestamp of the rollback eg. `1580378197` <br><br>
**User**
The user that deployed the erroneous settings <br><br>
**timestamp**
The timestamp of the incident eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the incident eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Network Settings Roll-back"
<LOGTYPE> = "22011"
<EVENT_DICT> = {
                 "Canary Status": "Canary is currently ONLINE.",
                 "Erroneous network settings": "Canary IP address: 192.168.1.114; Netmask: 255.255.255.0; Gateway: 192.168.1.1; DNS server 1: 8.7.6.5; DNS server 2: 8.7.6.5; DHCP: Disabled",
                 "Restored network settings": "Canary IP address: 192.168.1.206; DHCP: Enabled",
                 "Rollback time": "1746085804.66",
                 "User": "user",
                 "timestamp": 1746085866,
                 "timestamp_std": "2025-05-01 07:51:06 UTC+0000"
               }
```
:::
  </div>
</div>

## NTP Monlist Request
Triggered by the NTP Monlist command.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**NTP_CMD**
Name of the NTP command sent. Currently is `'monlist'`. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "NTP Monlist Request"
<LOGTYPE> = "11001"
<EVENT_DICT> = {
                 "NTP_CMD": "..."
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## Port Scans

There are six types of port scans incidents.

 1. A host port scan occurs when a single Canary is port scanned by a single source.
 2. A consolidated network port scan occurs when multiple Canaries are scanned by a single source.
 3. An NMAP FIN scan was run against the Canary.
 4. An NMAP NULL scan was run against the Canary.
 5. An NMAP OS scan was run against the Canary.
 6. An NMAP XMAS scan was run against the Canary.

### Host Port Scan
<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`5001` - PORT SYN<br>
`5002` - PORT SCAN NET<br>
`5009` - PORT RUNFINGER SCAN<br>
`5011` - PORT RUNFINGER DIALECT<br>
`5012` - PORT RUNFINGER LANMAN<br>
**ports**
List of comma-separated ports. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197`. <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000`<br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Host Port Scan"
<LOGTYPE> = "5001 | 5002 | 5003 | 5009 | 5011 | 5012"
<EVENT_DICT> = {
                 "ports": "23,80,443"
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

### Consolidated Network Port Scan
<div class="section-container">
  <div class="details-content">

::: attribute-details

**EVENT_DICT**
The dict's keys are port numbers, and the values are lists of IP addresses. <br><br>
**port**
Port number on the Canary <br><br>
**canary_IP**
Canaries that were targeted <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Consolidated Network Port Scan"
<LOGTYPE> = "5007"
<EVENT_DICT> = {
                 "<port>": [
                   "<canary_IP>",
                   "<canary_IP>"
                 ],
                 "<port>": [
                   "<canary_IP>",
                   "<canary_IP>"
                 ]
               }
```
:::
  </div>
</div>

### NMAP FIN Scan
<div class="section-container">
  <div class="details-content">

::: attribute-details

**ID**
IP packet ID <br><br>
**LEN**
Length of IP packet <br><br>
**MAC**
First N bytes from the packet. Destination MAC (i.e. Canary) is the first 6 bytes, source MAC is the next 6 bytes, and the remainder is a peek into the reset of the packet <br><br>
**PREC**
Precedent bits, almost always `0x00` <br><br>
**PROTO**
The protocol used <br><br>
**RES**
Reserved bits, almost always `0x0`  <br><br>
**TOS**
IP Type of Service field, almost always `0x00` <br><br>
**TTL**
Time-to-live on the IP packet <br><br>
**URGP**
Indicates whether the TCP Urgent Pointer is used in the packet. Indicates the offset. `0` indicates it’s not used. <br><br>
**WINDOW**
TCP Window size  <br><br>
**SYN**
Indicates whether the SYN flag is set. Present if the flag is there, absent otherwise. <br><br>
**ACK**
Indicates whether the ACK flag is set. Present if the flag is there, absent otherwise. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197`. <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000`<br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "NMAP FIN Scan Detected"
<LOGTYPE> = "5008"
<EVENT_DICT> = {
                    "ID": "...",
                    "LEN": "...",
                    "MAC": "...",
                    "PREC": "...",
                    "PROTO": "...",
                    "RES": "...",
                    "TOS": "...",
                    "TTL": "...",
                    "URGP": "...",
                    "WINDOW": "...",
                    "SYN": "...",
                    "ACK": "...",
                    "timestamp": ...,
                    "timestamp_std": "..."
}
```
:::
  </div>
</div>

### NMAP NULL Scan
<div class="section-container">
  <div class="details-content">

::: attribute-details

**ID**
IP packet ID <br><br>
**LEN**
Length of IP packet <br><br>
**MAC**
First N bytes from the packet. Destination MAC (i.e. Canary) is the first 6 bytes, source MAC is the next 6 bytes, and the remainder is a peek into the reset of the packet <br><br>
**PREC**
Precedent bits, almost always `0x00` <br><br>
**PROTO**
The protocol used <br><br>
**RES**
Reserved bits, almost always `0x0`  <br><br>
**TOS**
IP Type of Service field, almost always `0x00` <br><br>
**TTL**
Time-to-live on the IP packet <br><br>
**URGP**
Indicates whether the TCP Urgent Pointer is used in the packet. Indicates the offset. `0` indicates it’s not used. <br><br>
**WINDOW**
TCP Window size  <br><br>
**SYN**
Indicates whether the SYN flag is set. Present if the flag is there, absent otherwise. <br><br>
**ACK**
Indicates whether the ACK flag is set. Present if the flag is there, absent otherwise. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197`. <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000`<br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "NMAP NULL Scan Detected"
<LOGTYPE> = "5005"
<EVENT_DICT> = {
                  "ID": "...",
                  "LEN": "...",
                  "MAC": "...",
                  "PREC": "...",
                  "PROTO": "...",
                  "RES": "...",
                  "TOS": "...",
                  "TTL": "...",
                  "URGP": "...",
                  "WINDOW": "...",
                  "SYN": "...",
                  "ACK": "...",
                  "timestamp": ...,
                  "timestamp_std": "..."
              }
```
:::
  </div>
</div>

### NMAP OS Scan
<div class="section-container">
  <div class="details-content">

::: attribute-details

**ID**
IP packet ID <br><br>
**LEN**
Length of IP packet <br><br>
**MAC**
First N bytes from the packet. Destination MAC (i.e. Canary) is the first 6 bytes, source MAC is the next 6 bytes, and the remainder is a peek into the reset of the packet <br><br>
**PREC**
Precedent bits, almost always `0x00` <br><br>
**PROTO**
The protocol used <br><br>
**RES**
Reserved bits, almost always `0x0`  <br><br>
**TOS**
IP Type of Service field, almost always `0x00` <br><br>
**TTL**
Time-to-live on the IP packet <br><br>
**URGP**
Indicates whether the TCP Urgent Pointer is used in the packet. Indicates the offset. `0` indicates it’s not used. <br><br>
**WINDOW**
TCP Window size  <br><br>
**SYN**
Indicates whether the SYN flag is set. Present if the flag is there, absent otherwise. <br><br>
**ACK**
Indicates whether the ACK flag is set. Present if the flag is there, absent otherwise. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197`. <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000`<br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "NMAP OS Scan Detected"
<LOGTYPE> = "5004"
<EVENT_DICT> = {
                  "ID": "...",
                  "LEN": "...",
                  "MAC": "...",
                  "PREC": "...",
                  "PROTO": "...",
                  "RES": "...",
                  "TOS": "...",
                  "TTL": "...",
                  "URGP": "...",
                  "WINDOW": "...",
                  "SYN": "...",
                  "ACK": "...",
                  "timestamp": ...,
                  "timestamp_std": "..."
              }
```
:::
  </div>
</div>

### NMAP XMAS Scan
<div class="section-container">
  <div class="details-content">

::: attribute-details

**ID**
IP packet ID <br><br>
**LEN**
Length of IP packet <br><br>
**MAC**
First N bytes from the packet. Destination MAC (i.e. Canary) is the first 6 bytes, source MAC is the next 6 bytes, and the remainder is a peek into the reset of the packet <br><br>
**PREC**
Precedent bits, almost always `0x00` <br><br>
**PROTO**
The protocol used <br><br>
**RES**
Reserved bits, almost always `0x0`  <br><br>
**TOS**
IP Type of Service field, almost always `0x00` <br><br>
**TTL**
Time-to-live on the IP packet <br><br>
**URGP**
Indicates whether the TCP Urgent Pointer is used in the packet. Indicates the offset. `0` indicates it’s not used. <br><br>
**WINDOW**
TCP Window size  <br><br>
**SYN**
Indicates whether the SYN flag is set. Present if the flag is there, absent otherwise. <br><br>
**ACK**
Indicates whether the ACK flag is set. Present if the flag is there, absent otherwise. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197`. <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000`<br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "NMAP XMAS Scan Detected"
<LOGTYPE> = "5006"
<EVENT_DICT> = {
                  "ID": "...",
                  "LEN": "...",
                  "MAC": "...",
                  "PREC": "...",
                  "PROTO": "...",
                  "RES": "...",
                  "TOS": "...",
                  "TTL": "...",
                  "URGP": "...",
                  "WINDOW": "...",
                  "SYN": "...",
                  "ACK": "...",
                  "timestamp": ...,
                  "timestamp_std": "..."
                }
```
:::
  </div>
</div>

## RDP Login Attempt
Triggered by interacting with the Canary's RDP service.

Currently, there are 4 different RDP service incident types:
1. RDP New Connection Incident
2. RDP Failed Connection Incident
3. RDP Confirmed Connection Incident
4. RDP Login Attenpt

<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`14001` - RDP NEW CONNECTION<br>
`14002` - RDP FAILED CONNECTION<br>
`14003` - RDP CONFIRMED CONNECTION<br>
`14004` - RDP LOGIN ATTEMPT<br>
**BUILD**
Optional. Shows the build number of the attacker's RDP client if that is exposed, otherwise absent. <br><br>
**DOMAINNAME**
Attacker supplied domain name <br><br>
**MAJORVERSION**
The major version of the attacker's RDP client (ie. 6 for 6.1). <br><br>
**MINORVERSION**
The minor version of the attacker's RDP client (ie. 1 for 6.1). <br><br>
**USERNAME**
Attacker supplied username. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

::: api-response
``` json
<EVENT_DESCRIPTION> = "RDP Login Attempt"
<LOGTYPE> = "14001 | 14002 | 14003 | 14004"
<EVENT_DICT> = {
                  "BUILD": "...",
                  "DOMAINNAME": "...",
                  "MAJORVERSION": "...",
                  "MINORVERSION": "...",
                  "USERNAME": "...",
                  "timestamp": ...,
                  "timestamp_std": "..."
               }
```

:::
  </div>
</div>

## Redis Command
Triggered by an attacker connecting to the Redis service and issuing valid Redis commands.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**CMD**
Redis command issued by the attacker. <br><br>
**ARGS**
Arguments to the command. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Redis Command"
<LOGTYPE> = "21001"
<EVENT_DICT> = {
                 "CMD": "...",
                 "ARGS": "..."
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>


## Windows File Share Incidents
Triggered by interacting with the Canary’s Windows File Share.

Currently there are 5 Windows File Share incident types:
1. Windows File Share File Opened Incident
2. Windows File Share Login Incident
3. Windows File Share Enumeration Incident
4. Windows File Share Connected Incident
5. Windows File Share Registry Connected Incident

<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`5000` - SMB FILE OPEN <br>
`5010` - SMB LOGIN <br>
`5013` - SMB GROUP ENUM <br>
`5014` - SMB SHARE CONNECT <br>
`5015` - SMB REGISTRY <br><br>
**USER**
Username supplied by the attacker. <br><br>
**FILENAME**
Name of file on the Canary that was accessed. <br><br>
**AUDITACTION**
Type of file action. Currently, only `'pread'`. <br><br>
**DOMAIN**
Name of domain or workgroup. <br><br>
**LOCALNAME**
Windows Name of Canary machine. <br><br>
**MODE**
`'workgroup'` or `'domain'`<br><br>
**OFFSET**
Starting position of the read. <br><br>
**REMOTENAME**
Windows Name of the client machine. <br><br>
**SHARENAME**
Name of the share on which the file resides. <br><br>
**SIZE**
Amount of bytes read. <br><br>
**SMBARCH**
Guess of the remote machine's Windows version. <br><br>
**SMBVER**
Version of the SMB protocol that was used. <br><br>
**STATUS**
Result of the file read. Currently, only `'ok'`. <br><br>
**LOGINTYPE**
`LOGIN` - Login Type. <br><br>
**RID**
`GROUP ENUM` - Relative Identifier. <br><br>
**SID**
`GROUP ENUM` - Security Identifier. <br><br>
**SGROUPNAME**
`GROUP ENUM` - Security Group Name. <br><br>
**AUDITACTION**
`GROUP ENUM` - Windows API Queried. <br><br>
**HIVE**
`REGISTRY` - Registry Hive. <br><br>
**REGISTRY_KEY**
`REGISTRY` - Registry Key. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Shared File Opened"
<LOGTYPE> = "5000 | 5010 | 5013 | 5014 | 5015"
<EVENT_DICT> = {
                 "USER": "...",
                 "FILENAME": "...",
                 "AUDITACTION": "...",
                 "DOMAIN": "...",
                 "LOCALNAME": "...",
                 "MODE": "...",
                 "OFFSET": "...",
                 "REMOTENAME": "...",
                 "SHARENAME": "...",
                 "SIZE": "...",
                 "SMBARCH": "...",
                 "SMBVER": "...",
                 "STATUS": "..."
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## SIP Request
Triggered by an attacker connecting to the SIP service and issuing a valid SIP request.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**HEADERS**
Dict of the SIP headers included in the request. <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "SIP Request"
<LOGTYPE> = "15001"
<EVENT_DICT> = {
                 "HEADERS": {
                   "<header_name1>": "<header_value1>",
                   "<header_name2>": "<header_value2>",
                   "<header_name3>": "<header_value3>",
                   "...": "..."
                 }
               }
```
:::
  </div>
</div>

## SNMP Request
Triggered by an incoming SNMP query against the Canary.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**COMMUNITY_STRING**
SNMP community string supplied by the attacker. <br><br>
**REQUESTS**
SNMP OID requested by the attacker. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "SNMP Request"
<LOGTYPE> = "13001"
<EVENT_DICT> = {
                 "COMMUNITY_STRING": "...",
                 "REQUESTS": "..."
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## SSH Login Attempt
Triggered by an attempt to login to the Canary using SSH. Both password-based and key-based authentication is possible.

It is also possible to configure “Watched Credentials”, which says to only alert if the attacker-supplied credentials match a configured list.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**LOGTYPE**
`4000` - SSH NEW CONNECTION <br>
`4001` - SSH REMOTE VERSION SENT <br>
`4002` - SSH LOGIN ATTEMPT <br><br>
**USERNAME**
Username supplied by the attacker. <br><br>
**PASSWORD**
Optional. The attacker's supplied password in password-based auth. <br><br>
**LOCALVERSION**
Canary's SSH version string. <br><br>
**REMOTEVERSION**
The attacker's supplied version string. <br><br>
**KEY**
Optional. The attacker's supplied public key in key-based auth. <br><br>
**WATCHED_CREDENTIALS**
Optional. Set to `'Yes'` if Watched Credentials are enabled. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "SSH Login Attempt"
<LOGTYPE> = "4000 | 4001 | 4002"
<EVENT_DICT> = {
                 "USERNAME": "...",
                 "PASSWORD": "...",
                 "LOCALVERSION": "...",
                 "REMOTEVERSION": "...",
                 "KEY": "...",
                 "WATCHED_CREDENTIALS": "...",
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## Telnet Login Attempt
Triggered by a Telnet authentication attempt.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**USERNAME**
Attacker supplied username. <br><br>
**PASSWORD**
Attacker supplied password. <br><br>
**TERMSIZE**
The size of the terminal<br><br>
**TERMTYPE**
The terminal type<br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "Telnet Login Attempt"
<LOGTYPE> = "6001"
<EVENT_DICT> = {
                 "USERNAME": "...",
                 "PASSWORD": "..."
                 "TERMSIZE": "..."        ,
                 "TERMTYPE": "..."        ,
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## TFTP request
Triggered by a TFTP request against the Canary.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**FILENAME**
Name of file the attacker tried to act on. <br><br>
**OPCODE**
File action, either `'READ'` or `'WRITE'`<br><br>
**MODE**
TFTP defines three modes of transfer: `netascii`, `octet`, and `mail`. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "TFTP Request"
<LOGTYPE> = "10001"
<EVENT_DICT> = {
                 "FILENAME": "...",
                 "OPCODE": "..."
                 "MODE": "..."
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## TN3270 Login
Triggered by a TN3270 request against the Canary.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**USERNAME**
Attacker supplied username. <br><br>
**PASSWORD**
Attacker supplied password. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "TN3270 Login Attempt"
<LOGTYPE> = "32001"
<EVENT_DICT> = {
                 "USERNAME": "...",
                 "PASSWORD": "..."
               }
```
:::
  </div>
</div>

## VNC Login Attempt
Triggered by an attempt to login to Canary’s password-protected VNC service.

VNC passwords are not transmitted in the clear. Instead, a hashed version is sent. The Canary will test the hashed password against a handful of common passwords to guess the password, but the hash parameters are also reported so the administrator can crack the hash on more powerful rigs.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**PASSWORD**
Cracked password if very weak. <br><br>
**SERVER_CHALLENGE**
VNC password hashing parameter. <br><br>
**CLIENT_RESPONSE**
VNC password hashing parameter. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

:::  api-response
``` json
<EVENT_DESCRIPTION> = "VNC Login Attempt"
<LOGTYPE> = "12001"
<EVENT_DICT> = {
                 "PASSWORD": "...",
                 "SERVER_CHALLENGE": "...",
                 "CLIENT_RESPONSE": "...",
                 "timestamp": ...,
                 "timestamp_std": "..."
               }
```
:::
  </div>
</div>

## WinRM Login Attempt
Triggered by an attempt to connect to the Canary using a WinRM agent.

<div class="section-container">
  <div class="details-content">

::: attribute-details

**USERNAME**
Attacker supplied username. <br><br>
**PASSWORD**
Optional. Attacker supplied password. This will not be present for Kerberos or NTLM authentication. <br><br>
**WORKSTATION**
Present for Kerberos auth attempts. Gives the workstation name of the attacker. <br><br>
**DOMAINNAME**
Attacker supplied domain name. <br><br>
**USERAGENT**
Optional. Gives the agent used by the attacker to connect. <br><br>
**AUTHTYPE**
The authentication type used to connect to WinRM. If present, this will be one of `'basic'`, `'ntlm'`, `'certificate'`, `'kerberos'` or `'digest'`, otherwise this will be `'unknown'`. <br><br>
**SNAME**
Present for Kerberos auth attempts. Gives the service name of the request. <br><br>
**REALM**
Present for Kerberos auth attempts. Gives the Kerberos realm. <br><br>
**TKTVNO**
Present for Kerberos auth attempts. Gives the ticket format version number of the request. <br><br>
**WINRMPAYLOAD**
The xml payload of the WinRM connection attempt. <br><br>
**timestamp**
The timestamp of the request eg. `1580378197` <br><br>
**timestamp_std**
Human readable timestamp of the request eg. `2020-01-30 09:56:37 UTC+0000` <br><br>

:::

  </div>
  <div class="example-content">

<br>

::: api-response
``` json
<EVENT_DESCRIPTION> = "WinRM Login Attempt"
<LOGTYPE> = "29001"
<EVENT_DICT> = {
                  "AUTHTYPE": "...",
                  "PASSWORD": "...",
                  "USERAGENT": "...",
                  "USERNAME": "...",
                  "WINRMPAYLOAD": "..."
               }
```
</div>
</div>
