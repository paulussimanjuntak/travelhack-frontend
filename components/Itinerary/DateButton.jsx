import { motion } from 'framer-motion'

import moment from 'moment'

const textMotion = {
  rest: {
    x: 0,
    transition: { duration: 0.3, type: "tween", ease: "easeIn" }
  },
  hover: {
    x: 5,
    transition: { duration: 0.3, type: "tween", ease: "easeOut" }
  }
};

const slashMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween", width: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.4, type: "tween", ease: "easeIn" }
  }
};

const DateButton = ({ date, active, changeDateHandler, ...rest }) => {
  return (
    <div>
      <motion.div 
        onClick={changeDateHandler}
        initial="rest" whileHover="hover" whileTap="hover" animate="rest"
        className={`itinerary-date-btn ${active && 'active'}`} 
      >
        <motion.i className="fas fa-grip-vertical m-l-4 mr-n1" {...rest} variants={slashMotion} />
        <motion.div className="m-l-15" variants={textMotion}>
          <p className="mb-0 fs-10 font-weight-bolder text-center text-uppercase">
            {moment(date).format('MMM')}
          </p>
          <p className="mb-0 mt-n2 fs-16 font-weight-light text-center">
            {moment(date).format('DD')}
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DateButton
