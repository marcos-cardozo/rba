import FrustrationSection_2 from "./FrustationSection_2";

const FrustrationSection = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="text-center">


        <div className="max-w-5xl !mx-auto mt-8">
          <h2 className="!text-6xl font-bold bg-gradient-to-tr from-[#FBF5FE] via-[#DBA0F0] to-[#DB8DF7] bg-clip-text text-transparent font-racing">
            ¿CANSADO DE ESTAR{" "}
            <span className="underline decoration-white">ESTANCADO</span>
            <br />
            EN UN MISMO{" "}
            <span className="underline decoration-white">RANGO</span>?
          </h2>
        </div>
        <FrustrationSection_2 />
      </div>
    </section>
  );
};

export default FrustrationSection;
