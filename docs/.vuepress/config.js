module.exports = {
  title: 'Canarytools Docs',
  description: 'Documentation for the Canary Console.',
  markdown: {
    lineNumbers: false,
  },
  plugins: [
    'tabs',
    ['vuepress-plugin-code-copy', {
      align: 'top',
      color: '#38D47F'
    }],
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
  ],
  themeConfig: {
    docsRepo: 'thinkst/canarytools-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
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
          '/api-reference/miscellaneous',
          '/api-reference/console',
          '/api-reference/device-management',
          '/api-reference/device-notes',
          '/api-reference/device-notifications',
          '/api-reference/device-personalities',
          '/api-reference/device-queries',
          '/api-reference/device-registrations',
          '/api-reference/device-service-configuration',
          '/api-reference/flocks',
        ]
      },
    ],
  },
}
