require('babel-register')()

import { jsdom } from 'jsdom'
import chai from 'chai'
// import chaiEnzyme from 'chai-enzyme'
// import chaiJsx from 'chai-jsx'

var exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}
