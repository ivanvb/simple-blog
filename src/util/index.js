const slugify = require('slugify');

module.exports.titleToSlug = function (title) {
    return `/blog/posts/${slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g })}`;
};
