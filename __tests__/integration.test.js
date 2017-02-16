const hackerNews = require('../src/hacker-news')

describe('hacker-news-integration', () => {
  test('return an array with title´s and value´s', () => {
    const request = hackerNews.load()

    return request.then((articles) => {
      expect(articles).toBeInstanceOf(Array)

      articles.forEach((article) => {
        expect(article.title).toBeDefined()
        expect(article.value).toBeDefined()
      })
    })
  })
})
