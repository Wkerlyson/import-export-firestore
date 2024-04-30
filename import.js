const { initializeFirebaseApp, restore } = require('firestore-export-import')

const serviceAccount = require('./serviceAccountKey.json')


const appName = '[DEFAULT]'
const firestore = initializeFirebaseApp(serviceAccount, appName)

restore(firestore, 'collection.json', {
    dates: ['completedDate'],
})