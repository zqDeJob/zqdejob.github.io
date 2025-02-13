export const getNotes = function () {
  return [
    {
      text: '开始',
      items: [{ text: 'md常用写法', link: 'start' }],
    },
    {
      text: 'Elementui',
      base: '/notes/elementui-',
      items: [
        {
          text: '表单',
          base: '/notes/elementui-form-',
          items: [
            { text: '常见验证', link: 'validate' },
            { text: '遇到的缺陷', link: 'bugs' },
            { text: '自定义设计', link: 'diy' },
          ],
        },
        {
          text: '配置',
          base: '/notes/elementui-config-',
          items: [{ text: '国际化', link: 'i18n' }],
        },
      ],
    },
    {
      text: 'nodeJs 相关',
      items: [
        {
          text: 'node 小demo',
          base: '/notes/node-demo-',
          items: [
            { text: '读取文件夹下的所有内容并存到一个文件', link: 'mergefile' },
          ],
        },
      ],
    },
    {
      text: 'JavaScript 相关',
      base: '/notes/js-',
      items: [
        {
          text: '利用blob 加密防下载',
          link: 'blob',
        },
        {
          text: 'base64 和blob 上传与互换',
          link: 'base64',
        },
      ],
    },
    {
      text: '遇到的小问题整理',
      base: '/notes/faq-',
      items: [
        { text: '生产环境如何调试VUE代码？', link: 'runvue' },
        {
          text: 'linux离线环境如何更新vscode版本 ？',
          link: 'unvscode',
        },
        {
          text: 'linux离线环境如何添加全局依赖 ？',
          link: 'offline',
        },
        {
          text: 'linux离线环境如何安装node ？',
          link: 'offnode',
        },
      ],
    },
  ];
};
