import { data } from "autoprefixer";
import React from "react";
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleAddCoffee=(event)=>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const NewCoffee={name,quantity,supplier,taste,category,details,photo}
        console.log(NewCoffee)

        // send  data to the server
        fetch('http://localhost:5000/coffee',{
         method:"POST",
         headers:{
          "content-type":"application/json",
         },
         body:JSON.stringify(NewCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)})
          if (data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
    }
  return (
    <div>
      <h2 className="text-3xl font-extrabold text-center mt-4">AddCoffee</h2>
      <p className="p-20 -mb-20">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee} className="bg-[#F4F3F0] m-20 mb-4">
        {/* coffee name and quantity */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4 mb-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* supplier and taste */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4 mb-4">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4 mb-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* category and details */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4 mb-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4 mb-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>
        <div className="mb-4">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
          <input type="submit" value="Add Coffee" className="btn btn-block"/>
      </form>
    </div>
  );
};

export default AddCoffee;
