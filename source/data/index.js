/**
 * Helper function that requires a module uncached.
 * 
 * Why: 
 * Node's module system automatically caches modules.
 * This is bad when watching for file-changes,
 * because we always get the cached(old) version of the module.
 * This function always loads the uncached version for us. Use this instead of require('MODULE_NAME') if you want to see changes in the file on every reload
 * 
 * Example usage:
 * var myData = requireUncached('./myData.js');
 * 
 * @param {module} module
 * @returns undefined
 */
function requireUncached(module){
    delete require.cache[require.resolve(module)]
    return require(module)
}

// GLOBAL TEMPLATE-DATA

var global = {
    siteUrl : 'http://www.change-to-your-domain.de' // Required for sitemap.xml - do not delete!
};

// Just an example - Moment is used to format date's in blog-templates
global.moment = (function () { 
    var moment = require('moment'); // Require npm module moment
    moment.locale('en'); // Set this to your language
    return moment;
})()

// Just an example - This helper is used in blog-templates to get pages per categories/tags
global.pagesPerDataKeyValue = requireUncached('./tools/pagesPerDataKeyValue.js');

// Expose data to templates
module.exports = global;