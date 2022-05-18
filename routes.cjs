const { Router } = require('@layer0/core/router')
const { svelteKitRoutes } = require('@layer0/sveltekit/router');

const cacheHandler = ({ removeUpstreamResponseHeader, cache }) => {
  removeUpstreamResponseHeader('cache-control')
  cache({
    edge: {
      maxAgeSeconds: 60 * 60 * 24,
      staleWhileRevalidateSeconds: 60 * 60 * 24,
    },
    browser: {
      maxAgeSeconds: 0,
      serviceWorkerSeconds: 60 * 60 * 24,
    },
  })
}

module.exports = new Router()
  // Send requests to static assets in the build output folder `public`
  .static('static')
  .match('/:path*/:file.json', cacheHandler)
  .match('/:path*', cacheHandler)
  .use(svelteKitRoutes)

  // Send everything else to the App Shell
  .fallback(({ appShell }) => {
    appShell('prerendered/fallback.html')
  })