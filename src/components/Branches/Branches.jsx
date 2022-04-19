import './Branches.scss'
import { useQuery,gql, useMutation } from '@apollo/client';
const Restaurant = gql`
query{
    allRestaurant{
      id
      name
    }
  }
`
const new_branches = gql`
mutation newBranch($branches_name:String! $branches_add:String! $restaurant_id:ID!){
    newBranch(branches_name: $branches_name branches_add: $branches_add restaurant_id:$restaurant_id ){
       id
      name
      add
    }
  }
`
const Branches = () => {
    const {data} = useQuery(Restaurant)
 
    const [newBranches] = useMutation(new_branches,{
        update:(cache,data) => {
           //  console.log(data);
            alert('Yaratildi')
        }
    })
   const handSubmit = e => {
       e.preventDefault()
       const {name,add,select} = e.target.elements
       newBranches({
           variables:{
            branches_name:name.value,
            branches_add:add.value,
            restaurant_id:select.value
           }
       })
       name.value = []
       add.value = []
   }
    return (
        <div className="branches">
            <h3 className="branches-title">Branch add</h3>
          <form className="form" onSubmit={handSubmit}>
              <input name='name' type="text" className="form-input" placeholder='Branch name' />
              <input name='add' type="text" className="form-add" placeholder='address'/>
              <select name="select" className="form-select">
                  <option hidden={true}>Choose</option>
                 {
                     data && data.allRestaurant.map((e,i) => (
                         <option key={i} value={e.id}>{e.name}</option>
                     ))
                 } 
              </select>
              <button type='submit' className='form-btn'>Add</button>
          </form>
        </div>
    )
}
export default Branches;