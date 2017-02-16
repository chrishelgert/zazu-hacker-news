const hackerNews = require('./hacker-news')

module.exports = () => () => hackerNews.load()
