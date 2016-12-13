import AbstractAdapter from './Adapters/Abstract';

export default class AdapterFactory {
    constructor() {
        this.adapters = [];
    }

    registerAdapter(adapter) {
        if (!adapter instanceof AbstractAdapter) {
            throw Error('Only classes extending Abstract adapter can be registered.');
        }
        this.adapters.push(adapter);
    }

    getPlayer(url) {
        for(var adapter of this.adapters) {
            if (adapter.canPlay(url)) {
                return adapter.init(url);
            }
        }

        return Promise.reject('Cannot find player to play.');
    }
}
