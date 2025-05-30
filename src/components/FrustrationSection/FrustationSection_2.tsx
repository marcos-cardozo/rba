import { motion } from "framer-motion";
import FrustrationPoint from "../FrustrationPointProps/FrustrationPointProps";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
      when: "beforeChildren"
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const FrustrationSection_2: React.FC = () => {
  return (
    <motion.div 
      className="w-full max-w-4xl !mx-auto !py-12 !px-4 grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-150px 0px -100px 0px" }}
    >
      {[
        {
          title: "TUS COMPAÑEROS",
          description: "son muy malos, no puedes confiar en ellos y cada partido es una lotería.",
          highlightColor: "#FACC15",
          titleColor: "text-yellow-300"
        },
        {
          title: "ESTANCADO EN UN RANGO",
          description: "una temporada tras otra sin saber por qué no eres capaz de salir de ahí.",
          highlightColor: "#F472B6",
          titleColor: "text-pink-300"
        },
        {
          title: "SINTIÉNDOTE SOLO",
          description: "sin saber si lo que haces está bien o qué podrías hacer para mejorar y subir de rango.",
          highlightColor: "#C084FC",
          titleColor: "text-purple-300"
        },
        {
          title: "PERDIÉNDOTE LA DIVERSIÓN",
          description: "del juego porque te sientes frustrado por no poder mejorar o salir de tu rango.",
          highlightColor: "#22D3EE",
          titleColor: "text-cyan-300"
        }
      ].map((itemData, index) => (
        <motion.div key={index} variants={item}>
          <FrustrationPoint {...itemData} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FrustrationSection_2;