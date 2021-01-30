const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require("customize-cra");
const path = require('path');
module.exports = override(
    fixBabelImports("import", {//antd按需加载
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css"
    }),
    addWebpackAlias({
        '@': path.join(__dirname, './'),
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#1890ff'
            }
        }
    })
);