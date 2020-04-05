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
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
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
          '/bird-management/notes',
          '/bird-management/notifications',
          '/bird-management/operations',
          '/bird-management/personalities',
          '/bird-management/queries',
          '/bird-management/registrations',
          '/bird-management/updates',
          '/bird-management/virtual-canaries',
        ]
      },
      {
        title: 'Canarytokens',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/canarytokens/actions',
          '/canarytokens/clonedweb-ignorelist',
          '/canarytokens/factory',
          '/canarytokens/queries',
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
          '/console-settings/api',
          '/console-settings/canarytokens',
          '/console-settings/ignore-lists',
        ]
      },
      {
        title: 'Incidents',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/incidents/actions',
          '/incidents/queries',
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
      {
        title: 'Flocks',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/flocks/',
        ]
      },
    ],
    smoothScroll: true,
  },
}
