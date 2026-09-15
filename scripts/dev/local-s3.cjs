// Loopback-only S3 storage for local development; production uses configured S3/MinIO.
const S3rver = require('s3rver');
const { DUMMY_ACCOUNT } = require('s3rver/lib/models/account');
const path = require('node:path');
const fs = require('node:fs');
const root = path.resolve(__dirname, '../..');
const directory = path.join(root, 'var/s3');
fs.mkdirSync(directory, {recursive:true});
DUMMY_ACCOUNT.createKeyPair(process.env.S3_ACCESS_KEY_ID || 'yumate', process.env.S3_SECRET_ACCESS_KEY || 'yumate-secret');
const server = new S3rver({address:'127.0.0.1',port:59000,directory,silent:true,configureBuckets:[{name:process.env.S3_BUCKET || 'yumate-attachments'},{name:'yumate-attachments-e2e'}]});
server.run().then(()=>console.log('YuMate local S3 ready on 127.0.0.1:59000')).catch(e=>{console.error(e.message);process.exitCode=1;});
for (const sig of ['SIGTERM','SIGINT']) process.on(sig,()=>server.close().then(()=>process.exit(0)));
