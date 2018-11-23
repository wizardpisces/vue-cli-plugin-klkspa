const fs = require('fs');

function generateHelper(api) {
    return {
        //export main lines to be modified
        updateMain(callback) {
            
            const ext = api.hasPlugin('typescript') ? 'ts' : 'js';
            const mainPath = api.resolve(`./src/main.${ext}`);

            let content = fs.readFileSync(mainPath, {
                encoding: 'utf8'
            })

            let lines = content.split(/\r?\n/g)

            lines = callback(lines)

            content = lines.join('\n')
            
            fs.writeFileSync(mainPath, content, {
                encoding: 'utf8'
            })
        }
    }
}

module.exports = generateHelper