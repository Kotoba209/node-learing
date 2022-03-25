const db = require('../nodejs-orm')

async function handleDB (res, tableName, methodName, errMsg, n1 = '', n2 = '') {
  console.log('tableName', tableName)
  let model = db.model(tableName)
  let results
  try {
    results = await new Promise((resolve ,reject) => {
      if (!n1) {
        model[methodName]((err, data) => {
          if (err) { reject(err); throw err }
          resolve(data)
        })
        return
      }
      if (!n2) {
        model[methodName](n1, (err, data) => {
          if (err) { reject(err); throw err }
          resolve(data)
        })
        return
      }
      model[methodName](n1, n2, (err, data) => {
        if (err) { reject(err); throw err }
        resolve(data)
      })
    })
  } catch (error) {
    res.send('数据库操作出错')
    throw error
  }
  return results
}

function getRandomString (n) {
  var str="";
  while (str.length < n) {
    str += Math.random().toString(36).substr(2);
  }
  return str.substr(str.length-n)
}

module.exports = {
  handleDB,
  getRandomString
}
