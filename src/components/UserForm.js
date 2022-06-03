import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserForm = ({ getUser, userSelect, deselectUser }) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")

    useEffect(() => {
        console.log(userSelect)
        if (userSelect !== null) {
            setFirstName(userSelect.first_name)
            setLastName(userSelect.last_name)
            setEmail(userSelect.email)
            setPassword(userSelect.password)
            setBirthday(userSelect.birthday)
        } else {
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setBirthday("")
        }
    }, [userSelect])

    const submit = e => {
        e.preventDefault()
        const user = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday
        }
        if (userSelect !== null) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, user)
                .then(() => {
                    getUser();
                    deselectUser();
                })
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', user)
                .then(() => getUser())
                .catch(error => console.log(error))
        }
    }

    return (
        <form onSubmit={submit}>
            <h1 className='text-center m-4'>New User</h1>
            <div className='card p-3 w-75'>
                <div className="mb-3">
                    <label htmlFor="first_name" className='fw-bold'> Name </label>
                    <input
                        className='form-control w-75'
                        type="text"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        id="first_name"
                    />
                </div>
                <div className="mb-3 w-75">
                    <label htmlFor="last_name" className='fw-bold'> Last Name </label>
                    <input                      
                        className='form-control'
                        type="text"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        id="last_name"
                    />
                </div>
                <div className="mb-3 w-75">
                    <label htmlFor="email" className='fw-bold'>  Email Address </label>
                    <input         
                        className='form-control'
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        id="email"
                    />
                </div>
                <div className="mb-3 w-75">
                    <label htmlFor="password" className='fw-bold'> Password </label>
                    <input
                        className='form-control'
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        id="password"
                    />
                </div>
                <div className="mb-3 w-75">
                    <label htmlFor="birthday" className='fw-bold'> Date of Birth </label>
                    <input
                        className='form-control'
                        type="date"
                        onChange={e => setBirthday(e.target.value)}
                        value={birthday}
                        id="birthday"
                    />
                </div>
                <button type='submit' className='btn btn-outline-success w-25'>Submit</button>
            </div>
        </form>
    );
};

export default UserForm;