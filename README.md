# ヘイン テッ アウンのポートフォリオ

2027年新卒エンジニア採用に向けた、日本語のポートフォリオサイトです。

## 掲載内容

- Sugi Sale App：同僚7名が利用する販売実績・ポイント記録アプリ
- SportsMatch Tokyo：東京でスポーツ仲間を探すサービス
- POS / EC 管理システム：Laravelによる学習用プロジェクト
- 自己紹介、スキル、学歴・アルバイト・個人開発の経歴、お問い合わせ

本人のプロフィールと開発実績をもとに、公開用の内容に整理しています。元の履歴書や個人プロフィールはリポジトリに含めません。

## 使用技術

Next.js 16（App Router）・TypeScript・Tailwind CSS v4・Framer Motion・lucide-react

## 開発

```bash
npm install
npm run dev
```

## 確認

```bash
npx tsc --noEmit
npm run build
npm start
```

## 編集箇所

- `lib/content.ts`：日本語の本文とプロジェクト情報
- `components/`：各セクションの表示
- `app/layout.tsx`：日本語のページ情報・検索結果・共有用メタデータ
- `public/avatar.jpg`：プロフィール写真

言語切り替えはなく、初回表示から日本語です。

## 公開

`main`へのプッシュでVercelに自動デプロイされる設定です。変更はブランチ上で確認してから反映します。
