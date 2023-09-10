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
        "TEST_UID": "someRandomUID",
        "FIREBASE_PROJECT_ID": "serviceAccountProjectId",
        "FIREBASE_PRIVATE_KEY": "serviceAccountPrivateKey",
        "FIREBASE_CLIENT_EMAIL": "serviceAccountClientEmail"
      }
      ```
      - `TEST_UID` contains the uid of the user that should be used to test the login functionality of the app (see here for
      more information: [cypress-firebase](https://www.npmjs.com/package/cypress-firebase#user-content-auth)
      - `FIREBASE_*` to authenticate the Admin SDK \
      more information: [cypress-firebase](https://www.npmjs.com/package/cypress-firebase#user-content-setup)