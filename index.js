const parseChangelogItem = text => {
  const [heading, ...contentLines] = text.split('\n');
  const [version, date] = heading.split(' - ').map(x => x.trim());
  const content = contentLines.join('\n');
  return { version, date, content };
};

const parseChangelog = text => {
  const versions = text.split('##').slice(1);
  return versions.map(parseChangelogItem);
};

module.exports = {
  default: parseChangelog,
  parseChangelog,
  parseChangelogItem,
};