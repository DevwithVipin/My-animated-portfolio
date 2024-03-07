import { useRef } from "react";
import "./Project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
//import P2 from "./public/P3.png"


const items = [
  {
    id: 1,
    title: "React Netflix-Gpt",
    img: "https://i.ibb.co/b7G4sRF/P2.png",
    desc: "A movie recommendation site where a user can do personalised movie search with the power support of Open AI.",
    link:"https://netflix-gpt-inky.vercel.app/"
  },
  {
    id: 2,
    title: "MERN E-Commerce",
    img: "https://iili.io/JVdixBj.png",
    desc: "A fully functional ecommerce app with payment functinality.",
    link:"https://apni-dukaan-lime.vercel.app/"
  },

  {
    id: 3,
    title: "React Quote Generator",
    img: "https://iili.io/JVdbLOl.png",
    desc: "Quote generater site which generates random quote on clicking next quote. I can bookmark these quotes.I have used localstorage for persistent data and redux for data management.",
    link:"https://qt-gules.vercel.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
               <button>See Demo</button>
               </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="Project" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
       
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
