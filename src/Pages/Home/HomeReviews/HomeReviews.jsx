import React from 'react'
import s from "./HomeReviews.module.css"
import { Button } from '../../../components/ui'
import Review from './Review/Review'

const reviews= [
    {
        id:1, 
        review: "Хорошие специалисты. Сделали всё очень качественно.",
        name: "Даня"
    },
    {
        id:2, 
        review: "Круто получилось!",
        name: "Анна"
    },
    {
        id:3, 
        review: "Всё супер. Всем советую.",
        name: "Витя"
    },
]

const HomeReviews = () => {
  return (
    <section className={s.home_reviews}>
        <div className="container">
            <div className="wrapper">
            <h2 className={`section_title ${s.dark}`}>Отзывы</h2>
            <div className={s.reviews}>
                {reviews.map(({id, review, name})=>(
                    <Review key={id} review={review} name={name}/>
                ))}
            </div>
            <Button text="Показать все" to="reviews"/>
            </div>
        </div>
    </section>
  )
}

export default HomeReviews