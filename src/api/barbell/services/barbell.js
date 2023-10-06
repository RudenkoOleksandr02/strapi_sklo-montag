'use strict';

/**
 * barbell service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::barbell.barbell');
