import * as article from './modules/article'

const types = [
  article,
]

const schema = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    ${ types.map(({ queries }) => queries) }
  }
  
  type Mutation {
    ${ types.map(({ mutations }) => mutations) }
  }

  ${ types.map(({ types }) => types) }
`

export default schema
