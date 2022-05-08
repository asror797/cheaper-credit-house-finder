const  model = require('./model')

module.exports = {
   GET:async(_,res) => {
      try {
         res.json(await model.GetComplexes())
      } catch (error) {
         res.sendStatus(5000)
      }
   },
   CREATE:async(req,res) => {
      const {complex_name,company_id} = req.body
      try {
         res.json(await model.NewComplex(complex_name,company_id))
      } catch (error) {
         res.sendStatus(500)
         console.log(error)
      }
   },
   GET_BY_ID:async(req,res) => {
      const {company_id} = req.body
      try {
         res.json(await model.GetCompanyComplex(company_id))
      } catch (error) {
         res.sendStatus(500)   
      }
   }
}