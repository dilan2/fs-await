That package makes it possible to use nodejs fs module for the methods that need a callback with async/await

# Installation
    $ npm i --save @dilan2/fs-await

## Than in nodejs app you can do this:
    const fsawait = require('@dilan2/fs-await');

    ;(async (path) => {
        const fileData = await fsawait.readFile(path);
        console.log(fileData.toString());
    })('./file.txt')

## Supported fs methods

 - access, 
 - appendFile 
 - chmod
 - chown 
 - close 
 - copyFile
 - exists
 - fchmod
 - fchown
 - fdatasync
 - fstat
 - fsync
 - ftruncate
 - futimes
 - lchmod
 - lchown
 - link
 - lstat
 - mkdir
 - mkdtemp
 - open
 - read
 - readdir
 - readFile
 - readlink
 - realpath
 - rename
 - rmdir
 - stat
 - symlink
 - truncate
 - unlink
 - utimes
 - write
 - writeFile