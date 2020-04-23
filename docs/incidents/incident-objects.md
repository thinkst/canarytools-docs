# Incident Objects

Each log entry is termed an event, and consists of actions such as a single SSH login attempt, or a single POST to a web site, or a single SIP request. An event will result in an incident being created, but subsequent similar events from the same source will be bundle together if they occur in close proximity. This means that if someone launches a brute-force attack, there is a single incident created with an event assigned to each login attempt.

The incident object contains a record of the individual events that constitute the incident.

## Basic Structure

Incident feeds have this basic structure:

:::  api-response
``` json
{
  "feed": "Unacknowledged Incidents",
[...]
  "incidents": [
    {
      "id": "...",
      "summary": "<EVENT_DESCRIPTION>",
      "updated": "...",           /* Human readible date when the incident was updated */
      "updated_std": "...",       /* The date/time when the incident was updated in the format "YYYY-MM-DD HH:MM:SS TZ" */
      "updated_time": "..."       /* Timestamp of the updated time eg. "1574945951" */
[...]
      "description": {
[...]
        "logtype": "<LOGTYPE>",
        "description": "<EVENT_DESCRIPTION>",
        "created": "...",         /* Timestamp of the incident cretaion time eg. "1574945951" */
        "created_std": "...",     /* The date/time when the incident was created in the format "YYYY-MM-DD HH:MM:SS TZ" */
        "dst_host": "...",        /* Optional - The destination IP address of the attack */
        "dst_port": "...",        /* Optional - The destination port of the attack */
        "events": [
          <EVENT_DICT>,
          <EVENT_DICT>,
          ...,
        ]
        "events_count": "...",      /* Number of events for the incident */
        "name": "...",              /* Optional - The name of the device on which the incident occurred */
        "node_id": "...",           /* Optional - The node_id of the device on which the incident occurred */
        "src_host": "...",          /* The source IP address of the attacker */
        "src_host_reverse": "...",  /* The source hostname of the attacker */
        "src_port": "..."           /* The source port of the attacker */
      }
    }
  ]
}
```
:::

The “events” field contains a list of <EVENT_DICT> s. In the incident types below, only the <EVENT_DESCRIPTION> and <EVENT_DICT> values are defined as the rest of the incident object is the same across the various incident types.

All fields will be present in each incident, unless noted otherwise.

The actual data returned by the API may include additional fields. However any field not described in this document should be considered experimental and likely to disappear.

## Canarytokens

There are two types of Canarytokens, HTML and DNS.

### HTML
<div class="section-container">
  <div class="details-content">


**type** <br>
<span style="font-size:0.9em;">A string containing the token type (`html` or `dns`)</span><br>
**canarytoken** <br>
<span style="font-size:0.9em;">Unique string that acts as the Canarytoken.</span><br>
**headers** <br>
<span style="font-size:0.9em;">Headers is a dict. Only present for HTTP Canarytokens.</span><br>
**url** <br>
<span style="font-size:0.9em;">URL of the HTTP Canarytoken</span>

  </div>
  <div class="example-content">

:::  api-response 
``` json
<EVENT_DESCRIPTION> = "Canarytoken triggered"
<LOGTYPE> = "17000"
<EVENT_DICT> = {
                 "type": "http",
                 "canarytoken": "<tokenvalue>",      
                 "headers" : {                      
                   <headername_1>: <headervalue_1> , <headername_2>: <headervalue_2> , ...
                 },
                 "url": "<tokenurl>",                  
               }
```
:::
  </div>
</div>

### DNS
<div class="section-container">
  <div class="details-content">

**type** <br>
<span style="font-size:0.9em;">A string containing the toke type (`html` or `dns`)</span> <br>
**canarytoken** <br>
<span style="font-size:0.9em;">Unique string that acts as the Canarytoken.</span> <br>
**hostname** <br>
<span style="font-size:0.9em;">Hostname of the DNS Canarytoke </span><br>

  </div>
  <div class="example-content">

:::  api-response 
``` json
<EVENT_DESCRIPTION> = "Canarytoken triggered"
<LOGTYPE> = "16000"
<EVENT_DICT> = {
                 "type": "dns",
                 "canarytoken": "<tokenvalue>",      
                 "hostname": "<tokenhostname>"       
               }
```
:::
  </div>
</div> 

## Port Scans

There are six types of port scans incidents.

 1. A host port scan is occurs when a single Canary is port scanned by a single source.
 2. A consolidated network port scan occurs when multiple Canaries are scanned by a single source.
 3. An NMAP FIN scan was run against the Canary.
 4. An NMAP NULL scan was run against the Canary.
 5. An NMAP OS scan was run against the Canary.
 6. An NMAP XMAS scan was run against the Canary.

### Host Port Scan
<div class="section-container">
  <div class="details-content">


**ports** <br>
<span style="font-size:0.9em;">List of comma-separated ports.</span><br>
**timestamp** <br>
<span style="font-size:0.9em;">The timestamp of the request eg. 1580378197.</span><br>
**timestamp_std** <br>
<span style="font-size:0.9em;">Human readble timestamp of the request eg. 2020-01-30 09:56:37 UTC+0000</span><br>

  </div>
  <div class="example-content">

:::  api-response 
``` json
<EVENT_DESCRIPTION> = "Host Port Scan"
<LOGTYPE> = "5003"
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

**EVENT_DICT** <br/>
    <span style="font-size:0.9em;">The dict's keys are port numbers, and the values are lists of IP addresses.</span> <br>
**canarytoken** <br>
    <span style="font-size:0.9em;">Unique string that acts as the Canarytoken.</span> <br>
**hostname** <br>
    <span style="font-size:0.9em;">Hostname of the DNS Canarytoke </span><br>

  </div>
  <div class="example-content">

:::  api-response 
``` json
<EVENT_DESCRIPTION> = "Consolidated Network Port Scan"
<LOGTYPE> = "5007"
<EVENT_DICT> = {                                      /* The dict's keys are port numbers, and the values are lists of IP addresses. */
                 "445": [                             /* Port number on the Canary. */
                   "54.251.1.27",                     /* Canaries that were targeted. */
                   "54.251.35.179"
                 ],
                 "80": [
                   "54.251.1.26",
                   "54.251.3.10"
                 ]
               }
```
:::
  </div>
</div>

### NMAP FIN Scan
<div class="section-container">
  <div class="details-content">

<br>
<div style="line-height: 12px;"><strong>Item</strong></div>
<div style="line-height: 30px;font-size:0.9em;">Definition</div>
<div style="line-height: 12px;"><strong>Item</strong></div>
<div style="line-height: 30px;font-size:0.9em;">Definition</div>

**ID** <br>
<span style="font-size:0.9em;">IP packet ID</span> <br>
**LEN** <br>
<span style="font-size:0.9em;">Length of IP packet</span> <br>
**MAC** <br>
<span style="font-size:0.9em;">First N bytes from the packet. Destination MAC (i.e. Canary) is the first 6 bytes, source MAC is the next 6 bytes, and the remainder is a peek into the reset of the packet </span><br>
**PREC** <br>
<span style="font-size:0.9em;">Precedent bits, almost always 0x00 </span><br>
**PROTO** <br>
<span style="font-size:0.9em;">The protocol used </span><br>
**RES** <br>
<span style="font-size:0.9em;">Reserved bits, almost always 0x0  </span><br>
**TOS** <br>
<span style="font-size:0.9em;">IP Type of Service field, almost always 0x00 </span><br>
**TTL** <br>
<span style="font-size:0.9em;">Time-to-live on the IP packet </span><br>
**URGP** <br>
<span style="font-size:0.9em;">Indicates whether the TCP Urgent Pointer is used in the packet. Indicates the offset. 0 indicates it’s not used. </span><br>
**WINDOW** <br>
<span style="font-size:0.9em;">TCP Window size  </span><br>
**SYN** <br>
<span style="font-size:0.9em;">Indicates whether the SYN flag is set. Present if the flag is there, absent otherwise. </span><br>
**ACK** <br>
<span style="font-size:0.9em;">Indicates whether the ACK flag is set. Present if the flag is there, absent otherwise. </span><br>
**timestamp** <br>
<span style="font-size:0.9em;">The timestamp of the request eg. 1580378197.</span><br>
**timestamp_std** <br>
<span style="font-size:0.9em;">Human readble timestamp of the request eg. 2020-01-30 09:56:37 UTC+0000</span><br>

  </div>
  <div class="example-content">

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
