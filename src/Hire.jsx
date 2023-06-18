import React from 'react'
import Navbar from './Components/Navbar'
import styled from 'styled-components'
import { Form } from 'react-bootstrap';
import Footer from './Components/Footer';

function Hire() {
  return (
    <div>
         <Navbar bg />
            <Container>
              <div className="wrapper">
                <div className="content">
                    <h5 className='text-danger'>Form Out of service for while...</h5>
                <div className="form-card">
                 <div className="card-data">
                   <h1>Get in touch buddy ...</h1>
                   <p>Always available for awesome projects and services, don't be so shy , get in touch for real my friend.</p>
                   <Form>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Fullname or Company name</Form.Label>
                        <Form.Control type="email" placeholder="..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <div className="flex-end">
                          <button>Enviar </button>
                    </div>
                   </Form>
                 </div>
               </div>
                </div>
              </div>
            </Container>
         <Footer />
    </div>
  )
}

const Container = styled.div`
   padding:50px 0px;
   

   .content{
     width:100%;
     display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center; 

      .form-card{
        width:100%;
        min-width:500px !important;
        max-width:500px;
       
        
        .card-data{
            padding:30px;
            height:auto;

            h1{
              font-size:22px;
              font-weight:600;
            }

            button{ 
                padding:10px 20px;
                border:none;
                color:var(--light);
                cursor: pointer;
                outline: none;
                border-radius:4px;
                background:var(--sc-color);
            }
        }
      }
   }
`;

export default Hire
