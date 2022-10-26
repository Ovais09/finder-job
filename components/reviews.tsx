import styles from '../styles/reviews.module.css';
import {db} from '../firebaseconfig'
import { useState, useRef } from 'react';
import {collection, setDoc, doc} from 'firebase/firestore'

export default function Reviews() {
    
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const nameRef: any= useRef('')
    const reviewRef: any = useRef('')


    async function handleReview() {
        console.log(name)
        console.log(review)
        const docRef = doc(collection(db, "reviews"))
        await setDoc(doc(db, "reviews", docRef.id), {
            name: name,
            review: review,
            time: new Date()
        });

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
        
            <div className= {styles.div}>
                <span>Name of person &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>{time}</span>
            </div>
        </div>
    )
}
