# md 常用写法

## code-group

::: code-group

```sh [npm]
$ npm add -D vitepress
```

```sh [pnpm]
$ pnpm add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress
```

```sh [yarn (pnp)]
$ yarn add -D vitepress vue
```

```sh [bun]
$ bun add -D vitepress
```

:::

## 折叠

::: details 遇到了 missing peer deps 警告？
如果使用 PNPM，会注意到对 `@docsearch/js` 的 missing peer deps 警告。这不会影响 VitePress 运行。如果希望禁止显示此警告，请将以下内容添加到 `package.json`：

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search",
      "search-insights"
    ]
  }
}
```

:::

## tips

::: tip 注意

VitePress 是仅 ESM 的软件包。不要使用 `require()` 导入它，并确保最新的 `package.json` 包含 `"type": "module"`，或者更改相关文件的文件扩展名，例如 `.vitepress/config.js` 到 `.mjs`/`.mts`。更多详情请参考 [Vite 故障排除指南](http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only)。此外，在异步 CJS 上下文中，可以使用 `await import('vitepress')` 代替。

:::

## 文件结构

```
├─ docs
│ ├─ .vitepress
│ │ └─ config.js
│ ├─ api-examples.md
│ ├─ markdown-examples.md
│ └─ index.md
└─ package.json
```
