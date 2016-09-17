var _ = require('underscore');

// Example helper-function - This helper is used in blog-templates to get pages per categories/tags
module.exports = function pagesPerDataKeyValue (pages, dataKey, dataValue) {

    var result = {};

    _.each(_.union(_.flatten(_.map(pages, function (data, name) {

        if(typeof data[dataKey] === 'string') {

            data[dataKey] = [data[dataKey]];
        }

        if(dataValue){

            return _.filter(_.toArray(data[dataKey]), function(data){

                return (data === dataValue ? true : false); 
            });

        } else {

            return _.toArray(data[dataKey]);
        }
    }))), function (key) {

        result[key] = _.compact(_.map(pages, function (data, name) {

            if(typeof data[dataKey] === 'string') {

                data[dataKey] = [data[dataKey]];
            }

            return (_.toArray(data[dataKey]).indexOf(key) >= 0 ? data : false)
        }));
    });

    return result;
}