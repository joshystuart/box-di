import Box from './lib/box';
import inject from './lib/inject';
import FactoryInterface from './lib/factory-interface';

// es5 export
export default {
    Box: Box,
    inject: inject,
    FactoryInterface: FactoryInterface
};

// es6 exports
export {Box, inject, FactoryInterface};
