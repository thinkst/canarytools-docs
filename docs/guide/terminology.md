# Terminology

Throughout the documentation (as well as in support exchanges), we'll use terminology that we've grown used to but may not be immediately obvious. In order to address that, we've listed and explained common ideas that we use freely in our descriptions.

If any of these still don't make sense, or if you feel we are missing some, please feel free to [drop us a mail](mailto:support@canary.tools) and we'll gladly look at updating our docs.

## Birds

<sub>Also known by: [Devices](#devices), [Sensors](#sensors)</sub>

These are the Canary devices that you purchase and connect to your Console. These currently could be one of: hardware, cloud (Azure, AWS EC2, GCP), or VM (VMWare, Hyper-V).

## Canarytokens

<sub>Also known by: [Devices](#devices), [Sensors](#sensors)</sub>

These are small pieces of software (ranging from URLs and hostnames, to Word documents, AWS credentials and Slack API tokens) that will alert you when triggered.

For a fuller writeup, you can take a look at our [help article](https://canary.tools/help/canarytokens).

## Console

This is the per-customer EC2 instance that includes a UI for managing your Canary setup.

All your [Sensors](#sensors) will reach out to your Console to check in and relay alerts.

## Devices

<sub>Also known by: [Birds](#birds), [Sensors](#sensors)</sub>

These are the Canary devices that you purchase and connect to your Console. These currently could be one of: hardware, cloud (Azure, AWS EC2, GCP), or VM (VMWare, Hyper-V).

## Default Flock

The `Default Flock` is the original [Flock](#flocks) where all [Sensors](#sensors) will be placed. All newly added [Birds](#birds) that aren't tied to a specific Flock will be added here.

It's `flock_id` will always be `flock:default`, so it is easily queryable.

::: tip
You **cannot delete** the Default Flock, but you can easily change its name using the [Rename Flock](/flocks/actions.html#rename-flock) endpoint.
:::

## Flocks

Flocks let you place Birds, Canarytokens, and users into logical groups (with different management or alerting rules).

Consider creating different flocks for different teams, locations, subnets, or environments.

Each Flock can inherit configuration from your global settings, or you can individually configure settings as needed.

## Managers

Managers are users that can manage assigned Flocks. This gives them the ability to view and change settings for Flocks they are assigned to.


::: tip Note
A user can be a Manager for multiple Flocks. They can also be a Watcher for some Flocks, and Manager for others. The authorization is on a per-Flock basis.
:::

## Sensors

<sub>Also known by: [Birds](#sensors), [Devices](#devices), [Canarytokens](#canarytokens)</sub>

Sensors is the general term used to indicate either Birds and/or Canarytokens.  They can be seen as anything that is placed around your network and will trigger an alert when accessed.

## Watchers

Watchers are limited users who can view a Flock's details (that they are assigned to), but not change settings.

::: tip Note
A user can be a Watcher for multiple Flocks. They can also be a Watcher for some Flocks, and Manager for others. The authorization is on a per-Flock basis.
:::
