---
endpoints:
  create_factory:
    name: Create Canarytoken Factory
    url: /api/v1/canarytoken/create_factory
    method: POST
    description: Create an auth string for the Canarytoken Factory endpoint.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: flock_id
        required: false
        type: string
        description: A valid flock_id (defaults to the Default Flock)
      - name: memo
        required: true
        type: string
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken
    response: A JSON structure with auth string and Canarytoken factory endpoint.
  delete_factory:
    name: Delete Canarytoken Factory
    url: /api/v1/canarytoken/delete_factory
    method: DELETE
    description: Delete an auth string for the Canarytoken Factory endpoint.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: factory_auth
        required: true
        type: string
        description: An existing factory auth string
    response: A JSON structure with result indicator.
  factory:
    name: Create Canarytokens Using Factory
    url: /api/v1/canarytoken/factory
    method: POST
    description: Create an auth string for the Canarytoken Factory endpoint.
    params:
      - name: factory_auth
        required: true
        type: string
        description: A valid factory_auth string
      - name: flock_id
        required: false
        type: string
        description: A valid flock_id (defaults to the Default Flock)
      - name: memo
        required: true
        type: string
        description: A reminder that will be included in the alert to let you know where you placed this Canarytoken
      - name: kind
        required: true
        type: string
        description: Specifies the type of Canarytoken (currently only supports aws-id)
      - name: aws_id_username
        required: false
        type: string
        description: AWS ID Username is optional if you want to create an AWS API key linked to 
                     certain Name otherwise it is randomly generated.
    response: A JSON structure with the generated Canarytoken.
---

# Factory

Sometimes you want to automate the creation of Canarytokens across your fleet. Perhaps you want every EC2 instance to reach out and fetch a token on creation (or startup). The Canary Console API allows for the automation, but it seems a bad idea to use your API key on every host.

The Canarytoken factory gives you a limited use key that is able to create other tokens. You can leave this key on a host knowing that even if an attacker were able to grab it, he'd be able to create new tokens but not remove (or alter) anything else.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Create Canarytokens Using Factory

<APIDetails :endpoint="$page.frontmatter.endpoints.factory"/>

## Create Canarytoken Factory Auth String

<APIDetails :endpoint="$page.frontmatter.endpoints.create_factory"/>

## Delete Canarytoken Factory Auth String

<APIDetails :endpoint="$page.frontmatter.endpoints.delete_factory"/>
