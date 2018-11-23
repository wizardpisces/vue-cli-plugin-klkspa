import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user,
    },
});

if (module.hot) { // module hot ( eg:user ) not working for now? can detect module file change but not hotUpdate state

    // accept actions and mutations as hot modules
    module.hot.accept(['./user'], () => {
        const user = require('./user').default;
        // swap in the new actions and mutations
        store.hotUpdate({ modules: { user } });
    });
}

export default store;
