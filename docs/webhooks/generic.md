# Generic Webhook events

Your Canary Console can be configured to send alerts or audit trail records to any webhook of your choice.

## Generic webhook integration test event

During configuration of your generic webhook, your Canary Console will post the following JSON object to your webhook to check that the integration is working as expected.

```json
{
  "Description": "Fake Location",
  "Timestamp": "2026-02-02 14:10:14 (UTC)",
  "CanaryName": "DummyDevice",
  "CanaryID": "0000000testnode",
  "CanaryIP": "1.1.1.1",
  "Flock": "flock:dummyincidentflock",
  "SourceIP": "2.2.2.2",
  "CanaryLocation": "Fake Location",
  "ReverseDNS": "theattackers.ip.local",
  "Intro": "This is a dummy incident.",
  "AdditionalDetails": [
    ["Field1", "VALUE1"],
    ["Field2", "VALUE2"],
    ["Field3", "VALUE3"]
  ],
  "AlertType": "CanaryIncident",
  "LogType": 111111
}
```

## Incidents

### Structure for Incidents

Incidents are posted to your webhook as a JSON object. The `AdditionalDetails` field changes depending on the incident type.

```json
{
  "Description": "<Incident type>",
  "Timestamp": "<Incident timestamp>",
  "CanaryName": "<Name of the Canary on which the incident was created>",
  "CanaryID": "<Node ID of the Canary on which the incident was created>",
  "CanaryIP": "<IP address of the Canary on which the incident was created>",
  "SourceIP": "<IP address of the host that connected to the Canary>",
  "CanaryLocation": "<Location of the Canary on which the incident was created>",
  "ReverseDNS": "<Hostname of the host that connected to the Canary>",
  "CanaryPort": "<Port on which the Canary accepted the connection>",
  "IncidentHash": "<Hash of the incident>",
  "Intro": "<Single line summary of the incident>",
  "AdditionalDetails": [
    ["DetailKey1", "DetailValue1"],
    ["DetailKey2", "DetailValue2"]
  ],
  "AlertType": "CanaryIncident",
  "LogType": "<Numeric log type of the incident>",
  "MatchedAnnotations": "{}"
}
```

### Examples of Incident payloads

**FTP Login**

```json
{
  "Description": "FTP Login Attempt",
  "Timestamp": "2026-02-02 14:19:02 (UTC)",
  "CanaryName": "canary",
  "CanaryID": "000123456789abcd",
  "CanaryIP": "192.168.1.2",
  "SourceIP": "192.168.1.1",
  "CanaryLocation": "Server room A",
  "ReverseDNS": "",
  "CanaryPort": 21,
  "IncidentHash": "bc84b27ca5327d9d7f915fadae7ef9a4",
  "Intro": "FTP Login Attempt has been detected against one of your Canaries (newdevicename) at 192.168.1.2.",
  "AdditionalDetails": [
    ["Username", "username"],
    ["Password", "*******"],
    ["Background Context", "You have had 2 incidents from 192.168.1.1 previously."]
  ],
  "AlertType": "CanaryIncident",
  "LogType": "2000",
  "MatchedAnnotations": "{}"
}
```

**Canarytoken Triggered**

```json
{
  "Description": "Web Bug Canarytoken triggered",
  "Timestamp": "2026-02-02 14:12:38 (UTC)",
  "Reminder": "Link in my inbox",
  "Token": "xxxxxxxxxxxxxxxxxxxxxxxxx",
  "SourceIP": "1.1.1.1",
  "IncidentHash": "6e03471c0ab5905579e8dbd170a7ebb0",
  "Intro": "A Web Bug Canarytoken was triggered by '1.1.1.1'.",
  "AdditionalDetails": [
    ["Accept", "text/html,..."],
    ["Accept-Encoding", "gzip, deflate"],
    ["Accept-Language", "en-GB..."],
    ["Background Context", "You have had 2 incidents from 1.1.1.1 previously."],
    ["Connection", "keep-alive"],
    ["Dst Port", 80],
    ["Host", "example.com"],
    ["Src Port", 64487],
    ["Upgrade-Insecure-Requests", "1"],
    ["User-Agent", "Mozilla/5.0 ..."]
  ],
  "AlertType": "CanarytokenIncident",
  "Triggered": "1",
  "LogType": "17000",
  "MatchedAnnotations": "{}"
}
```

## Audit Trail events

### Structure for Audit Trail events

Audit Trail events are posted to your webhook as a JSON object.

```json
{
  "type": "console-audit",
  "payload": {
    "timestamp": "<timestamp of the audit event>",
    "message": "<message describing audit event>",
    "action_type": "<type of audit event>",
    "flock_id": "<ID of the flock related to the action if any>",
    "flock_name": "<name of the flock related to the action if any>",
    "user": "<the user that performed the action>",
    "user_ip": "<IP address of the user that performed the action>",
    "user_browser_agent": "<browser user agent of the user that performed the action>",
    "user_browser_language": "<browser language of the user that performed the action>",
    "user_access_route": "<contains proxy header information>"
  }
}
```

### Examples of Audit Trail event payloads

**Canarytoken creation**

```json
{
  "type": "console-audit",
  "payload": {
    "timestamp": "2026-02-02T14:12:34+00:00",
    "message": "Created a Web Bug Canarytoken xxxxxxxxxxxxxxxxxxxxxxxxx",
    "action_type": "canarytoken_create",
    "flock_id": "flock:default",
    "flock_name": "Default Flock",
    "user": "example@thinkst.com",
    "user_ip": "1.1.1.1",
    "user_browser_agent": "Mozilla/5.0 ...",
    "user_browser_language": "en-GB ...",
    "user_access_route": ""
  }
}
```

**User login**

```json
{
  "type": "console-audit",
  "payload": {
    "timestamp": "2026-02-02T14:17:54+00:00",
    "message": "User example@thinkst.com logged in",
    "action_type": "user_login",
    "flock_id": null,
    "flock_name": null,
    "user": "example@thinkst.com",
    "user_ip": "1.1.1.1",
    "user_browser_agent": "Mozilla/5.0 ...",
    "user_browser_language": "en-GB,...",
    "user_access_route": ""
  }
}
```