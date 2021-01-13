import { camel } from 'case';
import _ from 'lodash';

export default {
  install(Vue) {
    const env = { ...process.env };
    const vueAppShortcuts = _(env)
      .pickBy((_, k) => k.startsWith('VUE_APP'))
      .mapKeys((_, k) => k.substring(7))
      .value();
    const camelCase = _.mapKeys({ ...env, ...vueAppShortcuts }, camel);

    Vue.prototype.$env = {
      ...env,
      ...vueAppShortcuts,
      ...camelCase
    };
  }
};
