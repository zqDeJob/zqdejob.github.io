import { defineConfig } from 'vitepress';
import { getNotes } from './sidebar/getNotes';
import { getTools } from './sidebar/getTools';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-en',
  title: 'martin 工作随笔',
  description: '记录开发过程中的一些随笔',

  themeConfig: {
    nav: [
      {
        text: '自我提升',
        activeMatch: '/enhance',
        items: [
          { text: '学习体系', link: '/item-1' },
          { text: '个人简历', link: '/item-2' },
        ],
      },
      { text: '笔记', link: '/notes/start', activeMatch: '/notes' },
      { text: '工具', link: '/tools/start', activeMatch: '/tools' },

      // ...
    ],

    sidebar: {
      '/notes': {
        base: '/notes/',
        items: getNotes(),
      },
      '/tools': {
        base: '/tools/',
        items: getTools(),
      },
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
});
