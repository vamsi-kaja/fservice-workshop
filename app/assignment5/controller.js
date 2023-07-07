import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class Assignment5Controller extends Controller {
  names = ['Stefan', 'Miguel', 'Tomster', 'Pluto'];
  @action
  foo() { }
}
