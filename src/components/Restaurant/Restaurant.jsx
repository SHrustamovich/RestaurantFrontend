import { useQuery,gql, useMutation } from '@apollo/client';
import './Restaurant.scss'
const Category = gql`
query{
    getCategory{
     id
     name
   }
   }
`
const new_restaurant = gql`
mutation newRestaurant($restaurant_name:String! $category_id:ID!){
    newRestaurant(restaurant_name: $restaurant_name category_id: $category_id ){
      id
      name
    }
  }
`
const Restaurant = () => {
    const {data} = useQuery(Category)
 
     const [newRestaurant] = useMutation(new_restaurant,{
         update:(cache,data) => {
            //  console.log(data);
             alert('Yaratildi')
         }
     })
    const handSubmit = e => {
        e.preventDefault()
        const {name,select} = e.target.elements
        newRestaurant({
            variables:{
                restaurant_name:name.value,
                category_id:select.value
            }
        })
        name.value = []
    }
    return (
        <div className="restaurant">
            <h3 className="restaurant-title">Restaurant add</h3>
          <form className="form" onSubmit={handSubmit}>
              <input name='name' type="text" className="form-input" placeholder='Restaurant name' />
              <select name="select" className="form-select">
                  <option hidden={true}>Choose</option>
                 {
                     data && data.getCategory.map((e,i) => (
                         <option key={i} value={e.id}>{e.name}</option>
                     ))
                 } 
              </select>
              <button type='submit' className='form-btn'>Add</button>
          </form>
        </div>
    )
}
export default Restaurant;