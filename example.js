const fsawait = require('./index');

;(async (path) => {
    const fileData = await fsawait.readFile(path);
    console.log(fileData.toString());
})('./package.json')