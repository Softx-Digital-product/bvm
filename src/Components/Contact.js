import React from 'react'

export default function Contact(){

// function submitdata(e){
//     console.log(e);
//     e.preventDefault()
    // let  fname= document.getElementById('fname').value;
    // let  lname= document.getElementById('lname').value;
    // let  email =  document.getElementById('email').value;
    // let phone = document.getElementById('phone').value;
    // let message= document.getElementById('message').value;
    
    // console.log(fname);
    // console.log(lname);
    // console.log(message);
    // console.log(email);
    // console.log(phone);

    // let response = await fetch('https://bvmentertainment.ml/dydata.php/', {
    //     method: 'POST',
    //     body: new FormData(contactformdata)
    //   });
  
    //   let result = await response.json();
  
    //   alert(result.message);

    
//}

const submitdata = async (event) =>{
event.preventDefault();

 let  fname= document.getElementById('fname').value;
    let  lname= document.getElementById('lname').value;
    let  email =  document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message= document.getElementById('message').value;

// const res = fetch("https://bvmentertainment.ml/dydata.php/", {
//     mode: 'no-cors',
//     method:"POST",
//     // headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         fname,
//         lname,
//         email, phone,message
    
//     }),
    
// }

let formdata= new FormData();
formdata.append("fname",fname);
formdata.append("lname",lname);


const url = "https://bvmentertainment.ml/dydata.php/";

axios.post(url,formdata).then(res=> console.log(res.data))
.catch(err=> console.log(err));

//);
    


}


    return (
        <>
        <div className="container bg-dark text-white mt-5">

            <div className="row">
                <div className="col-sm-0 col-lg-3 col-md-3 bg-warning">
                
                </div>
                <div className="col-sm-12 col-lg-9 col-md-9">
                    <h2 className="text-center text-uppercase mt-2">Contact Form</h2>
                    <div className="container">
                        <form id="contactformdata">
                            <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-group">
                        <label htmlFor="fname">Enter First Name</label>
                        <input type="text" className="form-control" name="fname" id="fname" placeholder="Rajesh" required/>
                         </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                
                            <div className="form-group">
                        <label htmlFor="lname">Enter Last Name</label>
                        <input type="text" className="form-control" name="lname" id="lname" placeholder="kumar" required/>
                         </div>
                                </div>
                        </div>

                        <div className="form-group">
                        <label htmlFor="email">Enter Email Id</label>
                        <input type="text" className="form-control" name="email" id="email" placeholder="hello@gmail.com" required/>
                         </div>

                         <div className="form-group">
                        <label htmlFor="phone">Enter Phone Number</label>
                        <input type="Number"  className="form-control" name="phone" id="phone" placeholder="8439793894" required/>
                         </div>

                         <div className="Form-group">
                             <label htmlFor="message">Enter Message</label>
                             <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter Message Here" required></textarea>
                         </div>

                            <div className="form-group float-right">
                                <button className="btn btn-success  font-weight-bold " onClick={submitdata}>Submit </button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
            

        </div>
        </>
    )
}