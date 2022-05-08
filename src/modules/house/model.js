const { Fetch } = require('../../utils/postgresql')


const AllHouse = `select house_id,complex_name,house_room from houses inner join complexes using(complex_id);`



const CreateHouse = `
   INSERT INTO houses(
      house_room,
      house_price,
      complex_id
   )VALUES (
      $1,$2,$3
   )
   RETURNING *
`

const  ComplexHouse = `
      SELECT 
         *
      FROM
         houses
      where
         complex_id = $1
`


const GetComplexHouse = (complex_id) => Fetch(ComplexHouse,complex_id)

const GetHouse = () => Fetch(AllHouse)

const NewHouse = (house_room,house_price,complex_id) => Fetch(CreateHouse,house_room,house_price,complex_id)

module.exports={
   GetHouse,
   NewHouse,
   GetComplexHouse
}