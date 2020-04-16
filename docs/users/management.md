---
endpoints:
  globally_enforce_2fa_disable:
    name: Disable Globally Enforcing 2FA
    url: /api/v1/settings/usermanagement/globally_enforce_2fa/disable
    method: POST
    description: Do not force users to use 2FA when logging into your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with result indicator.
  globally_enforce_2fa_enable:
    name: Enable Globally Enforcing 2FA
    url: /api/v1/settings/usermanagement/globally_enforce_2fa/enable
    method: POST
    description: Force users to use 2FA when logging into your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with result indicator.
  add_user:
    name: Add User
    url: /api/v1/user/add
    method: POST
    description: Add a new user to your Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be added
      - name: access_level
        required: true
        type: string
        description: The user access level of the user. Either 'admin' or 'user'
      - name: totp_enabled
        required: false
        type: boolean
        description: Whether to enable two-factor authentication for this user or not
      - name: note
        required: false
        type: string
        description: A text string for storing information related to the user
      - name: send_welcome_mail
        required: false
        type: boolean
        default: true
        description: Whether to send the user an email with the login link or not
    response: JSON structure with result indicator.
  disable_user:
    name: Disable User
    url: /api/v1/user/disable
    method: POST
    description: Disables a specified user. This user will not be able to login.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be disabled
  edit_user:
    name: Edit User
    url: /api/v1/user/edit
    method: POST
    description: Edits a specified user.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be edited
      - name: note
        required: false
        type: string
        description: A text string for storing information related to the user
  edit_user_access_level:
    name: Edit User Access Level
    url: /api/v1/user/edit/access_level
    method: POST
    description: Edits a user's access level.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be edited
      - name: access_level
        required: true
        type: string
        description: Access level to change to (Either 'admin' or 'user')
    response: JSON structure with result indicator.
  enable_user:
    name: Enable User
    url: /api/v1/user/enable
    method: POST
    description: Enables a specified user. This user will be able to login if previously disabled.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be enabled
    response: JSON structure with result indicator.
  disable_user_2fa:
    name: Disable User's TOTP
    url: /api/v1/user/2fa/disable
    method: POST
    description: Disables TOTP for a specified user.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user
    response: JSON structure with result indicator.
  assign_user_flocks:
    name: Assign a User to flocks
    url: /api/v1/user/flock/assign
    method: POST
    description: Assign a user to one or more flocks.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user
      - name: flock_id_list
        required: true
        type: string
        description: A comma separated list of the flocks the user should be assigned (1 or more)
      - name: flock_access_level
        required: true
        type: string
        description: The type of privileges the user should have (Either 'manager' or 'watcher')
    response: JSON structure with result indicator.
  unassign_user_flocks:
    name: Remove a User from flocks
    url: /api/v1/user/flock/unassign
    method: POST
    description: Remove a user to one or more flocks.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user
      - name: flock_id_list
        required: true
        type: string
        description: A comma separated list of the flocks the user should be removed from (1 or more)
      - name: flock_access_level
        required: true
        type: string
        description: The type of privileges the user should have (Either 'manager' or 'watcher')
    response: JSON structure with result indicator.
  add_user_note:
    name: Add User Note
    url: /api/v1/user/note/add
    method: POST
    description: Add a note to a user.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user
      - name: note
        required: true
        type: string
        description: A text string for storing information related to the user
    response: JSON structure with result indicator.
  delete_user_note:
    name: Delete User Note
    url: /api/v1/user/note/delete
    method: DELETE
    description: Remove a user's note.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user
    response: JSON structure with result indicator.
  reset_user_password:
    name: Reset User Password
    url: /api/v1/user/password/reset
    method: POST
    description: Reset a user's password.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user whose password will be reset
    response: JSON structure with result indicator.
  remove_user:
    name: Remove User
    url: /api/v1/user/remove
    method: POST
    description: Remove a user from the Console.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be removed
    response: JSON structure with result indicator.
  disable_user_webauthn:
    name: Disable User's WebAuthn
    url: /api/v1/user/webauthn/disable
    method: POST
    description: Disable WebAuthn for a specified user.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be removed
    response: JSON structure with result indicator.
---

# Management


<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to deal with user management.

:::::

</APIEndpoints>

## 2FA

Currently we support TOTP and WebAuthn as Two-factor Authentication methods. Enforcing users to use one of these is a great way to ensure that extra bit of security for your users.

### Disable Globally Enforcing 2FA

<APIDetails :endpoint="$page.frontmatter.endpoints.globally_enforce_2fa_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/usermanagement/globally_enforce_2fa/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/usermanagement/globally_enforce_2fa/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
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

### Enable Globally Enforcing 2FA

<APIDetails :endpoint="$page.frontmatter.endpoints.globally_enforce_2fa_disable">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/settings/usermanagement/globally_enforce_2fa/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/settings/usermanagement/globally_enforce_2fa/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN'
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

## Add User

<APIDetails :endpoint="$page.frontmatter.endpoints.add_user">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/add \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL \
  -d access_level=user
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/add'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL',
  'access_level': 'user'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "User (<user_email>) successfully created.",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Add User Note

<APIDetails :endpoint="$page.frontmatter.endpoints.add_user_note">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/note/add \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL \
  -d note=EXAMPLE_NOTE
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/note/add'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL',
  'note': 'EXAMPLE_NOTE'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "User (<user_email>) note successfully added.",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Assign User to Flocks

<APIDetails :endpoint="$page.frontmatter.endpoints.assign_user_flocks">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/flock/assign \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL \
  -d flock_id_list='flock:default,EXAMPLE_FLOCK_ID' \
  -d flock_access_level=watcher
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/flock/assign'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL',
  'flock_id_list': 'flock:default,EXAMPLE_FLOCK_ID',
  'flock_access_level': 'watcher'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg":"User <user_email> successfully assigned to watcher flock(s) [u'flock:default', u'<flock_id>']",
  "result":"success"
}
```
:::

:::::

</APIDetails>

## Disable User

<APIDetails :endpoint="$page.frontmatter.endpoints.disable_user">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "User (<user_email>) successfully disabled.",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Disable User's TOTP

::: tip
This is useful for when a user loses access to their Two Factor authentication app (for example losing their phone) and cannot log in to the Console. Temporarily disabling their TOTP will allow them to log back into the Console and reset it.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.disable_user_2fa">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/2fa/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/2fa/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "Successfully disabled two-factor authentication for user <user_email>",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Disable User's WebAuthn

::: tip
This is useful for when a user loses access to their WebAuthn authenticator (for example losing their YubiKey) and cannot log in to the Console. Temporarily disabling their WebAuthn will allow them to log back into the Console and reset it.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.disable_user_webauthn">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/webauthn/disable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/webauthn/disable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL'
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

## Edit User

<APIDetails :endpoint="$page.frontmatter.endpoints.edit_user">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/edit \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL \
  -d note='Example note'
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/edit'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL',
  'note': 'Example note'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "User (<user_email>) successfully edited.",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Edit User Access Level

<APIDetails :endpoint="$page.frontmatter.endpoints.edit_user_access_level">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/edit/access_level \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL \
  -d access_level=admin
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/edit/access_level'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL',
  'access_level': 'admin'
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

## Enable User

<APIDetails :endpoint="$page.frontmatter.endpoints.enable_user">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/enable \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/enable'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "User (<user_email>) successfully enabled.",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Remove User

<APIDetails :endpoint="$page.frontmatter.endpoints.remove_user">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/remove \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/remove'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "User (<user_email>) successfully removed.",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Remove User from Flocks

<APIDetails :endpoint="$page.frontmatter.endpoints.unassign_user_flocks">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/flock/unassign \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL \
  -d flock_id_list='flock:default,EXAMPLE_FLOCK_ID' \
  -d flock_access_level=manager
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/flock/unassign'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL',
  'flock_id_list': 'flock:default,EXAMPLE_FLOCK_ID',
  'flock_access_level': 'manager'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "User <user_email> successfully unassigned from manager flock(s) [u'flock:default', u'<flock_id>']",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Remove User Note

<APIDetails :endpoint="$page.frontmatter.endpoints.delete_user_note">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl -X DELETE https://EXAMPLE.canary.tools/api/v1/user/note/delete \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/note/delete'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL'
}

r = requests.delete(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "User (<user_email>) note successfully removed.",
  "result": "success"
}
```
:::

:::::

</APIDetails>

## Reset User Password

::: tip
When resetting a user's password, they'll receive a "Password Reset" email.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.reset_user_password">

::::: slot example

:::: tabs :options="{ useUrlFragment: false }"

::: tab "cURL"

``` bash
curl https://EXAMPLE.canary.tools/api/v1/user/password/reset \
  -d auth_token=EXAMPLE_AUTH_TOKEN \
  -d email=EXAMPLE_USER_EMAIL 
```

:::

::: tab "Python"

``` python
import requests

url = 'https://EXAMPLE.canary.tools/api/v1/user/password/reset'

payload = {
  'auth_token': 'EXAMPLE_AUTH_TOKEN',
  'email': 'EXAMPLE_USER_EMAIL'
}

r = requests.post(url, data=payload)

print(r.json())
```

:::

::::

::: api-response
```json
{
  "msg": "Password reset email sent to <user_email>",
  "result": "success"
}
```
:::

:::::

</APIDetails>
