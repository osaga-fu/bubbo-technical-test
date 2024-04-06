const admin = require("firebase-admin");
const config = require("../config/config");

const serviceAccount = require("../firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.firebaseConfig.databaseURL,
});

const firestore = admin.firestore();

module.exports = firestore;

