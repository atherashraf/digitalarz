const startConfig = require('./webpack-start.config');
const buildConfig = require('./webpack-build.config');
module.exports = (env, options) => {
    const devtool_val = options.mode == 'development' ? 'source-map' : '';
    const file_name = 'index.js';
    if (env.NODE_ENV === 'start') {
        config = startConfig(options, entry);
    }else{
        config = buildConfig(options, entry, )
    }
    return config
};
