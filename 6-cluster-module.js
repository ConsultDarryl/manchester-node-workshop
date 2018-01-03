var cluster = require('cluster');

if (cluster.isWorker) {
    console.log('I am a worker');
} else {
    console.log('I am a master');
    cluster.fork();
    cluster.fork();
}