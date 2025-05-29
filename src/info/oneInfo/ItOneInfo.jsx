import { useLoaderData } from "react-router-dom"

const ItOneInfo = () => {
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
            <th>Username</th>
            <td>{userDetails.username}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{userDetails.email}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              <span>Street: </span>{userDetails.address.street}<br />
              <span>City: </span>{userDetails.address.city}<br />
              <span>Zipcode: </span>{userDetails.address.zipcode}<br />
              <span>Lat: </span>{userDetails.address.geo.lat}<br />
              <span>Lng: </span>{userDetails.address.geo.lng}
            </td>
          </tr>

          <tr>
            <th>Phone</th>
            <td>{userDetails.phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{userDetails.website}</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>{userDetails.company.name}</td>
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

export default ItOneInfo