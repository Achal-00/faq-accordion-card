import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const arrowAnime = {
  hidden: {
    transform: "rotate(0deg)",
  },
  visible: {
    transform: "rotate(180deg)",
  },
};

const variants = {
  hidden: {
    display: "none",
    opacity: 0,
  },
  visible: {
    display: "block",
    opacity: 1,
  },
};

const Detail = () => {
  useEffect(() => {
    const onPageLoad = () => {
      let animation = gsap.to(".box", {
        paused: true,
        left: "-5%",
      });

      document.querySelectorAll(".heading").forEach((x) => {
        x.addEventListener("mouseenter", () => animation.play());
      });
      document.querySelectorAll(".heading").forEach((x) => {
        x.addEventListener("mouseleave", () => animation.reverse());
      });
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

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
        <div className="content">
          <div
            className="heading"
            onClick={() => toggle(i)}
            style={{ fontWeight: selected === i ? "700" : "400" }}
          >
            {item.heading}
          </div>
          <motion.img
            src="images/icon-arrow-down.svg"
            whileHover={{ scale: 1.5 }}
            onClick={() => toggle(i)}
            variants={arrowAnime}
            initial="hidden"
            animate={selected === i ? "visible" : "hidden"}
          />
          <motion.div
            className="detail"
            variants={variants}
            initial="hidden"
            animate={selected === i ? "visible" : "hidden"}
          >
            {item.detail}
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default Detail;

const data = [
  {
    heading: "How many team members can i invite?",
    detail:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    heading: "What is the maximum file upload size?",
    detail:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    heading: "How do I reset my password?",
    detail:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    heading: "Can I cancel my subscription?",
    detail:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    heading: "Do you provide additional support?",
    detail:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];
