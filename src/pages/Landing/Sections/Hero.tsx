import { Link } from "react-router-dom";

// Images
import discordLogo3D from "../../../assets/discord3d.png";

function Hero() {
  return (
    <section className="w-full mt-20">
      <div className="container">
        <div className="flex justify-between gap-10">
          <div>
            <div className="w-fit text-1xl font-light tracking-wide border border-white/50 text-white/50 px-2 rounded-xl">
              <p>Version 1.0</p>
            </div>
            <h1 className="mt-4 mx-auto text-7xl font-extrabold tracking-tight text-white">
              <span className="text-white/50">tmp</span>Cord
            </h1>
            <p className="mt-6 text-white/80 text-lg font-extralight tracking-wide">
              Basically, it's discord.
            </p>
            <Link to="/signup">
              <button className="bg-white rounded-md px-4 py-2 mt-12 duration-300 ease-in-out hover:bg-black hover:text-white">
                Join for free
              </button>
            </Link>
          </div>
          <div className="ml-auto">
            <img
              src={discordLogo3D}
              alt="discord logo"
              className="object-contain flex-none h-80 grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
