const middleware = {}
/* eslint-disable dot-notation */

middleware['isCompany'] = require('..\\middleware\\isCompany.js')
middleware['isCompany'] = middleware['isCompany'].default || middleware['isCompany']

middleware['isNotLoggedIn'] = require('..\\middleware\\isNotLoggedIn.js')
middleware['isNotLoggedIn'] = middleware['isNotLoggedIn'].default || middleware['isNotLoggedIn']

middleware['isUser'] = require('..\\middleware\\isUser.js')
middleware['isUser'] = middleware['isUser'].default || middleware['isUser']

/* eslint-enable dot-notation */
export default middleware
