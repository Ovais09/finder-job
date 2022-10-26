import styles from '../styles/reviews.module.css';
import {db} from '../firebaseconfig'
import { useState, useRef, useEffect } from 'react';
import {collection, setDoc, doc, getDocs, query, DocumentData, Query} from 'firebase/firestore'

export default function Reviews() {
    
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [reviews, setReviews]: any = useState([])
    const nameRef: any= useRef('')
    const reviewRef: any = useRef('')
    // const reviews: any = []

    async function getDocuments() {
        const q: any = query(collection(db, 'reviews'))
        const querySnapshot: any = await getDocs(q)
        querySnapshot.forEach((doc: any) => {
            console.log(doc.data().name, doc.data().review)
            setReviews((prev: any) => [...prev, {name: doc.data().name, review: doc.data().review}])
            console.log(reviews)
        })
        // querySnapshot.forEach((doc: any) => {
        //     reviews.push({name: doc.data().name, review: doc.data().review})
        // })

        // console.log(reviews)
        
    }

    useEffect(() => {

        getDocuments()
        console.log(reviews)

        
    }, [])


    async function handleReview() {
        console.log(name)
        console.log(review)
        const docRef = doc(collection(db, "reviews"))
        await setDoc(doc(db, "reviews", docRef.id), {
            name: name,
            review: review,
            time: new Date()
        });

        setReviews((prev: any) => [...prev, {name: name, review: review}])



        nameRef.current.value = ''
        reviewRef.current.value = ''
        setName('')
        setReview('')

    }


    return (
        <div>
            <div className = {styles.div}>
                <label htmlFor="review">Leave your own review!</label>
                <br/>
                <br />
                <label htmlFor='name' >Name</label>
                <br />
                <input type="text" id="name" ref = {nameRef} onChange = {(e) => setName(e.target.value)}></input>
                <br />
                <label htmlFor='review'>Review</label>
                <br />
                <input type="text" id="review" ref = {reviewRef} onChange = {(e) => setReview(e.target.value)}></input>
                <br />
                <br />
                <button type = 'button' onClick = {handleReview}>Submit Review</button>
            </div>

            <br />
            <br />
    

            
            {reviews.map((element: any) => {
                return (
                <div className= {styles.div} key = {element.name}>
                    <span>{element.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>{time}</span>
                    <p>{element.review}</p>      
                </div>
                )
            })}



        </div>
    )
}
