# Resources

These resources help track and create the documentation.

## Sanitizing Response Data

`sanitize.py`

This script allows you to sanitize responses before adding them to the documentation. Yes, the script is rudimentary, but it gets the job done.

The script can be invoked by running something similar to:

```bash
curl https://DOMAIN.canary.tools/api/v1/license -d auth_token=AUTH_TOKEN   -G | ./sanitize.py
```

If you notice that there are fields that need to be added, please add them and keep the script up to date.

## Ignored Endpoints

These are endpoints that have not been added to the documentation for various reasons. Some of these reasons have been annotated.

## Remaining Endpoints

These are endpoints that have not been added to the documentation but will be.
