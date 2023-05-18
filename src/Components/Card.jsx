import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Card = ({ coffee }) => {
  const { _id,name, quantity, supplier, taste, category, details, photo } = coffee;
  const handleDelete =_id=>{
   console.log(_id);
   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
      fetch(`http://localhost:5000/coffee/${_id}`,{
        method:"DELETE",
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount > 0){
         Swal.fire(
        'Deleted!',
        'Your Coffee has been deleted.',
        'success'
      )
        }
      })
    }
  })
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Coffee" />
        </figure>
        <div className="card-body">
          <div className="">
          <h2 className="card-title">Name:{name}</h2>
          <p>SupplierName:{supplier}</p>
          <p>Quantity:{quantity}</p>
          <p>Category:{category}</p>
          <p>Taste:{taste}</p>
          </div>
          <div className="card-actions justify-end -mt-20">
            <div className="btn-group btn-group-vertical">
              <button className="btn ">View</button>
              <Link to={`updateCoffee/${_id}`}><button className="btn btn-active">Edit</button></Link>
              <button onClick={()=>handleDelete(_id)} className="btn bg-red-600">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
