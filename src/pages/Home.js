import { createUserWithEmailAndPassword } from '@firebase/auth'
import { collection, getDocs } from '@firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { OptForm, Feature } from '../components'
import FAQsContainer from '../container/faqs'
import FooterContainer from '../container/footer'
import HeaderContainer from '../container/header'
import JumbotronContainer from '../container/jumbotron'
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router'
const Home = () => {
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
        <div>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>
                        Unlimited films, Tv shows, and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel any time.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" type="email" />
                        <OptForm.Button onClick={checkEmail}>Get Started</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FAQsContainer />
            <FooterContainer />
        </div>
    )
}

export default Home
