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
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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
    lastUpdated: 'Last Updated', // string | boolean
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API Reference', link: '/api-reference/overview' },
      { text: 'canary.tools', link: 'https://canary.tools' },
    ],
    sidebar: [
      {
        title: 'Welcome',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/',
        ]
      },
      {
        title: 'Guide',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/guide/getting-started',
        ]
      },
      {
        title: 'API Reference',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 3,    // optional, defaults to 1
        children: [
          '/api-reference/overview',
          '/api-reference/audit-trail',
          '/api-reference/bird-management',
          '/api-reference/bird-notes',
          '/api-reference/bird-notifications',
          '/api-reference/bird-personalities',
          '/api-reference/bird-queries',
          '/api-reference/bird-registrations',
          '/api-reference/bird-service-configuration',
          '/api-reference/console',
          '/api-reference/flocks',
        ]
      },
    ],
    smoothScroll: true,
  },
}
