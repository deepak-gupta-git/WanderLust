import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/authStore';

const signup = () => {
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
    });

    const {storeTokenInLS} = useAuth();


    const userURL = "http://localhost:3000/api/auth/signup";

    const handleInput = (e) =>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value
    
        setUser({
          ...user,
          [name]:value,
        });
      };    

      const navigate = useNavigate();
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
        const response = await fetch(userURL , {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(user),
        });
        
        const res_data = await response.json();

        if(response.ok) {
            navigate("/listings")
            toast.success("Register succesfully")
            setUser ({ username : "",email : "",password : "" });
            storeTokenInLS(res_data.token);
        } else {
            toast.error("Registration Failed")
        }
      
      console.log(response)
    } catch (error) {
        console.log(error)
    }

}
  return (
    <div>
      
<div class=" mt-[8rem]">
    <h1 class="col-6 offset-3 text-3xl " >Signup on Wanderlust</h1>
    <div class="col-6 offset-3 mt-3" >
        <form action="/user" method="POST" class="needs-validation" novalidate onSubmit={handleSubmit} >
            <div class="mb-3">
                <label for="username"
                 class="form-level">Username</label>
                <input 
                 name="username"
                 class="form-control" 
                 required 
                 type="username"
                 id='username'
                 autoComplete='off'
                 value={user.username}
                 onChange={handleInput}
                 />
                 
                 <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="mb-3">
                <label for="email"
                 class="form-level">Email</label>
                <input 
                name="email"
                class="form-control" 
                required 
                type="email"
                id='email'
                autoComplete='off'
                value={user.email}
                onChange={handleInput}
                 />
                 <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="mb-3">
                <label for="password"
                 class="form-level">Password</label>
                <input 
               name="password"
               class="form-control" 
               required 
               type="password"
               id='password'
               autoComplete='off'
               value={user.password}
               onChange={handleInput}
               />
                 <div class="valid-feedback">Looks good!</div>
            </div>
            <button class="btn btn-success">Signup</button>
        </form>
    </div>
</div>
    </div>
  )
}

export default signup
