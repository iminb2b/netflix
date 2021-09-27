import { useState, useEffect, useContext } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
    const { db } = useContext(FirebaseContext);
    const [content, setContent] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, target));
            let allContent = []
            querySnapshot.forEach((doc) => {
                allContent.push(doc.data());
            });
            setContent(allContent)
        }
        fetchData();
    }, [])
    return { [target]: content };
}