const { Router } = require('@layer0/core/router')

module.exports = new Router()
  // Send requests to static assets in the build output folder `public`
  .static('static')

  // Send everything else to the App Shell
  .fallback(({ appShell }) => {
    appShell('prerendered/fallback.html')
  })