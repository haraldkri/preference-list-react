# Simple Preference List Website

### url:

- `https://preference-list-react.web.app/`

### using:

- React (+ Typescript)
- Firebase
- Git (+ Github)

## TODO

- include i18n for multilanguage support


## For developers
### For running cypress
- The project requires:
  - `projectRoot/cypress.env.json` to run cypress e2e tests. The file should look similar to this:
    ```
    {
      "TEST_UID": "someRandomUID"
    }
    ```
    TEST_UID contains the uid of the user that should be used to test the login functionality of the app (see here for more information: [cypress-firebase](https://www.npmjs.com/package/cypress-firebase#user-content-auth) 

  - `projectRoot/src/config/serviceAccount.ts` to authenticate the Admin SDK. The file should look similar to this:
    ```
    type DefaultServiceAccount = {
      type: string,
      project_id: string,
      private_key_id: string,
      private_key: string,
      client_email: string,
      client_id: string,
      auth_uri: string,
      token_uri: string,
      auth_provider_x509_cert_url: string,
      client_x509_cert_url: string,
      universe_domain: string
    }
    
    export const serviceAccount: DefaultServiceAccount = {
      ...
    }
    ```
    more information: [cypress-firebase](https://www.npmjs.com/package/cypress-firebase#user-content-setup)
