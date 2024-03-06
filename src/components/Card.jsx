import { useState } from 'react'
import './Card.css'
import { Benefits } from './Benefits'

export const Card = ({type,price,user,upp,support,domain,msr})=>{
    // const [Val,setVal] = useState['true']
    // console.log(upp)
    return(
        <>
            <div className="card" >
            <div className="card-body">
                
                <p className="card-subtitle mb-2 text-muted text-center"><b>{type}</b></p>
                <h3 className="card-title text-center">{price}/month</h3>
                <hr></hr>
                <div className='content'>
                    <small className='s1'><i className="fa-solid fa-check"></i> {user}</small><br></br>
                    <small className='st'><i className="fa-solid fa-check"></i> 50GB Storage</small><br></br>
                    <small className='st'><i className="fa-solid fa-check"></i> Unlimited Public Projects</small><br></br>
                    <small className='st'><i className="fa-solid fa-check"></i> Community Access</small><br></br>
                    <small className='s2'><Benefits val ={upp} s=" Unlimited Private Projects"/> </small><br></br>
                    <small className='s3'><Benefits val={support} s=" Dedicated Phone Support" /> </small><br></br>
                    <small className='s4'><Benefits val={domain} s=" Free Subdomain" /></small><br></br>
                    <small className='s5'><Benefits val= {msr} s=" Monthly Status Reports" /></small><br></br>
                </div>
                <button className="btn btn-primary" type="button">Button</button>
            </div>
            </div>
        </>
    )
}