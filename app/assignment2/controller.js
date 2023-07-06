import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Assignment2Controller extends Controller {
  @tracked selectedTab = null;

  @action
  selectTab(selectedTab) {
    this.selectedTab = selectedTab;
  }
}
