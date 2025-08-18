export const homeCopy = {
  hero: {
    title: 'Venha conhecer nossas promoções',
    subtitle: '50% Off nos produtos',
    ctaLabel: 'Ver produto',
    imageUrl: '/images/hero.jpg',
  },
  sections: {
    relatedTitle: 'Produtos relacionados',
    newsletterTitle: 'Inscreva-se na nossa newsletter',
    newsletterSubtitle: 'Assine a nossa newsletter e receba novidades e conteúdos exclusivos da Econverse.',
    institutional: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: [
          { id: 'ig', href: '#', label: 'Instagram', iconPath: '/images/icons/instagram.png' },
          { id: 'fb', href: '#', label: 'Facebook', iconPath: '/images/icons/facebook.png' },
          { id: 'ln', href: '#', label: 'LinkedIn', iconPath: '/images/icons/linkedin.png' },
        ],
      columns: [
        {
          id: 'inst',
          heading: 'Institucional',
          links: [
            { id: 'sobre', label: 'Sobre Nós', href: '#' },
            { id: 'mov', label: 'Movimento', href: '#' },
            { id: 'jobs', label: 'Trabalhe conosco', href: '#' },
          ],
        },
        {
          id: 'help',
          heading: 'Ajuda',
          links: [
            { id: 'suporte', label: 'Suporte', href: '#' },
            { id: 'contato', label: 'Fale Conosco', href: '#' },
            { id: 'faq', label: 'Perguntas Frequentes', href: '#' },
          ],
        },
        {
          id: 'terms',
          heading: 'Termos',
          links: [
            { id: 'tc', label: 'Termos e Condições', href: '#' },
            { id: 'pp', label: 'Política de Privacidade', href: '#' },
            { id: 'troca', label: 'Troca e Devolução', href: '#' },
          ],
        },
      ],
    },
  },
  tabs: [
    { id: 'cel', label: 'Celular', target: 'celular' },
    { id: 'acc', label: 'Acessórios', target: 'acessorios' },
    { id: 'tab', label: 'Tablets', target: 'tablets' },
    { id: 'nb', label: 'Notebooks', target: 'notebooks' },
    { id: 'tv', label: 'TVs', target: 'tvs' },
    { id: 'all', label: 'Ver todos', target: 'ver-todos', align: 'right' },
  ],
};
