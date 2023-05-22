const { execSync } = require('child_process');

const dbName = "ucademy";
const collectionName = "users";
const jsonFilePath = 'DB.json';
const containerName = "technical-assessment-my-service-1";


const importCommand = `docker exec -i ${containerName} mongoimport --jsonArray --db ${dbName} --collection ${collectionName} --file /data/${jsonFilePath}`;

try {
  execSync(importCommand, { stdio: 'inherit' });
  console.log('Data imported successfully!');
} catch (error) {
  console.error('Data import failed:', error);
}

