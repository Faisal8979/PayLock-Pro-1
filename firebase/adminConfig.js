const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

// 🔥 Firebase Admin Initialize करो
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// 🔗 Firestore Instance Export करो
const db = admin.firestore();

module.exports = { admin, db };
