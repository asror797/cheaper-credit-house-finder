const {Fetch} = require('../../utils/postgresql')

const AllCompanies = `
   SELECT 
      * 
   FROM 
      companies 
`


const CretateCompany = `
   INSERT INTO 
      companies(
         company_name
      ) 
      VALUES ($1) 
      RETURNING *
`



const GetCompanies = () => Fetch(AllCompanies)
const NewCompany = (company_name) => Fetch(CretateCompany,company_name)



module.exports = {
   GetCompanies,
   NewCompany
}