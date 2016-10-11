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
    nunjucks: {
      prerender: function(nunjucks, env){
        //添加一个过滤器，这样可以在模板里使用了
        env.addFilter("filter_foo", function(){

        });
      }
    },
    dot: {
      strip: false,
      prerender: function(doT, def, dot){
        console.info(dot);
        
      }
    }
  }
};