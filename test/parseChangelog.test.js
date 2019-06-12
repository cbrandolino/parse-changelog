const { readFileSync } = require('fs');
const path = require('path');
const { parseChangelogItem, parseChangelog } = require('../index.js');

describe('parseChangelog', () => {
  it('correctly parses simple semver file', () => {
    const content = readFileSync(path.join(__dirname, 'changelogExamples', 'simpleSemver.md'));

    expect(parseChangelog(content.toString())).toMatchSnapshot();
  });
});