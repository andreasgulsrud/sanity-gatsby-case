export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5df8613b4b0e89ff28ee8e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-case-studio',
                  apiId: '5f8a6e0b-0dc5-4851-a3eb-8d8d9258dcd3'
                },
                {
                  buildHookId: '5f5df861b8c30d46e735e262',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-case',
                  apiId: '7e094abc-8732-40fa-b444-ea06a1d60afd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andreasgulsrud/sanity-gatsby-case',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-case.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
