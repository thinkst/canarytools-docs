module.exports = {
  title: 'Canarytools Docs',
  description: 'Documentation for the Canary Console.',
  markdown: {
    lineNumbers: true
  },
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
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/api-reference/overview',
          '/api-reference/console',
          '/api-reference/flocks',
        ]
      },
    ],
  },
}
