import React from 'react';
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import { motion } from "framer-motion"

const Home = () => {

  const [text] = useTypewriter({
    words: ['Web Developer', 'Designer', 'Music Producer'],
    loop: 0,
    delaySpeed: 2000
  })

  return (
    <section className="home section grid">
      <motion.img src={Profile} alt="" className="home__img"
        animate={{ opacity: 1 }}
        initial={{opacity: 0}}
        transition={{ delay: 0.3 }}
      />

      <div className="home__content"
      >
        <div className="home__data">
          <motion.h1 className="home__title"
            animate={{ opacity: 1 }}
            initial={{opacity: 0}}
            transition={{ delay: 0.3 }}
          >
            <span>I'm Luka Stefanovic.</span> <br /> 
            <div className="cursor__animation">
              {text}
              <Cursor/>
            </div>
          </motion.h1>

          <motion.p className="home__description"
            animate={{ opacity: 1 }}
            initial={{opacity: 0}}
            transition={{ delay: 0.3 }}
          >
            I'm a Swiss based front-end & future back-end developer focused on creating clean & user-friendly experiences,
            I am passionate about building excellent software that improves the lives of those around me.
          </motion.p>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{opacity: 0}}
            transition={{ delay: 0.3 }}
          >
            <Link to="/about" className="button">
              More About Me{" "}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div className="color__block"
      animate={{ x: 0 , rotate: -15}}
      initial={{x: -1000}}
      transition={{ delay: 0.5, }}
      ></motion.div>
    </section>
  )
}

export default Home