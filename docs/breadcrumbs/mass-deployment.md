# Mass Deployment

Breadcrumbs are volatile and need slightly more upkeep than Tokens and Canaries themselves. They are relatively short-lived, lasting only until the Canary's settings (or IP) changes. Depending on what was changed, new breadcrumbs may need to be generated and deployed.

To make this easier for you, Breadcrumbs can be mass deployed by making use of read-only Flock API auth keys. This allows you to build them into your automation and deployment scripts.

Read-only Flock API keys can be generated via the "[Flock API Key endpoints](/flocks-settings/flock-auth-token.html)" and setting `auth_token_type` to `read-only`.

::: warning
While read-only Flock API auth keys limit which devices can be viewed to a specific flock, it is recommended that they be disabled after they are used by scripts to deploy breadcrumbs. This can be done via the "[Remove Flock API key](/flocks-settings/flock-auth-token.html#remove-flock-api-key)" endpoint.
:::