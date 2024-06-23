import { bootstrap, runMigrations } from '@vendure/core';
import core from '@vendure/core';
import { config } from '../src/vendure-config';

runMigrations(config)
    .then(() => bootstrap(config))
    .catch(err => {
        console.log(err);
    });
