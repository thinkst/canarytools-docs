# Hello Console

Welcome to the docs. In this section we'll walk through the basics of connecting to your Console using the API.

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

:::: tabs

::: tab "curl"

``` bash
DOMAIN=yyyyy
API_KEY=xxxxx
curl -x GET https://${DOMAIN}.canary.tools/api/v1/ping?auth_token=${API_KEY}
```

:::


::: tab "python"

``` python
import requests

API_KEY = "xxxxx"
DOMAIN = "yyyyy"

r = requests.get(
  'https://{DOMAIN}.canary.tools/api/v1/ping?auth_token={API_KEY}'.format(DOMAIN=DOMAIN, API_KEY=API_KEY))
r.json()

```

:::

::::