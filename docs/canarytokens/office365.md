---
endpoints:
  initiate_office_365:
    name: Initiate Office365 Canarytoken creation
    url: /api/v1/canarytoken/office365/initiate
    method: POST
    description: Initiates the creation of an Office365 Canarytoken
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        default: "'flock:default'"
        description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))
    response: A JSON structure with a result indicator and state value used for oauth process.
  list_office_365_users:
    name: List Office365 users
    url: /api/v1/canarytoken/office365/users/list
    method: POST
    description: Lists the users in the oauth'ed Office365 organisation.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        default: "'flock:default'"
        description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))
      - name: is_exchange
        required: false
        type: boolean
        default: false
        description: If your email is hosted by a Microsoft Exchange server instead of Office365.
      - name: exchange_username
        required: false
        type: string
        description: The username used to authenticate to the Office365 exchange.
      - name: exchange_password
        required: false
        type: string
        description: The password used to authenticate the specified `exchange_username` to the Office365 exchange.
    response: A JSON structure with the user_emails information and a result indicator
  create_office_365_token:
    name: Insert Office365 mail Canarytokens
    url: /api/v1/canarytoken/office365/create
    method: POST
    description: Inserts the Office365 mail Canarytoken into specified email addresses
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        default: "'flock:default'"
        description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))
      - name: user_emails
        required: true
        type: string
        description: A comma separated list of the user email addresses to insert the Canarytoken into.
      - name: is_exchange
        required: false
        type: boolean
        default: false
        description: If your email is hosted by a Microsoft Exchange server instead of Office365.
      - name: exchange_username
        required: false
        type: string
        description: The username used to authenticate to the Office365 exchange.
      - name: exchange_password
        required: false
        type: string
        description: The password used to authenticate the specified `exchange_username` to the Office365 exchange.
    response: A JSON structure with a result indicator
  save_office_365_mail_template:
    name: Save Office365 mail template
    url: /api/v1/canarytoken/office365/email
    method: POST
    description: Saves the Office365 mail template to be used when tokening Office365 mailboxes
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        default: "'flock:default'"
        description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))
      - name: email_html
        required: true
        type: string
        description: The HTML of the email template
      - name: email_subject
        required: true
        type: string
        description: The subject of the email
    response: A JSON structure with the html and subject information with a result indicator
  get_office_365_mail_template:
    name: Get Office365 mail template
    url: /api/v1/canarytoken/office365/email
    method: GET
    description: Gets the Office365 mail template to be used when tokening Office365 mailboxes
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        default: "'flock:default'"
        description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))
    response: A JSON structure with the html and subject information with a result indicator
  office_365_oauth_token:
    name: Get Office365 oauth token
    url: /api/v1/canarytoken/office365/oauth/token
    method: POST
    description: Gets the Office365 access token
    params:
      - name: code
        required: true
        type: string
        description: value returned after sign in with Office365 is successful and redirects
      - name: user_email
        required: true
        type: string
        description: Email used to complete Office oauth process
      - name: state
        required: true
        type: string
        description: value returned after sign in with Office365 is successful and redirects
    response: A JSON structure with a result indicator
  office_365_status:
    name: Get status of Office365 tokening
    url: /canarytoken/office365/status
    method: GET
    description: Gets the status of the Office365 tokening process
    params:
        - name: flock_id
          required: false
          type: string
          default: "'flock:default'"
          description: A valid flock_id (defaults to the [Default Flock](/guide/terminology.html#default-flock))
    response: A JSON structure with a result indicator, successful, failed and total users.
---

# Office365

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to insert Canarytoken Mails into every selected Office365 email in your organisation.

:::::

</APIEndpoints>

::: tip
These endpoints are recommended to be used via your Canary Console UI. The Canary Console UI will handle all the different
flows and parameters needed, making your life a lot easier.
:::

## Initiate Office356 Canarytoken process

<APIDetails :endpoint="$page.frontmatter.endpoints.initiate_office_365"></APIDetails>

## List Office356 email addresses

<APIDetails :endpoint="$page.frontmatter.endpoints.list_office_365_users"></APIDetails>

## Insert Canarytokens into Office365 mail accounts

<APIDetails :endpoint="$page.frontmatter.endpoints.create_office_365_token"></APIDetails>

## Get email template for Office365 Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.get_office_365_mail_template"></APIDetails>

## Save email template for Office365 Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.save_office_365_mail_template"></APIDetails>

## Get Office365 oauth access token

<APIDetails :endpoint="$page.frontmatter.endpoints.office_365_oauth_token"></APIDetails>

## Get the status of the Office365 Canarytoken process

<APIDetails :endpoint="$page.frontmatter.endpoints.office_365_status"></APIDetails>
