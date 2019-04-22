import Test from './test';
import inject from '../lib/inject';
import { scope, prototype } from '../lib/scope';
import FactoryInterface from '../lib/factory-interface';

/**
 * A test factory with the fancy decorators that will tell {@link Box} what dependencies to instantiate the class with.
 */
class TestFactory extends FactoryInterface {
  @scope(prototype)
  @inject('config')
  static createInstance(config) {
    return new Test(config);
  }
}

export default TestFactory;
