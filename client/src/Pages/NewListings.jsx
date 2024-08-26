import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"

const NewListings = ({addNewListing}) => {
  const [user, setUser] = useState({
  title:"",
  image:"",
  description:"",
  price:"",
  location:"",
 country:""
  });

  const URL = "https://wanderlust-project-server.onrender.com";



  const handleInput = (e) => {
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
      const response = await fetch(`${URL}/api/auth/listing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);
      // const res_data = await response.json();
      // console.log(res_data);

      if(response.ok) {
        navigate("/listings")
        toast.success("Listing Created SuccesFully")

        const newListing = {...user};
        addNewListing(newListing);

        setUser ({ 
          title:"",
          image:"",
          description:"",
          price:"",
          location:"",
         country:""
        });

      } else {
        toast.error("Listing not Created")
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
       <div class="" >
      <div class="col-8 offset-2 mt-[7rem] h-[45rem] ">
    <h3 className='text-3xl'>Create a New Listing</h3>
    <form method="POST" action="/listings" novalidate class="needs-validation" onSubmit={handleSubmit}>
      <div class="mb-3 mt-3">
        <label for="title" class="form-level">Title</label>
        <input 
        class="form-control"
        placeholder="Enter a catchy title"
        name="title" 
         type="title"  required
         id='title'
         autoComplete='off'
         value={user.title}
         onChange={handleInput}
         />
        


         <div class="invalid-feedback">Please provide a valid Title</div>
      </div>
     
      <div class="mb-3">
        <label for="description" class="form-level">Description</label>
        <textarea
        name="description"
        placeholder="" class="form-control "
         required
         type="description" 
         id='description'
         autoComplete='off'
         value={user.description}
         onChange={handleInput}
      ></textarea>
      <div class="invalid-feedback">Please provide a valid description</div>
      </div>
      
      <div class="mb-3">
        <label for="image" class="form-level">Image</label>
        <input
        name="image"
        placeholder="Enter image link"
        type="text" class="form-control"  
        required
        id='image'
        autoComplete='off'
        value={user.image}
        onChange={handleInput}
      />
      <div class="invalid-feedback">Please provide a valid image</div>
      </div>

      <div class="row">
      <div class="mb-3 col-md-4">
        <label for="price" class="form-level">Price</label>
        <input name="price" placeholder="1200" 
        type="text" 
        class="form-control" 
        required 
        id='price'
        autoComplete='off'
        value={user.price}
        onChange={handleInput}
        />
        <div class="invalid-feedback">Please provide a valid price</div>
      </div>
      
      <div class="mb-3 col-md-8">
        <label for="country" class="form-level">Country</label>
        <input name="country" 
        placeholder="India" 
        type="text" 
        class="form-control" 
        id='country'
        autoComplete='off'
        value={user.country}
        onChange={handleInput}
        required />
        <div class="invalid-feedback">Please provide a valid country name</div>
      </div>
    </div>

      <div class="mb-3">
        <label for="location" class="form-level">Location</label>
        <input
        name="location"
        placeholder="Jaipur, Rajasthan"
        type="location" class="form-control" 
        required
        id='location'
        autoComplete='off'
        value={user.location}
        onChange={handleInput}
      />
      <div class="invalid-feedback">Please provide a valid location</div>
      </div>
      <button class="btn btn-dark add-btn">Add</button>
    </form>
  </div>
</div>
    </div>
  )
}

export default NewListings
