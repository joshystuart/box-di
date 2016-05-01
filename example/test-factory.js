import Test from './test';
import inject from '../lib/inject';
import FactoryInterface from '../lib/factory-interface';

/**
 * A test factory with the fancy decorators that will tell {@link Box} what dependencies to instantiate the class with.
 */
class TestFactory extends FactoryInterface {
    @inject('config')
    static createInstance(config) {
        return new Test(config);
    }
}

export default TestFactory;