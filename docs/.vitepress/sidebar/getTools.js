export const getTools = function () {
  return [
    {
      text: '简介',
      items: [{ text: '为什么整理？', link: 'start' }],
    },
    {
      text: 'JavaScript',
      base: '/tools/js-',
      items: [
        { text: '表单验证集合', link: 'form' },
        { text: 'bb', link: 'bbb' },
      ],
    },
    {
      text: 'Vue2',
      base: '/tools/vue2-',
      items: [
        { text: '工具1', link: 'hhh' },
        { text: '工具2', link: 'fff' },
      ],
    },
    {
      text: '其他',
      base: '/tools/other-',
      items: [{ text: '安全检测工具awvs', link: 'awvs' }],
    },
  ];
};
