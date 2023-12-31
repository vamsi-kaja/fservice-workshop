import Route from '@ember/routing/route';

export default class Assignment3Route extends Route {
  model() {
    return [{
      name: 'details',
      label: 'Details',
      content: 'Details'
    }, {
      name: 'relatedCases',
      label: 'Related Cases',
      content: 'Related Cases'
    }, {
      name: 'tasks',
      label: 'Tasks',
      content: 'Tasks'
    }, {
      name: 'assets',
      label: 'Assets',
      content: 'Assets'
    }]
  }

  setupController(controller, model) {
    super.setupController(...arguments);
    controller.set('selectedTab', model.firstObject.name);
  }
}
