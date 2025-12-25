const admin = require('firebase-admin');
const path = require('path');

//incarc service account key
const serviceAccount = require('./serviceAccountKey.json');

//initializ firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//export firestore instance
const db = admin.firestore();

//export auth instance
const auth = admin.auth();

//setari performanta
db.settings({
  ignoreUndefinedProperties: true,
  timestampsInSnapshots: true
});

console.log('Firebase Admin initialized successfully');
console.log(`Project ID: ${serviceAccount.project_id}`);

module.exports = {
  admin,
  db,
  auth
};