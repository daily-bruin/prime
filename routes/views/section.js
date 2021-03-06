var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals.
	locals.filters = {
        section: req.params.section
	};
	locals.data = {
        section: req.params.section,
        featured: null,
        mainarticle: null // The "top" article of the section.
	};

	// Load featured articles in this section.
	view.on('init', async function (next) {
        // Load global config.
        try {
            locals.data.config = await keystone.list('Configuration').model.findOne();
    
            if (!locals.data.config.sections.includes(locals.data.section)) {
                res.status(404).send('Section does not exist.');
                return;                
            }

            locals.data.featured = await keystone.list('Article').model
                .find({ 
                    featured: 'featured',
                    section: locals.filters.section
                 })
                .populate('article');
     
            locals.data.mainarticle = await keystone.list('Article').model
                .findOne({ section: locals.filters.section })
                .where('featured').in(['main feature'])
                .populate('article');

        } catch (e) {
            next(e);
        }
        // if ( !locals.data.featured || !locals.data.mainarticle) {
        //     res.status(404).send('Section does not exist.');
        //     return;
        // }
        next();
	});

	// Render the view.
	view.render('section');
};