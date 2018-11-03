const fs = require('fs');

const proxyMethods = ['access', 'appendFile', 'chmod', 'chown', 'close', 'copyFile', 'exists', 'fchmod', 'fchown', 
                       'fdatasync', 'fstat', 'fsync', 'ftruncate', 'futimes', 'lchmod', 'lchown', 'link', 'lstat',
                        'mkdir', 'mkdtemp', 'open', 'read', 'readdir', 'readFile', 'readlink', 'realpath', 'rename', 
                        'rmdir', 'stat', 'symlink', 'truncate', 'unlink', 'utimes', 'write', 'writeFile'];

module.exports = new Proxy(fs, {
    get(target, name) {
       if(!Reflect.has(target, name)) throw new Error('Type Error: no such property on fs object ' + name);

       if(name.endsWith('Sync') || !proxyMethods.includes(name)) return Reflect.get(target, name);

       return (...args) => {
           return new Promise((reslove, reject) => {
               target[name](...args, (err, res) => {
                   if(err) reject(err);
                   reslove(res);
               })
           })
       }
    }
});
