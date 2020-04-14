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
        description: Whether to send the user an email with the login link or not (defaults to 'True')
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

<APIDetails :endpoint="$page.frontmatter.endpoints.globally_enforce_2fa_disable"/>

### Enable Globally Enforcing 2FA

<APIDetails :endpoint="$page.frontmatter.endpoints.globally_enforce_2fa_disable"/>

## Add User

<APIDetails :endpoint="$page.frontmatter.endpoints.add_user"/>

## Add User Note

<APIDetails :endpoint="$page.frontmatter.endpoints.add_user_note"/>

## Assign User to Flocks

<APIDetails :endpoint="$page.frontmatter.endpoints.assign_user_flocks"/>

## Disable User

<APIDetails :endpoint="$page.frontmatter.endpoints.disable_user"/>

## Disable User's TOTP

::: tip
This is useful for when a user loses access to their Two Factor authentication app (for example losing their phone) and cannot log in to the Console. Temporarily disabling their TOTP will allow them to log back into the Console and reset it.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.disable_user_2fa"/>

## Disable User's WebAuthn

::: tip
This is useful for when a user loses access to their WebAuthn authenticator (for example losing their YubiKey) and cannot log in to the Console. Temporarily disabling their WebAuthn will allow them to log back into the Console and reset it.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.disable_user_webauthn"/>

## Edit User

<APIDetails :endpoint="$page.frontmatter.endpoints.edit_user"/>

## Edit User Access Level

<APIDetails :endpoint="$page.frontmatter.endpoints.edit_user_access_level"/>

## Enable User

<APIDetails :endpoint="$page.frontmatter.endpoints.enable_user"/>

## Remove User

<APIDetails :endpoint="$page.frontmatter.endpoints.remove_user"/>

## Remove User from Flocks

<APIDetails :endpoint="$page.frontmatter.endpoints.unassign_user_flocks"/>

## Remove User Note

<APIDetails :endpoint="$page.frontmatter.endpoints.delete_user_note"/>

## Reset User Password

::: tip
When resetting a user's password, they'll receive a "Password Reset" email.
:::

<APIDetails :endpoint="$page.frontmatter.endpoints.reset_user_password"/>

