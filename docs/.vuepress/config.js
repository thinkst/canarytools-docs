module.exports = {
  title: 'Canary API Docs',
  description: 'Documentation for the Canary Console.',
  markdown: {
    lineNumbers: false,
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
      { text: 'canary.tools', link: 'https://canary.tools' },
      { text: 'github', link: 'https://github.com/thinkst/canarytools-docs' },
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
          '/bird-management/service-configuration',
          '/bird-management/notes',
          '/bird-management/notifications',
          '/bird-management/operations',
          '/bird-management/personalities',
          '/bird-management/queries',
          '/bird-management/registrations',
        ]
      },
      {
        title: 'Console Resources',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/console/audit-trail',
          '/console/features',
          '/console/licenses',
          '/console/testing',
        ]
      },
      {
        title: 'Incidents',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/incidents/queries',
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
