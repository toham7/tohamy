import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Mainlayout from '../../layout/Mainlayout'
import { useFormik } from 'formik'
import { object, string } from 'yup'


export default function Loginpage() {
    const [userInfo, setuserInfo] = useState({})
    const loginFormik =useFormik({
        validateOnMount:true,
        initialValues:{
        username:"user",
        password:"********"
        },
        validationSchema:object({
            username:string().email().required(),
            password:string().min(8).required(),
        }),
    //     validate:(values)=>{  
    //         const errors ={};
    //         if(!values.username.includes("@gmail.com")){
    //             errors.username="Email not valid"
    //         }
           
    //         if(!values.password.length < 8 ){
    //             errors.password="Password not valid"
    //         }
    //        console.log(loginFormik);
    //        return errors;
           
    //       },
    //   onSubmit:(values)=>{
    //     console.log("on submit data",values);
    //     loginFormik.resetForm();
    //   },
        
    })
 

    return (
        <Mainlayout>
            <Container>
                <Row className="justify-content-center py-4 my-5">
                    <Col xs lg="6">
                        <Form onsubmit={loginFormik.onsubmit} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control {...loginFormik.getFieldProps("username")} type="email" placeholder="Enter email" />
                               {loginFormik.touched.username&&
                                 loginFormik.errors.username&&(
                                     <span className="text-danger">{loginFormik.errors.username}</span>
                                 )}

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control {...loginFormik.getFieldProps("password")}
                                 type="password"
                                 placeholder="Password" 
                               />{loginFormik.touched.password&&
                                loginFormik.errors.password&&(
                                    <span className="text-danger">{loginFormik.errors.password}</span>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button 
                            disabled={!loginFormik.isValid}
                             onClick={loginFormik.handleSubmit}
                              variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </Mainlayout>
    )
   }



