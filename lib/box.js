import _ from 'lodash';
import container from 'kontainer-di';
import FactoryInterface from './factory-interface';
const registeredFactories = [];

class Box {
    /**
     *
     * @param serviceName {String}
     * @param factory {FactoryInterface|Function}
     * @param dependencies {Array=}
     * @public
     */
    static register(serviceName, factory, dependencies) {
        // for "backwards" compatibility with kontainer-di
        if (_.isArray(factory)) {
            const temp = factory;
            factory = dependencies;
            dependencies = temp;
        }

        // check for the factory pattern
        if (_.isFunction(factory.createInstance)) {
            // get the dependencies from annotations if they haven't been passed in.
            dependencies = !!dependencies ? dependencies : Box._getDependencies(factory);
            container.registerModule(serviceName, dependencies, factory.createInstance);
        } else if (!_.isUndefined(factory)) {
            // use the passed in function, object, string, etc, instead of the factory pattern
            container.registerModule(serviceName, dependencies || [], factory);
        } else {
            throw new Error(`The arguments for ${serviceName} are not valid`);
        }
    }

    /**
     * Returns the invoked service if it exists in the container.
     *
     * @param serviceName
     * @returns {*}
     * @public
     */
    static get(serviceName) {
        return container.getModule(serviceName);
    }

    /**
     * @return {kontainer}
     * @public
     */
    static getContainer() {
        return container;
    }

    /**
     * Registers the factory to the box. This is invoked by @inject so we can store the dependencies for later
     * consumption in the register method.
     *
     * @param factory {FactoryInterface}
     * @param dependencies {Array}
     * @public
     */
    static registerFactory(factory, dependencies) {
        registeredFactories.push({
            factory: factory,
            dependencies: dependencies
        });
    }

    /**
     *
     * @param factory {FactoryInterface}
     * @returns {Object}
     * @private
     */
    static _findRegisteredFactory(factory) {
        return _.find(registeredFactories, (registeredFactory)=> {
            return factory === registeredFactory.factory;
        });
    }

    /**
     *
     * @param factory {FactoryInterface}
     * @returns {Array}
     * @private
     */
    static _getDependencies(factory) {
        const registeredFactory = Box._findRegisteredFactory(factory);
        let dependencies = [];

        if (!!registeredFactory && registeredFactory.dependencies) {
            dependencies = registeredFactory.dependencies;
        }

        return dependencies;
    }
}

export default Box;
