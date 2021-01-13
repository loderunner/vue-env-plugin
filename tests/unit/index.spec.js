import { createLocalVue, mount } from '@vue/test-utils';
import { config as dotenv } from 'dotenv';
import path from 'path';

import VueEnvPlugin from '@/index';

describe('Vue env plugin', () => {
  dotenv({ path: path.join(__dirname, '.env.test') });

  test('loads environment into plugin', () => {
    const localVue = createLocalVue();
    localVue.use(VueEnvPlugin);

    const Component = {
      template: '<div>Hello World</div>'
    };
    const wrapper = mount(Component, { localVue });

    // Env var
    expect(wrapper.vm.$env).toHaveProperty('TEST_VAR', 'Hello World');
    // Camelcase
    expect(wrapper.vm.$env).toHaveProperty('testVar', 'Hello World');
    // Vue env var
    expect(wrapper.vm.$env).toHaveProperty('VUE_APP_TEST_VAR_2', 'Hello Vue');
    // Vue shortcut
    expect(wrapper.vm.$env).toHaveProperty('TEST_VAR_2', 'Hello Vue');
    // Vue camelcase
    expect(wrapper.vm.$env).toHaveProperty('vueAppTestVar2', 'Hello Vue');
    // Vue shortcut camelcase
    expect(wrapper.vm.$env).toHaveProperty('testVar2', 'Hello Vue');
  });
});
