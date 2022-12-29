import React, {useState} from 'react'
export default function Contact() {
    const [stle, setstle]=useState(
       { color:'white',
        backgroundColor:'black',
        border:'2px solid black',
    })
    const msovr=()=>{
        
            setstle({
                color:'black',
        backgroundColor:'white',
            })
        
        }
        const msout=()=>{
            
                setstle({
                    color:'white',
            backgroundColor:'black',
                })
            
            }
    return (
        <>
            <div className="cont bg-dark text-light">
                <div>
                    <h1>Contact</h1>
                    <p>Charley Knox Is Represented
                        by United Creatives</p>
                    <p>Email: info@mysite.com

                        Phone: 123-456-7890</p>
                </div>
                <div className='formbox'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label ">Example textarea</label>
                        <textarea className="form-control bg-dark" id="exampleFormControlTextarea1" rows="1"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control bg-dark" id="exampleFormControlTextarea1" rows="1"></textarea>
                    </div>
                    <div classNameName="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control bg-dark" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control bg-dark" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button  style={stle} onMouseOver={msovr} onMouseOut={msout}>SUBMIT</button>
                </div>
            </div>
        </>
    )
}