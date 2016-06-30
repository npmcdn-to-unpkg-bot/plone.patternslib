var config;
if (typeof(require) === 'undefined') {
    /* XXX: Hack to work around r.js's stupid parsing.
     * We want to save the configuration in a variable so that we can reuse it in
     * tests/main.js.
     */
    require = { config: function (c) { config = c; } };
}

require.config({
    baseUrl: 'src',
    paths: {
        "eventEmitter":                     "bower_components/eventEmitter",
        "eventie":                          "bower_components/eventie",
        "get-size":                         "bower_components/get-size",
        "get-style-property":               "bower_components/get-style-property",
        "google-code-prettify":             "bower_components/google-code-prettify/src/prettify",
        "imagesloaded":                     "bower_components/imagesloaded/imagesloaded",
        "jcrop":                            "bower_components/jcrop/js/jquery.Jcrop",
        "jquery":                           "bower_components/jquery/dist/jquery",
        "jquery.browser":                   "bower_components/jquery.browser/dist/jquery.browser",
        "jquery.anythingslider":            "bower_components/AnythingSlider/js/jquery.anythingslider",
        "jquery.chosen":                    "bower_components/chosen/chosen/chosen.jquery",
        "jquery.form":                      "bower_components/jquery-form/jquery.form",
        "jquery.fullcalendar":              "bower_components/fullcalendar/fullcalendar.min",
        "jquery.fullcalendar.dnd":          "bower_components/fullcalendar/lib/jquery-ui.custom.min",
        "jquery.placeholder":               "bower_components/jquery-placeholder/jquery.placeholder.min",
        "jquery.textchange":                "bower_components/jquery-textchange/jquery.textchange",
        "logging":                          "bower_components/logging/src/logging",
        "masonry":                          "bower_components/masonry/dist/masonry.pkgd",
        "matches-selector":                 "bower_components/matches-selector",
        "modernizr":                        "bower_components/modernizr/modernizr",
        "modernizr-csspositionsticky":      "bower_components/modernizr/feature-detects/css-positionsticky",
        "outlayer":                         "bower_components/outlayer",
        "parsley":                          "bower_components/parsleyjs/parsley",
        "parsley.extend":                   "bower_components/parsleyjs/parsley.extend",
        "patternslib.slides":               "bower_components/slides/src/slides",
        "photoswipe":                       "bower_components/photoswipe/dist/photoswipe",
        "photoswipe-ui":                    "bower_components/photoswipe/dist/photoswipe-ui-default",
        "pikaday":                          "bower_components/pikaday/pikaday",
        "prefixfree":                       "bower_components/prefixfree/prefixfree.min",
        "select2":                          "bower_components/select2/select2.min",
        "showdown":                         "bower_components/showdown/src/showdown",
        "showdown-github":                  "bower_components/showdown/src/extensions/github",
        "showdown-prettify":                "bower_components/showdown/src/extensions/prettify",
        "showdown-table":                   "bower_components/showdown/src/extensions/table",
        "spectrum":                         "bower_components/spectrum/spectrum",
        "text":                             "bower_components/requirejs-text/text",
        "tinymce":                          "bower_components/jquery.tinymce/jscripts/tiny_mce/jquery.tinymce",
        "underscore":                       "bower_components/underscore/underscore",
        "validate":                         "bower_components/validate/validate",

        // Calendar pattern
        "moment": "bower_components/moment/moment",
        "moment-timezone": "bower_components/moment-timezone/moment-timezone",
        "pat-calendar-moment-timezone-data": "pat/calendar/moment-timezone-data",

        // Core
        "pat-compat":               "core/compat",
        "pat-base":                 "core/base",
        "pat-date-picker":          "pat/date-picker/date-picker",
        "pat-depends_parse":        "lib/depends_parse",
        "pat-dependshandler":       "lib/dependshandler",
        "pat-htmlparser":           "lib/htmlparser",
        "pat-input-change-events":  "lib/input-change-events",
        "pat-jquery-ext":           "core/jquery-ext",
        "pat-logger":               "core/logger",
        "pat-parser":               "core/parser",
        "pat-mockup-parser":        "core/mockup-parser",
        "pat-registry":             "core/registry",
        "pat-remove":               "core/remove",
        "pat-store":                "core/store",
        "pat-url":                  "core/url",
        "pat-utils":                "core/utils",

        // Patterns
        "pat-ajax":                    "pat/ajax/ajax",
        "pat-autofocus":               "pat/autofocus/autofocus",
        "pat-autoscale":               "pat/auto-scale/auto-scale",
        "pat-auto-scale":               "pat/auto-scale/auto-scale",
        "pat-autosubmit":              "pat/auto-submit/auto-submit",
        "pat-auto-submit":              "pat/auto-submit/auto-submit",
        "pat-autosuggest":             "pat/auto-suggest/auto-suggest",
        "pat-auto-suggest":             "pat/auto-suggest/auto-suggest",
        "pat-breadcrumbs":             "pat/breadcrumbs/breadcrumbs",
        "pat-bumper":                  "pat/bumper/bumper",
        "pat-calendar":                "pat/calendar/calendar",
        "pat-carousel":                "pat/carousel/carousel",
        "pat-checkedflag":             "pat/checked-flag/checked-flag",
        "pat-checked-flag":             "pat/checked-flag/checked-flag",
        "pat-checklist":               "pat/checklist/checklist",
        "pat-chosen":                  "pat/chosen/chosen",
        "pat-clone":                   "pat/clone/clone",
        "pat-collapsible":             "pat/collapsible/collapsible",
        "pat-colour-picker":           "pat/colour-picker/colour-picker",
        "pat-depends":                 "pat/depends/depends",
        "pat-edit-tinymce":            "pat/edit-tinymce/edit-tinymce",
        "pat-equaliser":               "pat/equaliser/equaliser",
        "pat-expandable":              "pat/expandable-tree/expandable-tree",
        "pat-expandable-tree":         "pat/expandable-tree/expandable-tree",
        "pat-focus":                   "pat/focus/focus",
        "pat-form-state":              "pat/form-state/form-state",
        "pat-forward":                 "pat/forward/forward",
        "pat-gallery":                 "pat/gallery/gallery",
        "pat-gallery-url":             "pat/gallery",
        "pat-grid":                    "pat/grid/grid",  // Hack, there's no grid jS, but we need for website bundler
        "pat-syntax-highlight":        "pat/syntax-highlight/syntax-highlight",
        "pat-image-crop":              "pat/image-crop/image-crop",
        "pat-inject":                  "pat/inject/inject",
        "pat-legend":                  "pat/legend/legend",
        "pat-markdown":                "pat/markdown/markdown",
        "pat-masonry":                 "pat/masonry/masonry",
        "pat-menu":                    "pat/menu/menu",
        "pat-modal":                   "pat/modal/modal",
        "pat-navigation":              "pat/navigation/navigation",
        "pat-notification":            "pat/notification/notification",
        "pat-placeholder":             "pat/placeholder/placeholder",
        "pat-selectbox":               "pat/selectbox/selectbox",
        "pat-skeleton":                "pat/skeleton/skeleton",
        "pat-slides":                  "pat/slides/slides",
        "pat-slideshow-builder":       "pat/slideshow-builder/slideshow-builder",
        "pat-sortable":                "pat/sortable/sortable",
        "pat-stacks":                  "pat/stacks/stacks",
        "pat-subform":                 "pat/subform/subform",
        "pat-switch":                  "pat/switch/switch",
        "pat-scroll":                  "pat/scroll/scroll",
        "pat-tabs":                    "pat/tabs/tabs",
        "pat-toggle":                  "pat/toggle/toggle",
        "pat-tooltip":                 "pat/tooltip/tooltip",
        "pat-validation":              "pat/validation/validation",
        "pat-zoom":                    "pat/zoom/zoom",
        "patterns":                    "patterns"
    },

    shim: {
        "jcrop":                        { deps: ["jquery"] },
        "jquery":                       { exports: ["jQuery"] },
        "jquery.anythingslider":        { deps: ["jquery"] },
        "jquery.chosen":                { deps: ["jquery"] },
        "jquery.fullcalendar.dnd":      { deps: ["jquery"] },
        "jquery.placeholder":           { deps: ["jquery"] },
        "jquery.textchange":            { deps: ["jquery"] },
        "parsley":                      { deps: ["jquery"] },
        "parsley.extend":               { deps: ["jquery"] },
        "select2":                      { deps: ["jquery"] },
        "spectrum":                     { deps: ["jquery"] },
        "tinymce":                      { deps: ["jquery"] },
        "showdown-github":              { deps: ["showdown"] },
        "showdown-prettify":            { deps: ["showdown", "google-code-prettify"] },
        "showdown-table":               { deps: ["showdown"] },
        "modernizr-csspositionsticky":  { deps: ["modernizr"] }
    },
});

if (typeof(require) === 'function') {
    require(["patterns"], function(patterns) {});
}
