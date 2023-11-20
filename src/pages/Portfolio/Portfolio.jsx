import React from 'react'
import { portfolio } from "../../data";
import PortfolioItem from '../../components/PortfolioItem';
import "./portfolio.css";
import { motion } from "framer-motion"

const Portfolio = () => {
  return (
    <motion.section className="portfolio section"
      animate={{ opacity: 1 }}
      initial={{opacity: 0}}
      transition={{ delay: 0.3 }}
    >
      <h2 className="section__title">My <span>Portfolio</span></h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item}/>;
        })}
      </div>
    </motion.section>
  )
}

export default Portfolio