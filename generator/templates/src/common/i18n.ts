import Vue from 'vue';
import VueI18n, { LocaleMessages} from 'vue-i18n';
import { getLangFromCookie} from './utils';
import {
    localesList,
} from './config';

import path from 'path';


function loadResource(): LocaleMessages {
    const resources: LocaleMessages = {};
    const files = require.context('@/locales', false, /.json$/);
    for (const filename of files.keys()) {
        const name = path.basename(filename, '.json');
        if (localesList.includes(name)) {
            resources[name] = files(filename);
        }
    }
    return resources;
}

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: getLangFromCookie(),
    messages: loadResource(),
});

export default i18n;
