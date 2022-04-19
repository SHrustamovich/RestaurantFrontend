import './Meals.scss'
import { useQuery,gql, useMutation } from '@apollo/client';
import { useState } from 'react';
const Branches = gql`
query{
    allBranches{
      id
      name
      add
    }
  }
`
const new_meal = gql`
mutation newMeal($meal_name:String! $price:String! $url:String! $branches_id:ID!){
    newMeal(meal_name: $meal_name price: $price url:$url branches_id:$branches_id ){
       id
      name
      price
      url
    }
  }
`
const deletemeal = gql`
mutation deleteMeal($meal_id:ID!){
    deleteMeal(meal_id:$meal_id){
      id
    }
  }
`
const Meals = () => {
    // const [branch,setBranch] = useState("")
    const {data} = useQuery(Branches)
 
    const [newMeal] = useMutation(new_meal,{
        update:(cache,data) => {
           //  console.log(data);
            alert('Yaratildi')
        }
    })

    const [delete_meal] = useMutation(deletemeal,{
        update:(cashe,data) => {
            alert('delete')
        }
    })

    const handlyDelete = e => {
        e.preventDefault()
        const {mealdelete}= e.target.elements
        delete_meal({
            variables:{
                meal_id:mealdelete.value
            }
        })
       mealdelete.value = ""
    }

   const handSubmit = e => {
       e.preventDefault()
       const {name,price,url,select} = e.target.elements
       newMeal({
           variables:{
            meal_name:name.value,
            price:price.value,
            url:url.value,
            branches_id:select.value
           }
       })
       name.value = []
       price.value = []
       url.value = []
   }
   
//    console.log(branch)
    return (
        <div className="meal">
            <h3 className="meal-title">Meal add</h3>
          <form className="form" onSubmit={handSubmit}>
              <input name='name' type="text" className="form-input" placeholder='Meal name' />
              <input name='price' type="number" className="form-price" placeholder='Price' />
              <input name='url' type="text" className="form-add" placeholder='pics url'/>
              <select name="select" className="form-select">
                  <option hidden={true}>Choose</option>
                 {
                     data && data.allBranches.map((e,i) => (
                         <option key={i} value={e.id}>{e.name}</option>
                     ))
                 } 
              </select>
              <button type='submit' className='form-btn'>Add</button>
          </form>
          <form className="form" onSubmit={handlyDelete}>
              <h3>Delete meal</h3>
                <input name='mealdelete' type="number" className="form-input" />
               <button className="form-btn" type='submit'>Delete</button>
          </form>
        </div>
    )
}
export default Meals;