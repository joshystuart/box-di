import TestFactory from './test-factory';
import Config from './config';
import Box from '../lib/box';

Box.register('config', () => {
    return Config;
});
Box.register('test', TestFactory);

const test = Box.get('test');
console.log(test.getConfig());