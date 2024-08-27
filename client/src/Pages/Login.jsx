import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../Store/authStore';


const login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {storeTokenInLS} = useAuth();

  // const navigate = useNavigate();
  // const { storeTokenInLS, API } = useAuth();

  const LOGINURL = "https://wanderlust-project-server.onrender.com"
  

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    console.log(user)
    e.preventDefault();
    try {
      const response = await fetch(`${LOGINURL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if(response.ok) {
        // alert("user Successful");
        // storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Login successful");
        navigate("/listings");
        storeTokenInLS(res_data.token);
      } else {
        toast.error(
        "Invalid Email or Password"
        );

        console.log("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="mt-[10rem]">
    <h1 class="col-6 offset-3 text-4xl md:text-5xl" >Login on Wanderlust</h1>
    <div class="col-6 offset-3 mt-3" >
        <form onSubmit={handleSubmit}>
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
              
            </div>
            <button class="btn btn-success">Login</button>
        </form>
    </div>
</div>
    </div>
  )
}

export default login
