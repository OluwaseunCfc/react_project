import React from 'react'

function Signup() {
  return (
   <>
     <div className='signup-page'>
       <div className="signup-container">
            <h1 className='signup-heading text-center mb-3' style={{"color": "#2A8E9E"}}>Join Finpay</h1>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">Full Name</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="full name" required/>
                </div>
            
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter your email" required/>
                </div>

                {/* <div className="mb-3">
                    <label htmlFor="" className="form-label">Phone no</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="phone number" required/>
                </div> */}

            <div className="mb-3">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter your password" required/>
            </div>
            
            <button type="submit" className='btn '>Submit</button>
       </div>
    </div>
   </>

  )
}

export default Signup