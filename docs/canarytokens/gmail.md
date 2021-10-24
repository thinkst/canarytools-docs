---
endpoints:
  list_gmail_users:
    name: List Gmail users of G Suite organisation
    url: /api/v1/canarytoken/gmail/users/list
    method: POST
    description: Lists the gmail users in the auth'ed G Suite organisation.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: domain
        required: true
        type: string
        description: The G Suite organisation's domain (eg. thinkstcorp.om)
      - name: email
        required: true
        type: string
        description: The G Suite organisation's admin email.
    response: A JSON structure with the users information and a result indicator
  create_gmail_token:
    name: Insert Gmail Canarytokens
    url: /api/v1/canarytoken/gmail/create
    method: POST
    description: Inserts the Gmail Canarytoken into specified Gmail addresses.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: emails
        required: false
        type: string
        description: A comma separated list of the Gmail addresses to insert the Canarytoken into.
      - name: users
        required: false
        type: string
        default: false
        description: JSON encoded string of comma separated array of user objects i.e. [{'email':'jay@thinkst.com', 'name':'jay'}, ..]
    response: A JSON structure with a result indicator
  save_gmail_mail_template:
    name: Save Gmail mail template
    url: /api/v1/canarytoken/gmail/email
    method: POST
    description: Saves the Gmail mail template to be used when tokening Gmail mailboxes.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
      - name: email_html
        required: true
        type: string
        description: The HTML of the email template
      - name: email_subject
        required: true
        type: string
        description: The subject of the email
      - name: email_sender
        required: false
        type: string
        description: The from address of the Canarytoken'ed email
    response: A JSON structure with the html, subject, sender information and the used G Suite organisation
              domain with a result indicator
  get_gmail_mail_template:
    name: Get Gmail mail template
    url: /api/v1/canarytoken/gmail/email
    method: GET
    description: Gets the Gmail template to be used when tokening Gmail mailboxes.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with the html, sender and subject information with a result indicator
  gmail_status:
    name: Get status of Gmail tokening
    url: /api/v1/canarytoken/gmail/status
    method: GET
    description: Gets the status of the Gmail tokening process.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: true
        type: string
        description: A valid flock_id
    response: A JSON structure with a result indicator, successful, failed and total users.
---

# Gmail

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

These are a collection of endpoints that allow you to insert Canarytoken Mails into every selected G Suite Gmail address in your organisation.

:::::

</APIEndpoints>

::: tip
These endpoints are recommended to be used via your Canary Console UI. The Canary Console UI will handle all the different
flows and parameters needed, making your life a lot easier.
:::

## List Gmail email addresses

<APIDetails :endpoint="$page.frontmatter.endpoints.list_gmail_users"></APIDetails>

## Insert Canarytokens into Gmail accounts

<APIDetails :endpoint="$page.frontmatter.endpoints.create_gmail_token"></APIDetails>

## Get email template for Gmail Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.get_gmail_mail_template"></APIDetails>

## Save email template for Gmail Canarytoken

<APIDetails :endpoint="$page.frontmatter.endpoints.save_gmail_mail_template"></APIDetails>

::: tip
We will embed a Canarytoken in the mail template. We will place the Canarytoken'ed URL in the
placeholder `{url}`. We will also check for `{user}` and replace that with the user's name of
each Gmail address.
:::

## Get the status of the Gmail Canarytoken process

<APIDetails :endpoint="$page.frontmatter.endpoints.gmail_status"></APIDetails>
