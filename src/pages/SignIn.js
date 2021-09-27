import React, { useState } from 'react'
import FooterContainer from '../container/footer'
import logo from "../logo.svg"
import { Form, Header } from "../components"
import { useHistory } from 'react-router'
import * as Yup from 'yup';
import * as ROUTES from "../constants/routes"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Formik, Form as FormM } from 'formik';
const SignIn = () => {
    const auth = getAuth();
    const history = useHistory();
    const [error, setError] = useState('');
    const handleSubmit = (values) => {
        // firebase works here
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((res) => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setError(error.message)
                console.log(error);
            })

    }
    const SigninSchema = Yup.object().shape({
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

                <Form signIn={true}>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={SigninSchema}
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

                                    <Form.Title>Sign In</Form.Title>
                                    {error && <Form.Error>{error}</Form.Error>}
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
                                        Sign In
                                    </Form.Submit>
                                    <Form.Text>
                                        New to Netflix? <Form.Link to="/signup">   Sign Up Now</Form.Link>
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
