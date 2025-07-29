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
            <tr>
              <th className="gold">1st Sem GPA</th>
              <td>{userDetails.sem1GPA}</td>
            </tr>
            <tr>
              <th className="gold">2nd Sem GPA</th>
              <td>{userDetails.sem2GPA}</td>
            </tr>
            <tr>
              <th className="gold">3rd Sem GPA</th>
              <td>{userDetails.sem3GPA}</td>
            </tr>
            <tr>
              <th className="gold">4th Sem GPA</th>
              <td>{userDetails.sem4GPA}</td>
            </tr>
            <tr>
              <th>Current CGPA</th>
              <td>{userDetails.cgpa}</td>
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