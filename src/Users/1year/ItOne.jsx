import { Link, useLoaderData } from "react-router-dom"

const ItOne = () => {
    const users = useLoaderData()
  return (
    <div>
        <div className="box">
            <h1 className="box-head">UsersList</h1>
            <div className="box-body">
                <h1>Name</h1>
                <h1>Email</h1>
            </div>
            {users.map((user) => {
            return(
                <Link to={user.id.toString()} key={user.id}>
                <div key={user.id} className="box-item">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
                </Link>
            )
        })}

        
         {users.map((user) => {
            return(
                <Link to={user.id.toString()} key={user.id}>
                <div key={user.id} className="box-item">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
                </Link>
            )
        })}
        {users.map((user) => {
            return(
                <Link to={user.id.toString()} key={user.id}>
                <div key={user.id} className="box-item">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
                </Link>
            )
        })}
        </div>
        
    </div>
  )
}

export default ItOne