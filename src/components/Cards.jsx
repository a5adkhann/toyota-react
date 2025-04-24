import React from 'react'
import { motion } from 'framer-motion'

const Cards = () => {

    const cardsData = [
        {
            card_id: 1,
            card_img: "./card1.jpg",
            card_title: "Watch"
        },
        {
            card_id: 2,
            card_img: "./card2.jpg",
            card_title: "Shoe"
        },
        {
            card_id: 3,
            card_img: "./card3.jpg",
            card_title: "Belt"
        }
    ]


  return (
    <>
        <div className="cards grid md:grid-cols-3 grid-cols-1 gap-24 px-16 py-24">
            {cardsData.map((card) => (
            <motion.div
            whileHover={{
                translateY: -20,
            }}
            whileInView={{
                scale: 1.05,
                transition: {
                    duration: 2
                }
            }}
            className="card border border-gray-300 shadow-md" key={card.card_id}>
                <div className="card-img">
                    <img src={card.card_img} alt="" />
                </div>
                <div className="card-text p-3">
                    <p>{card.card_title}</p>
                </div>
            </motion.div>
            ))}
        </div>
    </>
  )
}

export default Cards
