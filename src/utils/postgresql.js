const  {Pool} = require('pg')

const pool = new Pool({
   // user:'asror',
   // password:'aaa13579#',
   // database:'bank',
   // host:'localhost',
   // port:5432
   connectionString:'postgres://hkplkuzt:K4aaQ8Gd7yXK4uSyiWxAoUY-nHjcffDA@heffalump.db.elephantsql.com/hkplkuzt'
})



const Fetch = async(SQL, ...params) => {
   const client = await pool.connect()
   try {
      const { rows } = await client.query(SQL,params.length ? params : null)
      return rows
      
   } finally {
      client.release()
   }
}


module.exports = {
   Fetch
} 