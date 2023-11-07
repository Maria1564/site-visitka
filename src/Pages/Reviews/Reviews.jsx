import React from "react";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import s from "./Reviews.module.css";
import Review from "./Review/Review";

const reviews = [
  {
    id: 1,
    name: "Даня",
    review: "Хорошие специалисты. Сделали всё очень качественно."
  },
  {
    id: 2,
    name: "Анна",
    review: "Круто получилось!"
  },
  {
    id: 3,
    name: "Витя",
    review: "Всё супер. Всем советую."
  },
  {
    id: 4,
    name: "Никита",
    review: `Я очень доволен ковриком, который я приобрёл от компании FastTafting. 
      Он отлично сочетается с моим интерьером и создает уютную атмосферу в моем доме.`
  },
  {
    id: 5,
    name: "Костя",
    review: "Это полный улёт!!!"
  },
]

const Reviews = () => {
  return (
    <>
      <Wrapper text="Отзывы" />
      <div className={s.reviews}>
        <div className="container">
            <div className={s.wrapper}>
            {
              reviews.map(({id, name, review})=> (
                <Review key={id} name={name} review={review}/>
              ))
            }
            </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
