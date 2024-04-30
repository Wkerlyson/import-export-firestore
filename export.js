const { initializeFirebaseApp } = require('firestore-export-import')

const serviceAccount = require('./serviceAccountKey.json')


const appName = '[DEFAULT]'
const firestore = initializeFirebaseApp(serviceAccount, appName)

const { backup } = require('firestore-export-import')

backup(firestore, 'workouts').then((data) =>
  console.log(JSON.stringify(data))
)
