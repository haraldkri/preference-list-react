import * as admin from 'firebase-admin';
import {defineConfig} from 'cypress';
import {plugin as cypressFirebasePlugin} from 'cypress-firebase';
import {serviceAccount} from "./src/config/serviceAccount";

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        // NOTE: Add "supportFile" setting if separate location is used
        setupNodeEvents(on, config) {
            // e2e testing node events setup code
            return cypressFirebasePlugin(on, config, admin, {
                credential: admin.credential.cert({
                    projectId: serviceAccount.project_id,
                    privateKey: serviceAccount.private_key,
                    clientEmail: serviceAccount.client_email
                })
                // Here is where you can pass special options.
                // If you have not set the GCLOUD_PROJECT environment variable, give the projectId here, like so:
                //    projectId: 'some-project',
                // if your databaseURL is not just your projectId plus ".firebaseio.com", then you _must_ give it here, like so:
                //    databaseURL: 'some-project-default-rtdb.europe-west1.firebasedatabase.app',
            });
        },
    },
});