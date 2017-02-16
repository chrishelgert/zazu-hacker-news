const zazuHackerNews = require('../src/index')
const hackerNews = require('../src/hacker-news')

describe('zazu-hacker-news', () => {
  beforeEach(() => {
    hackerNews.load = jest.fn()
  })

  test('it will call hackerNews', () => {
    zazuHackerNews()()

    expect(hackerNews.load).toHaveBeenCalled()
  })
})
