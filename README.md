## はじめに
「おともだちちょう」作成用リポジトリです。
Next.jsを主に使っており、スタイルにはTailwindCssを使用しています。
データベースとしてPlanetScaleを使用しています。

## 開発にあたって
### 環境
- node v20.11.0
- yarn 1.22.19

### setup
```
yarn install
```

### develop
```
yarn dev
```
-> access: https://localhost:3000/
ローカルサーバーが立ち上がり、Webサイトにアクセス

```
npx prisma studio
```
-> access: https://localhost:5555/
prismaが起動し、DBにアクセス

### 環境変数について


### ブランチについて
`develop` ブランチを最新にし、 `feature/{機能名}` ブランチを作成して作業を進めてください。


### PullRequestについて
PullRequestする場合、githubのreviewerを `@takuma`(青木)を指定してください。
PRで対応した内容を具体的に下記、必要であれば対応チケットやスクリーンショットを貼り付けてください。

- TailwindCSS チートシート
https://nerdcave.com/tailwind-cheat-sheet

- PrismaとPlanetScaleの接続
https://zenn.dev/nbr41to/articles/adabca83b2e6ea









npx prisma studio で起動
