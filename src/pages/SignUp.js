import React, { useContext, useState } from 'react'
import FooterContainer from '../container/footer'
import logo from "../logo.svg"
import { Form, Header } from "../components"
import { useHistory } from 'react-router'
import * as Yup from 'yup';
import * as ROUTES from "../constants/routes"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Formik, Form as FormM } from 'formik';
import { collection, addDoc } from "firebase/firestore";
import { FirebaseContext } from "../context/firebase"
import { getFirestore } from '@firebase/firestore'
const SignIn = () => {
    const { db } = useContext(FirebaseContext);
    const auth = getAuth();
    const history = useHistory();
    const [error, setError] = useState('');
    const handleSubmit = (values) => {
        // firebase works here
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((result) => {
                try {
                    const docRef = addDoc(collection(db, "users"), {
                        email: values.email,
                        username: values.fullName
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }

                updateProfile(auth.currentUser, {
                    displayName: values.fullName,
                    photoURL: Math.floor(Math.random() * 5) + 1,

                }).then((user) => {
                    history.push(ROUTES.BROWSE);
                })

            })
            .catch((error) => {
                setError(error.message)
            })

    }
    const SignupSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Fullname Required'),
        email: Yup.string()
            .email('Invalid email!')
            .required('Email Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Password Required'),
    });
    return (
        <>
            <Header dontShowOnSmallViewPort>
                <Header.Container>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                    </Header.Group>
                </Header.Container>
                <Form>
                    <Formik
                        initialValues={{ fullName: "", email: "", password: "", }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                            handleSubmit(values)
                        }
                        }
                    >
                        {({
                            errors,
                            touched,
                        }) => (
                            <FormM >
                                <Form.Base>

                                    <Form.Title>Sign Up</Form.Title>
                                    {error && <Form.Error>{error}</Form.Error>}
                                    <Form.Input
                                        type="fullName"
                                        name="fullName"
                                        placeholder="Full Name"
                                    />
                                    <Form.Error2>{errors.fullName && touched.fullName && errors.fullName}</Form.Error2>
                                    <Form.Input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                    />
                                    <Form.Error2>{errors.email && touched.email && errors.email}</Form.Error2>
                                    <Form.Input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <Form.Error2>{errors.password && touched.password && errors.password}</Form.Error2>
                                    <Form.Submit type="submit" >
                                        Sign Up
                                    </Form.Submit>
                                    <Form.Text>
                                        Ready an User? <Form.Link to="/signin">   Sign In Now</Form.Link>
                                    </Form.Text>
                                    <Form.TextSmall >
                                        This page is protected by Google reCAPTCHA to ensure you're not a bot.<Form.LinkShow > Learn more.</Form.LinkShow>
                                    </Form.TextSmall>
                                    <Form.TextSmall1>
                                        The information collected by Google reCAPTCHA is subject to the Google <Form.LinkSmall href="https://policies.google.com/privacy" target="_blank"> Privacy Policy </Form.LinkSmall>
                                        and <Form.LinkSmall href="https://policies.google.com/terms" target="_blank">Terms of Service</Form.LinkSmall>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purpose (it is not used for personalized advertising by Google).
                                    </Form.TextSmall1>
                                </Form.Base>
                            </FormM>
                        )}
                    </Formik>
                </Form>
                <FooterContainer />
            </Header>
        </>
    )
}

export default SignIn
