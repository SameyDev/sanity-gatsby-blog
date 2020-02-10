export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e411bbe9d1eab1808697e9c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-izcbadxw',
                  apiId: '87ead6a4-a891-47aa-8133-d0a9a212b52e'
                },
                {
                  buildHookId: '5e411bbf4f520e7affe7fd27',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-22r8q4s6',
                  apiId: '8a10fd9c-3a85-4441-a48d-e09019efd771'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SameyDev/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-22r8q4s6.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
