'use strict';
/**
 * template config
 */
export default {
  type: 'dot',
  content_type: 'text/html',
  file_ext: '.html',
  file_depr: '_',
  root_path: think.ROOT_PATH + '/view',
  adapter: {
    ejs: {},
    dot: {}
  }
};