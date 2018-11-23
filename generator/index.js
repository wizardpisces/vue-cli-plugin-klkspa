const generateHelper = require('./helper')
const fs = require('fs');

module.exports = (api, options, rootOptions) => {

    //delete vue-cli3 generated store, below will use store directory structure to  replace
    const original_store_path = api.resolve('./src/store.ts')

    if (fs.existsSync(original_store_path)) {
        fs.unlinkSync(original_store_path);
    }

    if (options.project_git_name) {
        api.render(
            "./templates",
            options
        );
    }

    //extend package.json
    api.extendPackage({
        dependencies: {
            "axios": "^0.18.0",
            "lodash": "^4.17.11",
            "vue-i18n": "^8.3.2",
            "js-cookie": "^2.2.0",
        },
        devDependencies: {
            "@types/js-cookie": "^2.2.0",
            "@types/node": "^10.12.9",
            "@types/lodash": "^4.14.118",
            "lodash-webpack-plugin": "^0.11.5",
            "svg-sprite-loader": "4.1.3",
        }
    });

    //onCreateComplete hook called when the files have been written to disk. fiddle file content

    // const helper = generateHelper(api);
    // api.onCreateComplete(() => {

    //     let mainCssLines = `\nimport '@/assets/scss/main.scss';`;

    //     helper.updateMain(mainLines => {

    //         let lines = mainLines.reverse();

    //         const lastImportIndex = lines.findIndex(line => line.match(/^import/));

    //         lines[lastImportIndex] += mainCssLines;

    //         return lines.reverse();
    //     })

    // });




};