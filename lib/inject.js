import Box from './box';

/**
 * A decorator that injects dependencies into the di container
 *
 * @param dependencies {Array}
 * @returns {function()}
 */
export default (...dependencies) => {
    return (factory) => {
        if (typeof(factory.createInstance) === 'function') {
            Box.registerFactory(factory, dependencies);
        } else {
            throw new Error(`The factory ${factory.name} has a non-standard interface.
            Please create one with a static method "createInstance"`);
        }
    };
};
