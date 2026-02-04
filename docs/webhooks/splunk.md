# Splunk Webhook events

Your Canary Console can be configured to send alerts or audit trail records to your Splunk server's HTTP event collector.

## Splunk integration test event

During configuration of your Splunk webhook, your Canary Console will post the following JSON object to your Splunk server's HEC to check that the integration is working as expected.

```json
{
  "sourcetype": "canary_test_connection",
  "event": "Hello from your Canary Console, this event was created in order to test the connection from your Canary Console webhook integration to your Splunk HEC"
}
```

## Incidents

### Structure for Incidents

Incidents are posted to your Splunk server's HEC as a JSON object. The `AdditionalDetails` field changes depending on the incident type.

```json
{
  "sourcetype": "canary_alerts",
  "event": {
    "AlertType": "CanaryIncident",
    "Description": "<Incident type>",
    "Intro": "<Single line summary of the incident>",
    "Timestamp": "<Incident timestamp>",
    "CanaryName": "<Name of the Canary on which the incident was created>",
    "CanaryID": "<Node ID of the Canary on which the incident was created>",
    "CanaryIP": "<IP address of the Canary on which the incident was created>",
    "CanaryPort": "<Port on which the Canary accepted the connection>",
    "CanaryLocation": "<Location of the Canary on which the incident was created>",
    "SourceIP": "<IP address of the host that connected to the Canary>",
    "ReverseDNS": "<Hostname of the host that connected to the Canary>",
    "AdditionalDetails": [
      ["DetailKey1", "DetailValue1"],
      ["DetailKey2", "DetailValue2"]
    ]
  }
}
```

### Examples of Incident payloads

**FTP Login**

```json
{
    "event": {
      "Description": "FTP Login Attempt",
      "Timestamp": "2026-02-02 13:42:43 (UTC)",
      "CanaryName": "canary",
      "CanaryID": "000123456789abcd",
      "CanaryIP": "192.168.1.2",
      "SourceIP": "192.168.1.1",
      "CanaryLocation": "Server room A",
      "ReverseDNS": "",
      "CanaryPort": 21,
      "IncidentHash": "76b601e32e8fdca643a526cf37d00ace",
      "Intro": "FTP Login Attempt has been detected against one of your Canaries (canary) at 192.168.1.2.",
      "AdditionalDetails": [
        ["Username", "user"],
        ["Password", "*******"],
        ["Background Context", "You have had 2 incidents from 192.168.1.1 previously."]
      ],
      "AlertType": "CanaryIncident"
    },
    "sourcetype": "canary_alerts"
  }
```

**Canarytoken Triggered**

```json
{
  "sourcetype": "canary_alerts",
  "event": {
    "Description": "Web Bug Canarytoken triggered",
    "Timestamp": "2026-02-02 13:52:11 (UTC)",
    "Reminder": "Link in my inbox",
    "Token": "xxxxxxxxxxxxxxxxxxxxxxxxx",
    "SourceIP": "1.1.1.1",
    "IncidentHash": "824cfc86b42b830f71517938410b6506",
    "Intro": "A Web Bug Canarytoken was triggered by '1.1.1.1'.",
    "AdditionalDetails": [
      ["Accept", "text/html,..."],
      ["Accept-Encoding", "gzip, deflate"],
      ["Accept-Language", "en-GB ..."],
      ["Background Context", "You have had 2 incidents from 1.1.1.1 previously."],
      ["Connection", "keep-alive"],
      ["Dst Port", 80],
      ["Host", "example.com"],
      ["Src Port", 62416],
      ["Upgrade-Insecure-Requests", "1"],
      ["User-Agent", "Mozilla/5.0 ..."]
    ],
    "AlertType": "CanarytokenIncident",
    "Triggered": "1"
  }
}
```

## Audit Trail events

### Structure for Audit Trail events

Audit Trail events are posted to your Splunk server's HEC as a JSON object.

```json
{
  "sourcetype": "canary_console_audit",
  "event": {
    "timestamp": "<timestamp of the audit event>",
    "action_type": "<type of audit event>",
    "message": "<message describing audit event>",
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
  "sourcetype": "canary_console_audit",
  "event": {
    "timestamp": "2026-02-02T13:46:42+00:00",
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
  "sourcetype": "canary_console_audit",
  "event": {
    "timestamp": "2026-02-02T13:54:59+00:00",
    "message": "User example@thinkst.com logged in",
    "action_type": "user_login",
    "flock_id": null,
    "flock_name": null,
    "user": "example@thinkst.com",
    "user_ip": "1.1.1.1",
    "user_browser_agent": "Mozilla/5.0 ...",
    "user_browser_language": "en-GB ...",
    "user_access_route": ""
  }
}
```