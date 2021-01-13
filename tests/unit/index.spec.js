import { createLocalVue } from '@vue/test-utils';
import { config as dotenv } from 'dotenv';
import path from 'path';

import VueEnvPlugin from '@/index';

describe('Vue env plugin', () => {
  dotenv({ path: path.join(__dirname, '.env.test') });

  test('loads environment into plugin', () => {
    const localVue = createLocalVue();
    localVue.use(VueEnvPlugin);

    // Env var
    expect(localVue.prototype.$env).toHaveProperty('TEST_VAR', 'Hello World');
    // Camelcase
    expect(localVue.prototype.$env).toHaveProperty('testVar', 'Hello World');
    // Vue env var
    expect(localVue.prototype.$env).toHaveProperty(
      'VUE_APP_TEST_VAR_2',
      'Hello Vue'
    );
    // Vue shortcut
    expect(localVue.prototype.$env).toHaveProperty('TEST_VAR_2', 'Hello Vue');
    // Vue camelcase
    expect(localVue.prototype.$env).toHaveProperty(
      'vueAppTestVar2',
      'Hello Vue'
    );
    // Vue shortcut camelcase
    expect(localVue.prototype.$env).toHaveProperty('testVar2', 'Hello Vue');
  });
});
