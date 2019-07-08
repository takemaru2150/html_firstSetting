# html_firstSetting
- index.htmlの初期設定用フォルダです。
- [吉本式BEM設計](http://tsudoi.org/guide/about/)をもとにsassの作成・管理をしています。
- yarnを用いたwebpackを利用しています。
- index.htmlファイル内の一番下にmain.jsを読み込ませています。このmain.jsにすべてのcss、js情報が記載されています。

## html、cssファイルを変更する際の注意事項
- yarn利用可能環境の元、コマンドラインで `yarn init` でyarnを導入後 `yarn install` でyarnをインストールしてください。
- 上記完了後、node_modules等の必要フォルダが作成されます。
- html、cssファイル変更後 `yarn build` でビルドできます。（変更が上書きされます。）
- `yarn start` でローカルサーバーを立ち上げます。（変更が随時更新されます。）
