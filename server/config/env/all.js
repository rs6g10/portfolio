'use strict';

module.exports = {
	app: {
		title: 'Rahul Sharma Portfolio',
		description: 'Full-Stack Javascript, Angular, D3, MongoDb',
		keywords: 'Angular, Express, D3, Mongo'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				//'public/lib/bootstrap/dist/css/bootstrap.css',
                //'public/lib/angular-ui/build/angular-ui.css',
                //'public/lib/angular-ui-grid/ui-grid.min.css',
				//'public/lib/slickgrid/css/smoothness/jquery-ui-1.8.16.custom.css',
				//'public/lib/slickgrid/slick.grid.css',
				//'public/lib/slickgrid/css/smoothness/jquery-ui-1.8.16.custom.css',
				//'public/lib/slickgrid/controls/slick.columnpicker.css',
				//'public/lib/slickgrid/examples/slick-default-theme.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/jquery-ui/jquery-ui.js',
                'public/lib/jquery.event.drag-new/event.drag/jquery.event.drag.js',
                'public/lib/jquery.event.drag-new/event.drop/jquery.event.drop.js',
				'public/lib/slickgrid/slick.core.js',
                'public/lib/slickgrid/slick.dataview.js',
                'public/lib/slickgrid/slick.editors.js',
				'public/lib/slickgrid/slick.formatters.js',
				'public/lib/slickgrid/plugins/slick.autotooltips.js',
				'public/lib/slickgrid/plugins/slick.cellcopymanager.js',
				'public/lib/slickgrid/plugins/slick.cellrangedecorator.js',
				'public/lib/slickgrid/plugins/slick.cellrangeselector.js',
				'public/lib/slickgrid/plugins/slick.cellselectionmodel.js',
				'public/lib/slickgrid/plugins/slick.checkboxselectcolumn.js',
				'public/lib/slickgrid/plugins/slick.columnpicker.js',
                'public/lib/slickgrid/slick.grid.js',
                'public/lib/slickgrid/slick.groupitemmetadataprovider.js',
                'public/lib/slickgrid/plugins/slick.rowselectionmodel.js',
                'public/lib/angular/angular.js',
                'public/lib/angular-material/angular-material.js',
                'public/lib/angular-aria/angular-aria.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-cookies/angular-cookies.js',  
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-ui/build/angular-ui.min.js',
				'public/lib/angular-ui-grid/ui-grid.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-virtual-scroll/angular-virtual-scroll.js',
				'public/lib/d3/d3.js',
				'public/js/design.js',
				'public/js/highlight.v0.min.js',
				'public/js/d3.hexbin.v0.min.js'
			]
		},
		css: [
			'public/modules/**/*.css',
			'public/sass/css/*.css'

		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*module.js',
            'public/modules/*/*routes.js',
            'public/modules/*/*service.js',
            'public/modules/*/*controller.js',
			'public/components/*.js',
			'public/modules/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};