# Robot-Inventor.github.io

![Broken Link Check](https://github.com/Robot-Inventor/Robot-Inventor.github.io/workflows/Broken%20Link%20Check/badge.svg) ![CodeQL](https://github.com/Robot-Inventor/Robot-Inventor.github.io/workflows/CodeQL/badge.svg) [![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6IlJvYm90LUludmVudG9yIiwicmVwbzEiOiJSb2JvdC1JbnZlbnRvci5naXRodWIuaW8iLCJpbmNsdWRlTGludCI6ZmFsc2UsImF1dGhvcklkIjoxOTUwNCwiaWF0IjoxNjAxODIzNDgzfQ.EKBzzq44z_pyY6FBMMVFWwIfyeVPOc7ptPPEil5IYc4)](https://www.deepcode.ai/app/gh/Robot-Inventor/Robot-Inventor.github.io/_/dashboard?utm_content=gh%2FRobot-Inventor%2FRobot-Inventor.github.io)

これは[https://robot-inventor.github.io/](https://robot-inventor.github.io/) のリポジトリーです。コンテンツの利用に関しては[利用規約](https://robot-inventor.github.io/tos/)を確認してください。

## 記事の更新手順

1. Markdownで記事を書く
2. 記事をビルド
3. お知らせページを更新
4. トップページの最新の記事を更新

## Command

### MarkdownファイルをHTMLに変換

パスの区切り文字は``/``の代わりに``\``でも可。

```console
npm run build-article "path/to/article/index.md"
```

## ToDo

### Bug

- 短い記事の場合、一番下までスクロールしてもサイトロゴや共有ボタンが読み込まれない可能性があるバグ

### Feature

- yt-videoの読み込み中にLoading...という文字を表示する（Loading...という文字を配置し、その上に動画を表示するようにすれば良さそう）
