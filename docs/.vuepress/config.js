module.exports = {
    title: 'One Person.',
    description: 'One Person.',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    themeConfig: {
      // 背景图片;
      background: '/img/path',
      nav: [
        { text: 'HTTP', link: '/http/' },
        { text: 'Node.js', link: '/nodejs/' },
        { text: 'JS', link: '/js/' },
        { text: 'CSS', link: '/css/' },
        { text: 'Other', link: '/other/' },
        { text: 'Github', link: 'https://github.com/kongliya' },
      ],
      sidebar: {
        '/http/': [
          '',
          'http'
        ],
        '/nodejs/': [
          '',
        ],
        '/js/': [
          '',
          'dailySummary',
        ],
        '/css/': [
          ''
        ],
        '/other/': [
          '',
          'http',
          'vue',
          'webrtc',
          'linux',
          'angular',
          'flutter',
          'webpack',
        ]
      }
    },
    markdown: {
      lineNumbers: true    // 代码块显示行号;
    },
  }