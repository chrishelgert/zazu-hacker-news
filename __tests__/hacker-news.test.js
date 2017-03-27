jest.mock('got')

const got = require('got')
const hackerNews = require('../src/hacker-news')

describe('hacker-news', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.error = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('load', () => {
    test('it calls got and map the response to title and value', () => {
      got.mockImplementation(
        () =>
          new Promise(resolve =>
            resolve({
              body: [
                {
                  title: 'test',
                  url: 'www.test.com/test',
                },
              ],
            })),
      )

      return hackerNews.load().then((articles) => {
        expect(got).toHaveBeenCalledWith('http://node-hnapi.herokuapp.com/news', { json: true })
        expect(articles).toBeInstanceOf(Array)

        expect(articles[0]).toEqual({
          id: 'hn-test',
          title: 'test',
          value: 'www.test.com/test',
        })
      })
    })

    test('it will log the error to the console', () => {
      got.mockImplementation(
        () =>
          new Promise((resolve, reject) =>
            reject({
              response: { body: 'Internal Server Error' },
            })),
      )

      return hackerNews.load().catch(() => {
        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalledWith('Internal Server Error')
      })
    })
  })
})
