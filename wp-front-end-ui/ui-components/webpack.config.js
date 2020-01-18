const path = require('path');
const webpack = require('webpack');

const widget = {
    "akah": {name: "akah", widgetList: ["base", "index", "signinPage", "layerList", "layerView", "olMap", "wmpView", "saView"]},
    "base": {name: "base", ext: ".js", html: "base.pug"},
    "index": {name: "index", ext: ".js", html: "index.pug", widgetList: ["base", "index"]},
    "signinPage": {name: "signin", ext: ".js", html: "signin-page.pug", widgetList: ["base", "signinPage"]}
}

module.exports = (env, options) => {
    // const file_name_prefix = organisms[2];
    const list = ["akah", "index", "signinPage"];
    const key = list[1];
    console.log("working on..." + key);
    let entry = {};
    let widgetList = widget[key].widgetList;
    for (let val in widgetList)
        entry[widgetList[val]] = './src/molecules/' + widget[widgetList[val]].name + "-widget" + widget[widgetList[val]].ext;
    let config = null;
    if (env.NODE_ENV === 'start') {
        const startConfig = require("./webpack-start-script.config");
        config = startConfig(options, entry, widget[key].html, true);
    } else {
        const buildConfig = require("./webpack-build-script.config");
        const app_name = "ui_components";
        config = buildConfig(options, entry, app_name, true)
    }
    return config;
}