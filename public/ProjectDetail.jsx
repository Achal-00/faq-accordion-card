import { useState } from "react";
import { motion } from "framer-motion";
import TextReveal from "../Misc/TextReveal";

const containerAnime = {
  hidden: {
    opacity: 0,
    display: "none",
  },
  visible: {
    opacity: 1,
    display: "grid",
  },
};

const variants = {
  visible: {
    visibility: "visible",
  },
  hidden: {
    visibility: "hidden",
  },
};

const image = {
  visible: {
    scale: 1,
  },
  hidden: {
    scale: 1.5,
  },
};

export default function ProjectDetail() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      {data.map((item, i) => (
        <TextReveal key={item.slNo}>
          <div>
            <div className="project-header-container" onClick={() => toggle(i)}>
              <div className="project-heading">
                <span>{item.slNo}</span>&nbsp;{item.projectName}
              </div>
              <div className="show-btn">
                <motion.i
                  whileHover={{ scale: 1.2 }}
                  class={
                    selected === i
                      ? "fa-solid fa-minus fa-3x"
                      : "fa-solid fa-plus fa-3x"
                  }
                  style={{ color: "var(--light-grey)" }}
                ></motion.i>
              </div>
            </div>
            <motion.div
              className="project-container"
              variants={containerAnime}
              initial="hidden"
              animate={selected === i ? "visible" : "hidden"}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="project-image-container"
                variants={variants}
                initial="hidden"
                whileInView="visible"
              >
                <motion.img
                  variants={image}
                  transition={{ duration: 1 }}
                  src={item.projectImage}
                  alt="project preview image"
                />
              </motion.div>
              <div className="project-details">
                <div className="in-detail">{item.detail}</div>
                <div className="used-tools">{item.tools}</div>
              </div>
              <div className="project-links">
                <a href={item.preview} target="_blank">
                  Preview
                </a>
                <a href={item.code} target="_blank">
                  Code
                </a>
              </div>
            </motion.div>
          </div>
        </TextReveal>
      ))}
    </>
  );
}

const data = [
  {
    slNo: "00",
    projectName: "IP Tracker",
    projectImage: "images/project1-desktop.png",
    preview: "https://achal-00.github.io/ip-tracker/",
    code: "https://github.com/Achal-00/ip-tracker",
    detail:
      "This IP tracker initially shows information about the present user, and then we may enter any IP address or domain name to acquire their subsequent information. The location of the provided IP address is also displayed on the built-in map.",
    tools: "Next.js, React, JavaScript, CSS, HTML",
  },
  {
    slNo: "01",
    projectName: "Ecommerce Product Page",
    projectImage: "images/project2-desktop.png",
    preview: "https://achal-00.github.io/ecommerce-product-page/",
    code: "https://github.com/Achal-00/ecommerce-product-page",
    detail:
      "This is a sample E-commerce product page that features add-to-cart functionality, the ability to view and remove products from carts, a product lightbox view, and other features.",
    tools: "Vite, React, JavaScript, CSS, HTML",
  },
  {
    slNo: "02",
    projectName: "Space Tourism Website",
    projectImage: "images/project3-desktop.png",
    preview: "https://achal-00.github.io/space-tourism-website/",
    code: "https://github.com/Achal-00/space-tourism-website",
    detail: "A multi-page space tourism website.",
    tools: "JavaScript, CSS, HTML",
  },
];
