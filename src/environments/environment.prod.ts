import {env} from 'src/environments/.env';

export const environment = {
  production: false,
  version: env.npm_package_version,
  serverUrl: '/',
  defaultLanguage: 'es-ES',
  supportedLanguages: ['es-ES'],
  serverApi: 'https://orangevalleycaa.org/api/videos/',
};
