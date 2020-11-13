module.exports = {
  title: 'Documentos',
  tagline: 'Bla bla bla',
  url: 'https://caesiufcg.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/caesi-logo.png',
  organizationName: 'caesiufcg',
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Documentos',
      logo: {
        alt: 'CAESI',
        src: 'img/caesi-logo.png',
      },
      items: [
        {
          to: 'docs/gestao',
          activeBasePath: 'docs/gestao',
          label: 'Gestão',
          position: 'right',
        },
        {
          to: 'docs/assembleia',
          activeBasePath: 'docs/assembleia',
          label: 'Assembléia',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Gestão',
          items: [
            {
              label: 'Ata Posse 2018',
              to: 'docs/management/ata2018',
            },
            {
              label: 'Ata Posse 2019',
              to: 'docs/management/ata2019',
            },
          ],
        },
        {
          title: 'Assembléia',
          items: [
            {
              label: '25/10/2017',
              to: 'docs/assembly/25-10-17',
            },
            {
              label: '06/12/2017',
              to: 'docs/assembly/06-12-17',
            },
            {
              label: '07/03/2018',
              to: 'docs/assembly/07-03-18',
            },
          ],
        },
        {
          title: 'Acompanhe-nos',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/caesiufcg',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCo2_oSgST-Tm6WqMxg6G_wg',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/caesiufcg/?hl=pt-br',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
