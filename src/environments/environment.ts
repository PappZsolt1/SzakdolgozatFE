// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { KeycloakConfig } from 'keycloak-angular';

let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8081/auth',
  realm: 'SzakdolgozatRealm',
  clientId: 'SzakdolgozatFE'
};

export const environment = {
  keycloak: keycloakConfig,
  production: false
};
