var keystone = require('keystone');

/**
 * ArticleIssue Model
 * ==================
 */

var ArticleIssue = new keystone.List('ArticleIssue', {
	autokey: { path: 'slug', from: 'name', unique: true },
	label: 'Issues',
	path: 'issues'
});

ArticleIssue.add({
	name: { type: String, required: true },
});

ArticleIssue.relationship({ ref: 'Article', path: 'articles', refPath: 'issue' });

// ArticleIssue.register(); // Not used right now.