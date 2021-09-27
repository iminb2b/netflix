import { collection, getDocs } from '@firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Accordion, OptForm } from '../components'
import { FirebaseContext } from '../context/firebase';
import faqsData from "../fixtures/faqs.json"
const FAQsContainer = () => {
    const history = useHistory();
    const { db } = useContext(FirebaseContext);
    const [usersList, setUserList] = useState([]);
    useEffect(() => {

        async function getUsers() {
            const querySnapshot = await getDocs(collection(db, 'users'));
            let allUser = []
            querySnapshot.forEach((doc) => {
                allUser.push(doc.data());
            });
            setUserList(allUser)
        }
        getUsers();
    }, [])

    const [email, setEmail] = useState("");
    const checkEmail = () => {
        usersList.forEach(user => {
            if (user.email === email) {
                history.push("/signin")
            } else {
                history.push("/signup")

            }
        })
    }
    return (
        <>
            <Accordion >
                <Accordion.Title>Frequently Asked Questions</Accordion.Title>
                {faqsData.map(item =>
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>
                            {item.header}
                        </Accordion.Header>
                        <Accordion.Body>
                            <Accordion.Text>
                                {item.body}
                            </Accordion.Text>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
                <OptForm>
                    <OptForm.Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" type="email" />
                    <OptForm.Button onClick={checkEmail}>Get Started</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                </OptForm>
            </Accordion>
        </>
    )
}

export default FAQsContainer
