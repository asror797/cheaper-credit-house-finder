const {Fetch} = require('../../utils/postgresql')

const Allcomplexes = ` select complex_id, company_id , company_name , complex_name from companies inner join complexes  using(company_id);`

const CreateComplex = `
   INSERT INTO complexes(
      complex_name,
      company_id
   ) VALUES (
      $1,$2
   )
   RETURNING *
`


const CompanyComplex = `
      SELECT 
         * 
      FROM 
         complexes 
      WHERE 
         company_id = $1
`



const GetComplexes = () => Fetch(Allcomplexes)

const NewComplex = (complex_name,company_id) => Fetch(CreateComplex,complex_name,company_id)

const GetCompanyComplex = (company_id) => Fetch(CompanyComplex,company_id)


module.exports = {
   GetComplexes,
   NewComplex,
   GetCompanyComplex
}