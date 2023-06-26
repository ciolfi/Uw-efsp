/*  @type {import('next').NextConfig}  */

const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  env: {
    'MYSQL_HOST': 'db.unitedwayatlantaefsp.org',
    'MYSQL_DATABASE': 'unitedwayatlantaefsp',
    'MYSQL_USER': 'efsp_mngr',
    'MYSQL_PASSWORD':'TKL72wvu$',
    'GOOGLE_CLIENT_ID':'91399484004-6mg53m6mcoul9fgr3i0crimncjnic0g2.apps.googleusercontent.com',
    'GOOGLE_CLIENT_SECRET':'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'
  }
}

module.exports = withPWA(
  nextConfig,
)