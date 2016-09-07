import Box from './lib/box';
import inject from './lib/inject';
import {scope, prototype, singleton} from './lib/scope';
import FactoryInterface from './lib/factory-interface';

// es5 export
export default {
    Box: Box,
    inject: inject,
    scope: scope,
    prototype: prototype,
    singleton: singleton,
    FactoryInterface: FactoryInterface
};

// es6 exports
export {Box, inject, scope, singleton, prototype, FactoryInterface};
