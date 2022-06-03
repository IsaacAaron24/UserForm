import React from 'react';

const UserList = ({ users, selectUser, deleteUser }) => {
    return (
        <div>
            <h1 className='text-center m-4'>Users</h1>
            {
                users.map(user => (
                    <div key={user.id} className='card w-75 my-4 p-3'>
                        <div>
                            <p> <span className='fw-bold'> Name: </span>  <span >{user.first_name}</span> </p>
                            <p> <span className='fw-bold'> Last Name: </span>  <span >{user.last_name}</span> </p>
                            <p> <span className='fw-bold'> Email: </span> <span >{user.email}</span> </p>
                            <p> <span className='fw-bold'>Birthday:</span></p>
                            <p className='badge bg-info text-dark w-25'> <span> {user.birthday} </span></p>
                            <div className=' m-2'>
                                <button onClick={() => selectUser(user)} className="btn btn-outline-warning w-25 m-2 ">
                                    Edit
                                </button>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-outline-warning w-25 m-2">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UserList;