import { camel, of } from 'case';
import _ from 'lodash';

export default {
  install(Vue) {
    const env = { ...process.env };
    const vueAppShortcuts = _(env)
      .pickBy((_, k) => k.startsWith('VUE_APP_'))
      .mapKeys((_, k) => k.substring(8))
      .value();
    const camelCase = _.mapKeys({ ...env, ...vueAppShortcuts }, (_, k) => {
      if (of(k) === 'constant') {
        return camel(k);
      }
      return k;
    });

    Vue.prototype.$env = {
      ...env,
      ...vueAppShortcuts,
      ...camelCase
    };
  }
};
