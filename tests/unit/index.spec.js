import { createLocalVue, mount } from '@vue/test-utils';

import VueEnvPlugin from '@/index';

describe('Vue env plugin', () => {
  test('loads environment into plugin', () => {
    const localVue = createLocalVue();
    localVue.use(VueEnvPlugin);

    const wrapper = mount(localVue);
    console.log(wrapper.$env);
  });
});
