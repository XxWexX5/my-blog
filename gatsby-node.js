const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query GET_POSTS {
      markdown: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        posts: edges {
          post: node {
            ...POST
          }
        }
      }
    }

    fragment POST on MarkdownRemark {
      id
      timeToRead
      frontmatter {
        category
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM YYYY")
        background
      }
      fields {
        slug
      }
    }
  `)

  const posts = data.markdown.posts

  posts.forEach(edge => {
    const slug = edge.post.fields.slug

    actions.createPage({
      path: slug,
      component: path.resolve(`./src/template/blog-post.jsx`),
      context: { slug: slug },
    })
  })

  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? "/" : `/page/${index + 1}`,
      component: path.resolve(`./src/template/blog-list.jsx`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })
}
