import { useLoaderData } from "react-router-dom"

const ItThreeInfo = () => {
  const userDetails = useLoaderData()
  return (
    <div className="user-card">
      <div className="user-details">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{userDetails.name}</td>
            </tr>
            <tr>
              <th>RegNo</th>
              <td>{userDetails.regNo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

// const User = () => {
//     const {id} = useParams()
//   return (
//     <div>User{id}</div>
//   )
// }

export default ItThreeInfo