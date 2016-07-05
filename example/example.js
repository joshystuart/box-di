import winston from 'winston';
import TestFactory from './test-factory';
import Config from './config';
import Box from '../lib/box';
winston.level = 'debug';

Box.setLogger(winston);

Box.register('config', () => {
    return Config;
});
Box.register('test', TestFactory);

const test = Box.get('test');
console.log(test.getConfig());