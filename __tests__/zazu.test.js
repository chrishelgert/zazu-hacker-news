const config = require('../zazu.json')

describe('zazu', () => {
  test('is a valid json-file', () => {
    expect(config).toBeInstanceOf(Object)
  })
})
