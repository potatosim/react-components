import { formPageTests } from './formPageTests';
import { homepageTests } from './homepageTests';
import { routesTests } from './routesTests';

describe('e2e tests', () => {
  formPageTests();
  homepageTests();
  routesTests();
});
