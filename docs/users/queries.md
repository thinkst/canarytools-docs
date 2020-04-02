---
endpoints:
  get_user:
    name: Get User
    url: /api/v1/user/get
    method: GET
    description: Retrieves a user's details.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be returned
    response: JSON structure with the user's details.
  get_user_auth:
    name: Get User Auth
    url: /api/v1/user/auth
    method: GET
    description: Retrieves a user's authorization details.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: email
        required: true
        type: string
        description: The email address of the user to be returned
    response: JSON structure with the user's authorization details.
  filter_users:
    name: Filter Users
    url: /api/v1/users/filter
    method: GET
    description: List all users that match a specified `filter_str`.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: filter_str
        required: true
        type: string
        description: String to match on
    response: JSON structure with the list of filtered users.
  list_users:
    name: List Users
    url: /api/v1/users/list
    method: GET
    description: List all users and their roles.
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
    response: JSON structure with the list of users.
---

# Queries

These are a collection of endpoints that allow you to view users on your Console.

<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath"/>

## Get User

<APIDetails :endpoint="$page.frontmatter.endpoints.get_user"/>

## Get User Auth

<APIDetails :endpoint="$page.frontmatter.endpoints.get_user_auth"/>

## Filter Users

<APIDetails :endpoint="$page.frontmatter.endpoints.filter_users"/>

## List Users

<APIDetails :endpoint="$page.frontmatter.endpoints.list_users"/>

