import { getGreeting } from '../support/app.po';

describe('dep-graph-issue', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to dep-graph-issue!');
  });
});
