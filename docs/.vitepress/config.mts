import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "martin 工作随笔",
  description: "记录开发过程中的一些随笔",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '学习提升', link: '/markdown-examples' },
      { text: '随笔整理', link: '/markdown-examples' },
      { text: '工具集合', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zqDeJob/zqdejob.github.io.git' }
    ]
  }
})
