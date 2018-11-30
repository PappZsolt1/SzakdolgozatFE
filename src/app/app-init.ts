import { KeycloakService } from 'keycloak-angular';

import { environment } from '../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: environment.keycloak,
          initOptions: {
            checkLoginIframe: false            
          },
          loadUserProfileAtStartUp: false,
          bearerExcludedUrls: ["assets"]
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}