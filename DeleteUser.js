const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// Function to delete a user by UID
async function deleteUserAccount(uid) {
  try {
    await admin.auth().deleteUser(uid);
    console.log(`Successfully deleted user: ${uid}`);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}
