const locales = ['en', 'de', 'bs']

module.exports = {
  allLocales: locales,
  defaultLocale: 'en',
  messages: require('../locales/json/translations.json') || {},
  defaultLocaleInRoutes: false,
  usingRouter: true,
  routingStyle: 'redirect',
  forceReloadOnSwitch: false,
  storageMethod: 'cookie',
  storageKey: 'locale',
  cookieExpirationInDays: 182
}
