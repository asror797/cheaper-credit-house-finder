const CompanyModel = require('./model')


module.exports = {
   GET:async(req,res) => {
      try {
         res.json(await CompanyModel.GetCompanies())
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   },
   CRETATE:async(req,res) => {
      const {company_name} = req.body
      try {
         if(company_name) {
            res.json(await CompanyModel.NewCompany(company_name))
         }else {
            res.json({message:'kompaniya nomi yoq'})
         }
      } catch (error) {
         console.log(error)
      }
   }
}