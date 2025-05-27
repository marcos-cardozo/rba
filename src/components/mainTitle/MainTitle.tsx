const MainTitle = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center text-center !px-4 !pt-30">
      <div className="max-w-5xl mx-auto">
        <h1 className="!text-6xl font-bold bg-gradient-to-tr from-[#FBF5FE] via-[#DBA0F0] to-[#DB8DF7] bg-clip-text text-transparent font-racing">
          LA ACADEMIA DONDE
          <br />
          MEJORAR ES INEVITABLE
        </h1>
      </div>


      <div className="w-3/4 h-1 mx-auto !my-10 bg-gradient-to-r from-transparent via-[#DBA0F0] to-transparent opacity-70"></div> 

      <div className="mt-10"> 
        <ul className="flex justify-center gap-10 text-white text-lg">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-sm"></span>
            Sin dedicarle miles de horas
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-sm"></span>
            Sin compañeros que te arruinen las partidas
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-sm"></span>
            Sin quedarte estancado en un rango
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainTitle;