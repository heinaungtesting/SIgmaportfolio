// Centralized content for the portfolio. Bilingual (en / ja).
// All copy is grounded in real work — no fabricated metrics.

export type Locale = "en" | "ja";

export const content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Hein Htet Aung",
      role: "AI Engineer · Full-Stack Developer",
      tagline:
        "Fourth-year liberal arts student at Kaichi International University building real production systems — Next.js, Supabase, Laravel, Go — and shipping them to live users.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Get in Touch",
      status: "Open to 2027 new-graduate roles",
      stats: [
        { label: "Live Deployments", value: "3" },
        { label: "Repositories", value: "9+" },
        { label: "Languages", value: "4" },
        { label: "JLPT", value: "N1" },
      ],
    },
    about: {
      title: "About",
      heading: "Self-taught engineer shipping real products",
      body: [
        "I'm a Burmese student living in Tokyo, graduating May 2027 from 開智国際大学 (Kaichi International University). I taught myself web development while working part-time at Sugi Pharmacy, and I now build production apps end-to-end — from requirements and database design to deployment and operations.",
        "I focus on the intersection of AI tooling and full-stack engineering: I use AI as a development accelerator, but every architectural decision, every error debug, and every production verification is mine.",
        "I write code in TypeScript, Go, PHP, and Python. I speak Japanese, Burmese, and English. I run a 5-agent personal AI system on a VPS for my own job hunt and side projects.",
      ],
      highlights: [
        { icon: "GraduationCap", text: "Graduating May 2027 — Kaichi International University" },
        { icon: "MapPin", text: "Tokyo, Japan · 留学 visa" },
        { icon: "Languages", text: "Japanese (N1) · Burmese (native) · English (TOEIC 830)" },
        { icon: "Heart", text: "Daily Vipassana meditator" },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Stack I actually ship with — not a resume keyword dump",
      groups: [
        {
          name: "Frontend",
          color: "from-cyan-500 to-blue-500",
          items: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
          name: "Backend & DB",
          color: "from-emerald-500 to-teal-500",
          items: ["Supabase", "PostgreSQL", "Prisma", "Laravel (PHP)", "REST API design", "Row-Level Security"],
        },
        {
          name: "Systems & Infra",
          color: "from-violet-500 to-purple-500",
          items: ["Go (CLI + concurrency)", "Python", "Docker Compose", "Vercel", "GitHub Actions"],
        },
        {
          name: "AI / Automation",
          color: "from-pink-500 to-rose-500",
          items: ["Multi-agent orchestration", "Prompt engineering", "LLM workflows", "Voice synthesis (MiniMax)", "RAG basics"],
        },
        {
          name: "Product & Process",
          color: "from-amber-500 to-orange-500",
          items: ["Solo full SDLC", "Requirements → design → ship", "Real-user testing", "Multilingual UX (JP/EN)", "Daily ops with Kanban"],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Three production apps — built, deployed, and used by real people",
      items: [
        {
          slug: "sportsmatch",
          title: "SportsMatch Tokyo",
          period: "Nov 2025 → Apr 2026",
          tagline: "Find sports partners in Tokyo. EN/JP. Real-time group chat.",
          description:
            "A bilingual web app that helps people in Tokyo find sports partners, join sessions, and coordinate via realtime group chat. Built solo — frontend, backend, database, realtime, auth, RBAC, i18n, deployment.",
          tech: ["Next.js 15", "Supabase", "PostgreSQL", "Prisma", "Realtime", "next-intl", "Zod", "Vercel"],
          features: [
            "Session search & join flow",
            "Realtime group chat (Supabase Realtime)",
            "Three roles: Player / Organiser / Admin",
            "EN/JP UI with next-intl",
            "Row-Level Security on every table",
            "Admin console for users / facilities / reports",
          ],
          live: "https://sportsmatch-tokyo.vercel.app",
          repo: "https://github.com/heinaungtesting/webresevation",
          status: "Live · v1 in production",
          accent: "cyan",
        },
        {
          slug: "fullmedia",
          title: "Full Media Project",
          period: "Dec 2024 → Jan 2025",
          tagline: "News/media platform. Laravel API + Vue 3 SPA + Docker.",
          description:
            "Full-stack news/media platform with separated Laravel backend, Vue 3 frontend, and MySQL — connected through a Sanctum-authenticated API. Includes view-tracking-based trending and admin CMS.",
          tech: ["Laravel 11", "PHP 8", "Vue 3", "TypeScript", "Vuex", "Axios", "MySQL", "Docker Compose", "Sanctum"],
          features: [
            "Sanctum API + Vue 3 SPA",
            "Article / category / comment CRUD",
            "View-log-based trending algorithm",
            "Admin dashboard (Livewire + AdminLTE)",
            "Docker Compose multi-container dev env",
          ],
          live: null,
          repo: "https://github.com/heinaungtesting/full-media-project",
          status: "Source public · API + frontend split",
          accent: "emerald",
        },
        {
          slug: "pos",
          title: "POS System",
          period: "Oct 2024 → Dec 2025",
          tagline: "Store POS. Laravel + Blade + jQuery + Bootstrap.",
          description:
            "Role-separated POS system: admin side handles products, categories, orders, and payment methods; customer side browses, carts, and checks out. Built to study real retail flows end-to-end.",
          tech: ["Laravel", "Blade", "jQuery", "Bootstrap", "Tailwind", "Breeze", "Sanctum", "Socialite", "Vite", "MySQL"],
          features: [
            "Admin / customer role separation",
            "Product CRUD + categories",
            "Cart + checkout + order history",
            "Payment-method management",
            "Comments / ratings / inquiries",
          ],
          live: null,
          repo: "https://github.com/heinaungtesting/pos",
          status: "Source public · feature-complete",
          accent: "violet",
        },
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "Real work, not coursework",
      items: [
        {
          period: "Apr 2022 → Present",
          role: "Part-time · Sugi Pharmacy (スギ薬局)",
          location: "Tokyo",
          bullets: [
            "Daily customer service in Japanese — register, OTC consultation, product recommendation",
            "Built and ship a private in-house mobile POS/tap app to solve slow-network register hangs",
            "Worked under real time pressure with a fixed till and real-money transactions",
          ],
        },
        {
          period: "Mar 2025 → Present",
          role: "Sigma — personal multi-agent system (self-built)",
          location: "Hetzner VPS · Hermes Agent",
          bullets: [
            "5-agent swarm: Sigma orchestrator + Ares / Kronos / Plutus / Hermes-worker",
            "Cron-driven job-hunt pipeline, daily morning briefing, voice reply pipeline",
            "Telegram-first personal ops: job hunt, schedule, projects, side hustles",
          ],
        },
        {
          period: "Nov 2025 → Apr 2026",
          role: "SportsMatch Tokyo — solo full SDLC",
          location: "Production · Vercel",
          bullets: [
            "Requirements, DB schema, RLS policies, realtime chat, i18n, deploy — all me",
            "67 bugs triaged, 7 Critical + 4 readiness criteria shipped to launch",
            "Vercel → Telegram build notifications via signed webhook bridge",
          ],
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle: "2027 new-graduate roles · AI engineer / full-stack / backend",
      blurb:
        "I'm open to 2027 new-grad roles (27卒) in AI engineering, full-stack, or backend. If your team builds real products and wants an engineer who ships, let's talk.",
      channels: [
        { label: "Email", value: "heinaung.testing@gmail.com", href: "mailto:heinaung.testing@gmail.com", icon: "Mail" },
        { label: "GitHub", value: "@heinaungtesting", href: "https://github.com/heinaungtesting", icon: "Github" },
        { label: "Site", value: "sigmahein.me", href: "https://sigmahein.me", icon: "Globe" },
      ],
    },
    footer: {
      built: "Built with Next.js 15, Tailwind CSS, and Framer Motion. Hosted on Vercel.",
      rights: "© 2026 Hein Htet Aung",
    },
  },
  ja: {
    nav: {
      about: "自己紹介",
      skills: "スキル",
      projects: "制作物",
      experience: "経歴",
      contact: "お問い合わせ",
    },
    hero: {
      greeting: "こんにちは、",
      name: "Hein Htet Aung",
      role: "AIエンジニア・フルスタック開発者",
      tagline:
        "開智国際大学4年。次の世代のプロダクトを作るため、Next.js / Supabase / Laravel / Go を个人で学び、実サービスとして公開まで経験してきました。",
      ctaPrimary: "制作物を見る",
      ctaSecondary: "連絡する",
      status: "2027年新卒採用（27卒）積極応募中",
      stats: [
        { label: "公開中のサービス", value: "3" },
        { label: "公開リポジトリ", value: "9+" },
        { label: "使用言語", value: "4" },
        { label: "JLPT", value: "N1" },
      ],
    },
    about: {
      title: "自己紹介",
      heading: "自分で学び、実プロダクトを出荷するエンジニア",
      body: [
        "ミャンマー出身、東京在住。2027年5月に開智国際大学を卒業予定。在学中、ドラッグストアでのアルバイトと両立しながら独学でWeb開発を学び、要件定義からDB設計、本番運用までを一人で経験しました。",
        "AIツールは開発を加速させるための手段として使っていますが、設計判断・エラー解決・動作確認はすべて自分で行っています。",
        "TypeScript / Go / PHP / Pythonでコードを書き、日本語・ミャンマー語・英語を話します。自作の5エージェント・パーソナルAIシステムをVPS上で運用し、就活と個人プロジェクトの両方に活用しています。",
      ],
      highlights: [
        { icon: "GraduationCap", text: "2027年5月卒業予定 — 開智国際大学" },
        { icon: "MapPin", text: "日本・東京 · 留学ビザ" },
        { icon: "Languages", text: "日本語 (N1) · ミャンマー語 (母語) · 英語 (TOEIC 830)" },
        { icon: "Heart", text: "ヴィパッサナー瞑想を日々実践" },
      ],
    },
    skills: {
      title: "スキル",
      subtitle: "実際に本番で使っている技術だけ",
      groups: [
        {
          name: "フロントエンド",
          color: "from-cyan-500 to-blue-500",
          items: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
          name: "バックエンド・DB",
          color: "from-emerald-500 to-teal-500",
          items: ["Supabase", "PostgreSQL", "Prisma", "Laravel (PHP)", "REST API設計", "Row-Level Security"],
        },
        {
          name: "システム・インフラ",
          color: "from-violet-500 to-purple-500",
          items: ["Go (CLI + 並行処理)", "Python", "Docker Compose", "Vercel", "GitHub Actions"],
        },
        {
          name: "AI / 自動化",
          color: "from-pink-500 to-rose-500",
          items: ["マルチエージェント設計", "プロンプト設計", "LLMワークフロー", "音声合成 (MiniMax)", "RAG基礎"],
        },
        {
          name: "プロダクト・プロセス",
          color: "from-amber-500 to-orange-500",
          items: ["一人でフルSDLC", "要件 → 設計 → 出荷", "実ユーザーテスト", "多言語UX (JP/EN)", "Kanbanで日常運用"],
        },
      ],
    },
    projects: {
      title: "制作物",
      subtitle: "実際に作って公開した3つのサービス",
      items: [
        {
          slug: "sportsmatch",
          title: "SportsMatch Tokyo",
          period: "2025/11 → 2026/04",
          tagline: "東京でスポーツ仲間を探す。日英対応。リアルタイムチャット付き。",
          description:
            "東京在住者がスポーツの相手や参加可能なセッションを見つけ、参加後のグループチャットまでできるWebアプリ。要件定義・画面設計・DB設計・実装・認証・ロール管理・多言語対応・デプロイまでを一人で担当。",
          tech: ["Next.js 15", "Supabase", "PostgreSQL", "Prisma", "Realtime", "next-intl", "Zod", "Vercel"],
          features: [
            "セッション検索・参加フロー",
            "Supabase Realtime によるグループチャット",
            "3つのロール（Player / Organiser / Admin）",
            "next-intl による日英UI",
            "全テーブルに Row-Level Security",
            "ユーザー / 施設 / レポート管理画面",
          ],
          live: "https://sportsmatch-tokyo.vercel.app",
          repo: "https://github.com/heinaungtesting/webresevation",
          status: "本番稼働中 · v1",
          accent: "cyan",
        },
        {
          slug: "fullmedia",
          title: "Full Media Project",
          period: "2024/12 → 2025/01",
          tagline: "ニュースメディア・フルスタック。Laravel API + Vue 3 SPA + Docker。",
          description:
            "Laravel バックエンドと Vue 3 フロントエンドを分離し、Sanctum 認証APIで接続したニュース/メディアプラットフォーム。閲覧ログを使ったトレンド表示と管理画面CMSを含む。",
          tech: ["Laravel 11", "PHP 8", "Vue 3", "TypeScript", "Vuex", "Axios", "MySQL", "Docker Compose", "Sanctum"],
          features: [
            "Sanctum API + Vue 3 SPA",
            "記事 / カテゴリ / コメント CRUD",
            "閲覧ログによるトレンド表示",
            "管理画面（Livewire + AdminLTE）",
            "Docker Compose マルチコンテナ開発環境",
          ],
          live: null,
          repo: "https://github.com/heinaungtesting/full-media-project",
          status: "ソース公開 · API + フロントエンド分離",
          accent: "emerald",
        },
        {
          slug: "pos",
          title: "POS System",
          period: "2024/10 → 2025/12",
          tagline: "店舗向けPOSシステム。Laravel + Blade + jQuery + Bootstrap。",
          description:
            "管理者と顧客でロールを分離した店舗向けPOSシステム。管理者は商品・カテゴリ・注文・決済を管理し、顧客は商品の閲覧・カート・チェックアウトができる。実店舗の業務フローを学ぶために制作。",
          tech: ["Laravel", "Blade", "jQuery", "Bootstrap", "Tailwind", "Breeze", "Sanctum", "Socialite", "Vite", "MySQL"],
          features: [
            "管理者 / 顧客のロール分離",
            "商品 CRUD + カテゴリ管理",
            "カート + チェックアウト + 注文履歴",
            "決済方法管理",
            "コメント・評価・問い合わせ機能",
          ],
          live: null,
          repo: "https://github.com/heinaungtesting/pos",
          status: "ソース公開 · 機能完成",
          accent: "violet",
        },
      ],
    },
    experience: {
      title: "経歴",
      subtitle: "課題ではなく、実業務",
      items: [
        {
          period: "2022/04 → 現在",
          role: "アルバイト · スギ薬局",
          location: "東京",
          bullets: [
            "日本語での接客（レジ、OTC相談、商品提案）を日々担当",
            "通信が遅い現場課題を解決するため、社内向けの簡易POS/タップアプリを自作・運用",
            "実金銭を扱う環境で、時間的プレッシャーの中で正確性を維持",
          ],
        },
        {
          period: "2025/03 → 現在",
          role: "Sigma — 自作マルチエージェントシステム",
          location: "Hetzner VPS · Hermes Agent",
          bullets: [
            "5エージェント体制：Sigma オーケストレーター + Ares / Kronos / Plutus / Hermes-worker",
            "就活パイプライン、定期モーニングブリーフィング、音声応答パイプライン",
            "就活・スケジュール・プロジェクト管理をTelegram起点で統合",
          ],
        },
        {
          period: "2025/11 → 2026/04",
          role: "SportsMatch Tokyo — 一人でフルSDLC",
          location: "本番 · Vercel",
          bullets: [
            "要件定義、DB設計、RLS、Realtimeチャット、i18n、デプロイまで担当",
            "67件のバグをトリアージし、Critical 7件 + 公開判定基準4件を公開",
            "Vercel → Telegram ビルド通知Webhookを署名付きで実装",
          ],
        },
      ],
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "2027年新卒 · AIエンジニア / フルスタック / バックエンド",
      blurb:
        "2027年新卒（27卒）のAIエンジニア・フルスタック・バックエンド職を募集しています。実プロダクトを作るチームで、出荷できるエンジニアが必要な方は、ぜひご連絡ください。",
      channels: [
        { label: "Email", value: "heinaung.testing@gmail.com", href: "mailto:heinaung.testing@gmail.com", icon: "Mail" },
        { label: "GitHub", value: "@heinaungtesting", href: "https://github.com/heinaungtesting", icon: "Github" },
        { label: "Site", value: "sigmahein.me", href: "https://sigmahein.me", icon: "Globe" },
      ],
    },
    footer: {
      built: "Built with Next.js 15, Tailwind CSS, Framer Motion. Hosted on Vercel.",
      rights: "© 2026 Hein Htet Aung",
    },
  },
} as const;

export type Content = (typeof content)[Locale];
