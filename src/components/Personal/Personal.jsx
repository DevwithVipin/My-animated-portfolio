import "./Personal.scss";
import { motion } from "framer-motion";

  const downloadResume = () => {
    const resumeUrl = '/public/Resume__I.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Resume__I.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const projectSection = () => {
  
  };


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Personal = () => {
  return (
    <div className="Personal">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hello, Myself Vipin Kumar</motion.h2>
          <motion.h1 variants={textVariants}>
            Web and Software Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* <motion.button variants={textVariants} onClick={projectSection}>
              See the Latest Works
            </motion.button> */}
            <button variants={textVariants} onClick={downloadResume}>Download Resume</button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Personal;
