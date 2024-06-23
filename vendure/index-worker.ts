import { bootstrapWorker } from '@vendure/core';
import { config } from '../src/vendure-config';

bootstrapWorker(config)
    .then(worker => worker.startJobQueue())
    .catch(err => {
        console.log(err);
    });
