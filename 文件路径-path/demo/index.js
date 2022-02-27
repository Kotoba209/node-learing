const fs = require('fs')
const path = require('path')

// \s 表示匹配空白字符 \S 表示匹配非空白字符 * 表示匹配任意次数

const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, data) => {
  if (err) throw err
  // console.log(`data`, data)
  resolveCss(data)
  resolveJs(data)
  resolveHtml(data)
})

function resolveCss(htmlStr) {
  const r1 = regStyle.exec(htmlStr)
  const newCss = r1[0].replace('<style>', '').replace('</style>', '')
  fs.writeFile(path.join(__dirname, './writeFile/index.css'), newCss, (err) => {
    if (err) throw err
    console.log('写入css文件成功')
  })
}

function resolveJs(htmlStr) {
  const r2 = regScript.exec(htmlStr)
  const jsStr = r2[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(path.join(__dirname, './writeFile/index.js'), jsStr, (err) => {
    if (err) throw err
    console.log('写入js文件成功')
  })
}

function resolveHtml(htmlStr) {
  const newHtml = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
    .replace(regScript, '<script src="./index.js"></script>')
  fs.writeFile(
    path.join(__dirname, './writeFile/index.html'),
    newHtml,
    (err) => {
      if (err) throw err
      console.log(`写入html文件成功`)
    }
  )
}
