import Banner from "../../assets/images/banner.jpg";

const Hero = () => {
  return (
    <div className="container">
      <section className="h-125 relative">
        <img
          src={Banner}
          alt="Homem sentado com os tênis da Syntax Wear"
          className="h-full w-full object-cover rounded-[20px]"
        />

        <div className="absolute w-full flex justify-end text-center bottom-0 px-6 md:px-24 pb-32">
          <div className="flex flex-col items-center text-white w-97">
            <h2 className="text-xl font-medium  mb-2 tracking-wider leading-normal">Krypton One</h2>
            <h1 className="text-2xl font-medium tracking-widest mb-10 leading-9">Transforme qualquer passo em presença.</h1>

            <div className="flex gap-5">
              <button >Ver modelos</button>
              <button>Comprar</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
