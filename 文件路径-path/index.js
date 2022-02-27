const path = require('path')
// join

// ../ 会抵消前面的路径(相当于回退)
path.join('/a', '/b/c', '../', '/d', 'e')

path.join(__dirname, '/file')

// basename 可以从一个文件路径中，获取到文件的名称部分

// extname 获取文件拓展名
