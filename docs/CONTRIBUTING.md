# Contributing

We welcome all contributions and will work with you to get them incorporated if possible. Below are some guidelines on how to go about making changes.

## Locally Running and Testing

In order to get a local copy of the docs running on your machine, you can follow the below steps (you'll need `yarn` installed):

```bash
git clone https://github.com/thinkst/canarytools-docs.git

cd canarytools-docs

yarn install

yarn docs:dev
```

## Markdown

Most of the work is done in some form of Markdown. Altering / fixing / adding paragraphs should be simple enough if you know _Markdown_ (otherwise you can take a look at this nifty [Cheat-sheet](https://www.markdownguide.org/cheat-sheet/)).

Vuepress has some pre-defined custom containers that you can read up on [here](https://v1.vuepress.vuejs.org/guide/markdown.html#custom-containers).

We include some of our own custom containers, at this point we've only added `api-response` which can be included using something similar to (remove the leading `\` from the lines):

```
::: api-response

\```json
{
    'result': 'success'
}
\```
:::
```

## Endpoints

Endpoints are defined as `YAML` at the top of the file. 

```
---
endpoints:
  example:
    name: Example Endpoint
    url: /api/v1/example
    method: GET
    description: Example endpoint to show the YAML format
    params:
      - name: auth_token
        required: true
        type: string
        description: A valid auth token
      - name: another_param
        required: false
        type: boolean
        description:  An example param
    response: A JSON structure with result indicator.
---
```

These will be generated into content on the page using [APIEndpoints](.vuepress/components/APIEndpoints.vue) and [APIDetails](.vuepress/components/APIDetails.vue).

A `param` can include additional properties that will further enhance the information around it:

```
- name: example_param
  required: true | false
  type: string | int | boolean
  default: 10 | "'a string'" (can ignore if no default)
  deprecated: true | false (can ignore and default to false)
  deprecated_message: "An optional deprecated message to show if deprecated" (can ignore if not deprecated)
  description: An example description
```

### APIEndpoints

This will generate the introduction to the page, including a list of all endpoints.

 - `slot details` will generate the description for the page alongside the endpoint list.

```
<APIEndpoints :endpoints="$page.frontmatter.endpoints" :path="$page.regularPath">

::::: slot details

...

:::::

</APIEndpoints>
```

### APIDetails

This will generate the endpoint details section.

 - `slot example` will generate the example + response section
 - `slot description` will allow you to overwrite the description defined in the endpoint `YAML`
 - `slot required-parameters-notes` will allow you to add notes under the required parameters section
 - `slot optional-parameters-notes` will allow you to add notes under the optional parameters section
 - `slot response` will allow you to overwrite the response defined in the endpoint `YAML`

```

<APIDetails :endpoint="$page.frontmatter.endpoints.example">

::::: slot example

...

:::::

</APIDetails>
```
