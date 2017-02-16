const got = require('got')

module.exports.load = () => (
  got('http://node-hnapi.herokuapp.com/news', { json: true })
    .then(response => response.body.map(article => ({
      title: article.title,
      value: article.url,
    })))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error.response.body)
    })
)
