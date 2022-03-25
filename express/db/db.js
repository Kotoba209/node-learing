const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test2'
})

function query (sql, callback) {
  console.log('233', 233)
  pool.getConnection(function(err, connection) {
    connection.query(sql, function (err, rows) {
      console.log('err', err)
      callback(err, rows)
      connection.release()
    })
  })
}

exports.query = query
