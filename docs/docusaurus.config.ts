import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Aayushi Code',
  tagline: 'The fast, native code editor that stays out of your way',
  favicon: 'img/aayushicode_icon.png',

  // Improve compatibility with the upcoming Docusaurus v4
  future: {
    v4: true,
  },

  // Output config: served under /aayushii-code/ on GitHub Pages
  url: 'https://aayushpokhrel49.github.io',
  baseUrl: '/aayushii-code/',

  organizationName: 'aayushpokhrel49',
  projectName: 'aayushii-code',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          breadcrumbs: true,
          editUrl: 'https://github.com/aayushpokhrel49/aayushii-code/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/editor-dark.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    metadata: [
      { name: 'keywords', content: 'Aayushi Code, code editor, Rust, GPU, fast editor, native editor' },
      { name: 'description', content: 'Aayushi Code - The fast, native code editor that stays out of your way. Built in Rust with GPU-accelerated rendering.' },
    ],
    navbar: {
      title: 'Aayushi Code',
      logo: {
        alt: 'Aayushi Code',
        src: 'img/aayushicode_icon.png',
        width: 32,
        height: 32,
      },
      items: [
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Documentation' },
        { to: '/download', label: 'Download', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'left' },
        {
          href: 'https://github.com/aayushpokhrel49/aayushii-code',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting started', to: '/docs/intro' },
            { label: 'Installation', to: '/docs/installation' },
            { label: 'Interface', to: '/docs/interface' },
            { label: 'Keyboard shortcuts', to: '/docs/shortcuts' },
            { label: 'FAQ', to: '/docs/faq' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/aayushpokhrel49/aayushii-code/discussions',
            },
            {
              label: 'Report a bug',
              href: 'https://github.com/aayushpokhrel49/aayushii-code/issues',
            },
            { label: 'Contact', to: '/contact' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'About', to: '/about' },
            { label: 'Download', to: '/download' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aayushi Code. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;