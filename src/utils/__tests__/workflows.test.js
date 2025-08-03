import latestBlogs from '../workflows';

describe('latestBlogs', () => {
  it('handles no blog providers selected', () => {
    const payload = {
      dev: { show: false, username: '' },
      rssurl: { show: false, username: '' },
      medium: { show: false, username: '' },
    };

    const data = latestBlogs(payload);
    expect(data).toContain('feed_list: ""');
  });
});
