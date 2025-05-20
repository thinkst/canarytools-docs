module.exports = {
  title: 'Canary API Docs',
  description: 'Documentation for the Canary Console.',
  markdown: {
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#38D47F' }],
  ],
  plugins: [
    'tabs',
    [
      'vuepress-plugin-code-copy',
      {
        align: 'top',
        color: '#38D47F'
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'api-response',
        before: info => `<div class="api-example-response">
                            <div class="api-example-response-header">
                              <span class="method-type ">Response</span>
                            </div>
                        `,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'attribute-details',
        before: info => `<div class="attribute-details">`,
        after: '</div>',
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      'vuepress-plugin-medium-zoom',
      {
        delay: 500,
        options: {
          margin: 24,
          background: 'transparent',
          scrollOffset: 0,
        },
      },
    ],
  ],
  themeConfig: {
    docsRepo: 'thinkst/canarytools-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Knowledge Base', link: 'https://help.canary.tools' },
      { text: 'canary.tools', link: 'https://canary.tools' },
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/',
          '/guide/getting-started',
          '/guide/terminology',
          '/guide/list-of-endpoints',
        ]
      },
      {
        title: 'Common Examples',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/common-tasks/overview',
          '/common-tasks/audit-trail',
          '/common-tasks/incidents',
        ]
      },
      {
        title: 'Bird Management',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/bird-management/bundles',
          '/bird-management/service-configuration',
          '/bird-management/cloud-canaries',
          '/bird-management/container-canaries',
          '/bird-management/notes',
          '/bird-management/notifications',
          '/bird-management/operations',
          '/bird-management/outside-birds',
          '/bird-management/personalities',
          '/bird-management/queries',
          '/bird-management/registrations',
          '/bird-management/updates',
          '/bird-management/virtual-canaries',
        ]
      },
      {
        title: 'Breadcrumbs',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/breadcrumbs/overview',
          '/breadcrumbs/mass-deployment',
        ]
      },
      {
        title: 'Canarytokens',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/canarytokens/actions',
          '/canarytokens/clonedweb-ignorelist',
          '/canarytokens/aws-s3-bucket-arn-ignorelist',
          '/canarytokens/factory',
          '/canarytokens/queries',
          '/canarytokens/office365',
          '/canarytokens/gmail',
          '/canarytokens/googledocs',
          '/canarytokens/idp-app',
        ]
      },
      {
        title: 'Console Resources',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/console/audit-trail',
          '/console/features',
          '/console/global-search',
          '/console/licenses',
          '/console/testing',
        ]
      },
      {
        title: 'Console Settings',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/console-settings/overview',
          '/console-settings/api',
          '/console-settings/canarytokens',
          '/console-settings/ignore-lists',
          '/console-settings/integrations',
          '/console-settings/notification-channels',
          '/console-settings/notification-settings',
        ]
      },
      {
        title: 'Flock Management',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/flocks/actions',
          '/flocks/notes',
          '/flocks/queries',
        ]
      },
      {
        title: 'Flock Settings',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/flocks-settings/overview',
          '/flocks-settings/info',
          '/flocks-settings/notifications',
          '/flocks-settings/change-alerts',
          '/flocks-settings/default-ignore-list',
          '/flocks-settings/hostname-ignore-list',
          '/flocks-settings/source-port-ignore-list',
          '/flocks-settings/webhooks',
          '/flocks-settings/auto-commission',
          '/flocks-settings/flock-auth-token',
        ]
      },
      {
        title: 'Incidents',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/incidents/actions',
          '/incidents/queries',
          '/incidents/incident-objects',
        ]
      },
      {
        title: 'Syslog',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/syslog/rfc5424',
        ]
      },
      {
        title: 'User Management',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/users/management',
          '/users/queries',
        ]
      },
    ],
    smoothScroll: true,
  },
}
