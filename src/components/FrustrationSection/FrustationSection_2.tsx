import React from "react";
import FrustrationPoint from "../FrustrationPointProps/FrustrationPointProps";


const FrustrationSection_2: React.FC = () => {
  return (
    <div className="w-full max-w-4xl !mx-auto !py-12 !px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      <FrustrationPoint
        title="TUS COMPAÑEROS"
        description="son muy malos, no puedes confiar en ellos y cada partido es una lotería."
        highlightColor="bg-yellow-400"
        titleColor="text-yellow-300"
      />
      <FrustrationPoint
        title="ESTANCADO EN UN RANGO"
        description="una temporada tras otra sin saber por que no eres capaz de salir de ahí."
        highlightColor="bg-pink-400"
        titleColor="text-pink-300"
      />
      <FrustrationPoint
        title="SINTIÉNDOTE SOLO"
        description="sin saber si lo que haces está bien o qué podrías hacer para mejorar y subir de rango."
        highlightColor="bg-purple-400"
        titleColor="text-purple-300"
      />
      <FrustrationPoint
        title="PERDIÉNDOTE LA DIVERSIÓN"
        description=" del juego porque te sientes frustrado por no poder mejorar o salir de tu rango."
        highlightColor="bg-cyan-400"
        titleColor="text-cyan-300"
      />
    </div>
  );
};

export default FrustrationSection_2;
