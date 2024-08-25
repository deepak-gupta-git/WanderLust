import React from 'react'

const EditListings = () => {
  return (
    <div>
       <div class="" >
      <div class="col-8 offset-2 mt-[7rem] h-[45rem] ">
    <h3 className='text-3xl'>Edit Your Listing</h3>
    <form method="POST" action="/listings" novalidate class="needs-validation">
      <div class="mb-3 mt-3">
        <label for="title" class="form-level">Title</label>
        <input name="listing[title]" placeholder="Enter a catchy title"
         type="text" class="form-control" required/>
         <div class="invalid-feedback">Please provide a valid Title</div>
      </div>
     
      <div class="mb-3">
        <label for="description" class="form-level">Description</label>
        <textarea
        name="listing[description]"
        placeholder="" class="form-control " required
      ></textarea>
      <div class="invalid-feedback">Please provide a valid description</div>
      </div>
      
      <div class="mb-3">
        <label for="image" class="form-level">Image</label>
        <input
        name="listing[image]"
        placeholder="Enter image link"
        type="text" class="form-control"  
      />
      <div class="invalid-feedback">Please provide a valid image</div>
      </div>

      <div class="row">
      <div class="mb-3 col-md-4">
        <label for="price" class="form-level">Price</label>
        <input name="listing[price]" placeholder="1200" type="number" class="form-control" required/>
        <div class="invalid-feedback">Please provide a valid price</div>
      </div>
      
      <div class="mb-3 col-md-8">
        <label for="country" class="form-level">Country</label>
        <input name="listing[country]" placeholder="India" type="text" class="form-control" required />
        <div class="invalid-feedback">Please provide a valid country name</div>
      </div>
    </div>

      <div class="mb-3">
        <label for="location" class="form-level">Location</label>
        <input
        name="listing[location]"
        placeholder="Jaipur, Rajasthan"
        type="text" class="form-control" required
      />
      <div class="invalid-feedback">Please provide a valid location</div>
      </div>
      <button class="btn btn-dark add-btn">Edit</button>
    </form>
  </div>
</div>
    </div>
  )
}

export default EditListings
