export default {
  Query: {
    articles: async (parent, args, { Article }) => {
      const articles = await Article.find()
      return articles
    }
  },
  Mutation: {
    createArticle: async (parent, args, { Article }) => {
      const article = await new Article(args).save()
      return article
    }
  }
}