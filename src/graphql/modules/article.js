const types = `
  type Article {
    id: ID!
    headline: String
    intro: String
    authors: [Author]
  }

  type Author {
    id: ID!
    firstName: String
    lastName: String
  }

  input AuthorInput {
    firstName: String
    lastName: String
  }
`

const queries = `
  articles: [Article!]!
`

const mutations = `
  createArticle(headline: String!, intro: String, authors: [AuthorInput]): Article
`

export { types, queries, mutations }