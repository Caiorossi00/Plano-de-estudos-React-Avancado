const topicos = [
  {
    tema: "React",
    isOpenDefault: true,

    modulos: [
      {
        modulo: "Módulo 1",
        isOpenDefault: true,

        aulas: [
          {
            titulo: "Filosofia e Paradigma do React",
            detalhamento: [
              {
                titulo: "1. Paradigma declarativo vs imperativo",
                contentMarkdown: `
  # 1. Paradigma declarativo vs imperativo
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                      `,
              },
              {
                titulo: "2. React como UI derivada de estado",
                contentMarkdown: `
  # 2. React como UI derivada de estado
  Sed convallis tristique sem. Proin ut ligula non nisi egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, turpis. Nullam sollicitudin.
                      `,
              },
              {
                titulo: "3. Composição de componentes e árvore de renderização",
                contentMarkdown: `
  # 3. Composição de componentes e árvore de renderização
  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula non nisi egestas porttitor.
                      `,
              },
              {
                titulo: "4. O papel da previsibilidade e da pureza de funções",
                contentMarkdown: `
  # 4. O papel da previsibilidade e da pureza de funções
  Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                      `,
              },
              {
                titulo: "5. Abstração entre dados → estado → interface",
                contentMarkdown: `
  # 5. Abstração entre dados → estado → interface
  Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula non nisi egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                      `,
              },
              {
                titulo: "6. O que diferencia o React de frameworks MVVM/MVC",
                contentMarkdown: `
  # 6. O que diferencia o React de frameworks MVVM/MVC
  Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, turpis. Nullam sollicitudin. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                      `,
              },
            ],
          },

          {
            titulo: "O motor do React (Virtual DOM e Fiber)",
            contentMarkdown: `
  # O motor do React (Virtual DOM e Fiber)
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              `,
          },
          {
            titulo: "Hooks em nível conceitual",
            contentMarkdown: `
  # Hooks em Nível Conceitual
  Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
              `,
          },
          {
            titulo: "Estado, dados e arquitetura",
            contentMarkdown: `
  # Estado, dados e arquitetura
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
              `,
          },
        ],
      },
      {
        modulo: "Módulo 2",
        isOpenDefault: false,
        aulas: [
          {
            titulo: "Gerenciamento de Estado Global com Context API",
            contentMarkdown: `
  # Context API
  Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
              `,
          },
        ],
      },
      {
        modulo: "Módulo 3",
        isOpenDefault: false,
        aulas: [
          {
            titulo: "Otimização e Performance",
            contentMarkdown: `
  # Otimização e Performance
  Sed convallis tristique sem. Proin ut ligula non nisi egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
              `,
          },
        ],
      },
    ],
  },
];

export default topicos;
