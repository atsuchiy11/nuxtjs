import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import Vuetify from 'vuetify';
import KbnTaskDetail from '~/components/kbn-task-detail/index.vue';

/**
 * [Vuetify] Unable to locate target [data-app]を回避する
 * @returns {void} void
 */
function addDataAppToBoby() {
  const app = document.createElement('div');
  app.setAttribute('data-app', 'true');
  document.body.append(app);
}

type TestCase = {
  name: string;
  id: string;
  input: string;
  expected: string;
};

describe('/components/kbn-task-detail', () => {
  beforeEach(() => {
    addDataAppToBoby();
  });

  describe.each<TestCase>([
    {
      name: 'input/ タスク名',
      id: 'input-task-name',
      input: 'Task A',
      expected: 'Task A',
    },
    {
      name: 'input/ 説明',
      id: 'input-description',
      input: 'Hello,{enter}World',
      expected: 'Hello,\nWorld',
    },
  ])('Input', ({ name, id, input, expected }) => {
    test(name, async () => {
      render(KbnTaskDetail, {
        vuetify: new Vuetify(),
      });
      const inputElement = screen.getByTestId(id);
      expect(inputElement).toBeInTheDocument();

      await userEvent.type(inputElement, input);
      expect(await screen.findByTestId(id)).toHaveValue(expected);
    });
  });
});
