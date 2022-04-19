import './Main.scss'
import { useQuery,gql } from "@apollo/client";
const ORDER = gql`
query{
    getOrders{
      id
      product
      count
      name
      add
      phone
      order_time
    }  
    }
`
const Main = () => {
    const {data,loading} = useQuery(ORDER)
    console.log(data);
    return (
        <div className='main'>
            {loading && <h3>loading...</h3>}
            <table>
                <tr>
                  <th>ID</th>
                  <th>PRODUCT</th>
                  <th>DATA</th>
                  <th>ORDERED at</th>
                </tr>
                {
                    data && data.getOrders.map((e,i)=>(
                        <tr key={i}>
                  <td>{e.id}</td>
                  <td><strong>Taom nomi:</strong>{e.product} <strong>soni:</strong> {e.count} ta</td>
                  <td><strong>Ismi:</strong>{e.name} <strong>Address:</strong>{e.add} <strong>Phone:</strong>{e.phone}</td>
                  <td>{e.order_time}</td>
                        </tr>
                    ))
                }
              </table>
        </div>
    )
}
export default Main;