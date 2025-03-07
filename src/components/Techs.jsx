import gitHubLogo from "../assets/github.svg";
import cssLogo from "../assets/css.svg";
import HtmlLogo from "../assets/html.svg";
import javaScriptLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/Tailwind.svg";
import typeScriptLogo from "../assets/typescript.svg";
import pythonLogo from "../assets/py.svg";

import { motion } from "framer-motion";

export function Techs() {
  return (
    <>
      <motion.ul className="flex items-center gap-6">
        <motion.li
          whileHover={{ scale: 1.2}}
          className="flex flex-col items-center"
        >
          <img className="w-10" src={gitHubLogo} alt="Github Logotipo" />
          <span>GitHub</span>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center"
        >
          <img
            className="w-10 fill-amber-50"
            src={HtmlLogo}
            alt="Css Logotipo"
          />
          <span>Html</span>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center"
        >
          <img className="w-10" src={cssLogo} alt="Css Logotipo" />
          <span>Css</span>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center"
        >
          <img
            className="w-10"
            src={javaScriptLogo}
            alt="Javascript Logotipo"
          />
          <span>JavaScript</span>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center"
        >
          <img
            className="w-10"
            src={typeScriptLogo}
            alt="Javascript Logotipo"
          />
          <span>Typescript</span>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center"
        >
          <img className="w-10" src={reactLogo} alt="React Logotipo" />
          <span>React</span>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center"
        >
          <img className="w-10" src={tailwindLogo} alt="TailwindCSS Logotipo" />
          <span>Tailwind CSS</span>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center"
        >
          <img className="w-10" src={pythonLogo} alt="Python Logotipo" />
          <span>Python</span>
        </motion.li>
      </motion.ul>
    </>
  );
}
