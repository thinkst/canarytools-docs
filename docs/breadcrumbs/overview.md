---
endpoints:
  breadcrumb_generate:
    name: Generate Breadcrumb
    url: /api/v1/breadcrumb/generate
    method: GET
    description: Generate a specific breadcrumb type for the target bird.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token. Also supports read-only [Flock API keys](/flocks-settings/flock-auth-token.html).
      - name: node_id
        required: false
        type: string
        description: A valid Canary node_id.
      - name: kind
        required: true
        type: string
        description: Name of desired breadcrumb type. Please check "[Available Breadcrumb Kinds](/breadcrumbs/overview.html#available-breadcrumb-kinds)"
                     for the different Breadcrumb kind values.
      - name: mode
        required: false
        type: string
        description: Determines the output mode of the breadcrumb. `text` places the full contents of the breadcrumb into the `crumb` output field and `json` splits the contents into separate fields.
      - name: reminder
        required: false
        type: string
        description: A reminder that will be included in the alert to let you know where you deployed this breadcrumb. This field is required for [Credential Breadcrumb Kinds](/breadcrumbs/overview.html#credential-breadcrumb-kinds).
    response: JSON structure with output content of the crumb generation.
  breadcrumb_download:
    name: Download Breadcrumb
    url: /api/v1/breadcrumb/download
    method: GET
    description: Download specific breadcrumb type for a target bird, or an archive of all possible breadcrumbs.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token. Also supports read-only [Flock API keys](/flocks-settings/flock-auth-token.html).
      - name: node_id
        required: false
        type: string
        description: A valid Canary node_id.
      - name: kind
        required: false
        type: string
        description: Name of desired breadcrumb type. Please check "[Available Breadcrumb Kinds](/breadcrumbs/overview.html#available-breadcrumb-kinds)"
                     for the different Breadcrumb kind values. If not specified, an archive of all possible breadcrumbs will be returned.
      - name: mode
        required: false
        type: string
        description: Determines the output mode of the breadcrumb. `text` produces a single text file with the contents of the breadcrumb and `zip` produces a zip archive of the contents.
      - name: reminder
        required: false
        type: string
        description: A reminder that will be included in the alert to let you know where you deployed this breadcrumb. This field is required for [Credential Breadcrumb Kinds](/breadcrumbs/overview.html#credential-breadcrumb-kinds).
    response: Temporary download link or archive of different breadcrumbs.
---

# Overview

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

Breadcrumbs are a powerful tool for guiding attackers towards your Canaries. They take the form of profiles or device entries across various different services that an attacker might poke at for vulnerable hosts, leading them directly towards a Canary.

Breadcrumbs are built based on the enabled services of a specific target bird and are templated with the various settings and parameters configured for those services.

The following services and breadcrumb kinds are currently supported:
:::::

</APIEndpoints>

### Available Breadcrumb Kinds
| Kind | Service | Creates Credentials | Description |
|---|---|---|---|---|
| ssh-key | SSH | Yes | SSH Key. This crumb generates a valid SSH key pair and a sample config entry. We will provide an extra alert if the public key is detected in any future SSH events on your Canary. You can deploy this breadcrumb by placing the public and private key files into a host's `.ssh/` folder, and copying the Host entry into `.ssh/config`.|
| putty-profile | SSH | No | SSH PuTTY Profile. This crumb creates a session profile for the Canary on the PuTTY SSH client. On a Windows host that runs PuTTY, you can import the session by double clicking the crumb file, or by running `reg import putty-sessions.reg` in PowerShell or `regedit /i putty-sessions.reg` in a terminal. |
| rdp-profile | RDP | No | Remote Desktop Profile. This crumb can either be treated like a Canarytoken and left in place somewhere on a host where an attacker might stumble onto it, or it can be imported into Microsoft Remote Desktop as a profile. |
| filezilla-profile | File Transfer (FTP) | No | FTP FileZilla Profile. This crumb creates a Site Manager entry for the FileZilla FTP client. In FileZilla, select File > Import, and import the crumb. This will make the Canary visible in Site Manager. |
| winscp-profile | File Transfer (FTP) | No | WinSCP Profile. This crumb creates a session profile for the Canary on the WinSCP FTP client. On a Windows host that runs WinSCP, you can import the session by double clicking the crumb file, or by running `reg import winscp-sessions.reg` in PowerShell or `regedit /i winscp-sessions.reg` in a terminal. |
| windows-ftp-shortcut | File Transfer (FTP) | No | Windows FTP Server Shortcut. This crumb creates a Windows file shortcut to the bird's FTP service. The crumb can be created by dropping the script in the desired location and running it with PowerShell. |
| windows-smb-shortcut | Windows File Share | No | Windows SMB Server Shortcut. This crumb creates a Windows file shortcut to the bird's SMB service. The crumb can be created by dropping the script in the desired location and running it with PowerShell. |
| macos-http-shortcut | Webserver | No | MacOS HTTP Shortcut. This crumb creates a MacOS web page shortcut. The crumb file can simply be dropped somewhere that an attacker might click into it. |
| macos-https-shortcut | Webserver | No | MacOS HTTPS Shortcut. This crumb creates a MacOS web page shortcut. The crumb file can simply be dropped somewhere that an attacker might click into it. |
| windows-http-shortcut | Webserver | No | Windows HTTP Shortcut. This crumb creates a Windows web page shortcut. The crumb file can simply be dropped somewhere that an attacker might click into it. |
| windows-https-shortcut | Webserver | No | Windows HTTPS Shortcut. This crumb creates a Windows web page shortcut. The crumb file can simply be dropped somewhere that an attacker might click into it. |

::: tip
Remember to make sure that the desired services are enabled and reachable on the Canary before deploying breadcrumbs. The services can either be enabled on the Console UI, or via the "[device configuration](/bird-management/service-configuration.html)" endpoints.
:::

### Breadcrumb Credentials
Certain Breadcrumbs generate and store valid credentials that act as an identifier for the Breadcrumb and make them more appealing to attackers. When creating these Breadcrumbs you must provide a reminder, which we will alert you with if the credentials are used in an attack on any of your Canaries.

As these Breadcrumb kinds produce static credentials, you can generate them without supplying a `node_id` to create a set of valid credentials which will still alert on use without creating configuration files referencing a specific Canary.

These Breadcrumbs are currently excluded from the archive produced by Downloading without a specified kind.

## Generate Breadcrumb

<APIDetails :endpoint="$page.frontmatter.endpoints.breadcrumb_generate">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/breadcrumb/generate \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  -d kind=EXAMPLE_KIND \
  -G
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/breadcrumb/generate'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id':'EXAMPLE_NODE_ID',
  'kind':'EXAMPLE_KIND',
}

r = requests.get(url, params=payload)

print(r.json())
```

:::

::::


::: api-response
```json
{
  "crumb": "$LNKFILE = `EXAMPLE_NODE.lnk`\n$WshShell = New-Object -comObject WScript.Shell\n$Shortcut = $WshShell.CreateShortcut(`$LNKFILE`)\n$Shortcut.TargetPath = `\\\\192.168.0.1\\\\`\n$Shortcut.Save()",
  "readme": "\n# SMB Shortcut\nThis crumb creates a windows file shortcut to the bird`s SMB service.\n\nThe crumb can be created by dropping the script in the desired location and running it with\nPowerShell",
  "title": "EXAMPLE_NODE.ps1",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Download Breadcrumb

<APIDetails :endpoint="$page.frontmatter.endpoints.breadcrumb_download">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/breadcrumb/download \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d node_id=EXAMPLE_NODE_ID \
  --output ./crumb_archive.zip \
  -G
```

:::

::: tab "Python"

``` python
import requests
import re

url = 'https://EXAMPLE.canary.tools/api/v1/breadcrumb/download'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'node_id':'EXAMPLE_NODE_ID',
}

r = requests.get(url, allow_redirects=True, params=payload)
filename = re.findall("filename=(.+)", r.headers["Content-Disposition"])[0]
with open(filename, 'wb') as f:
    f.write(r.content)
```

:::

::::


::: api-response
```bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  3806  100  3806    0     0   5368      0 --:--:-- --:--:-- --:--:--  5368
```
:::

:::::

</APIDetails>