module.exports = {
  name: 'dep-graph-issue',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dep-graph-issue',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
