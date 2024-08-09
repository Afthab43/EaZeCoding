import { features } from "../constants/Constants.jsx";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] px-5">
      <div className="text-center">
        <span className="bg-neutral-900 text-purple-500 rounded full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-10 tracking-wide">
          Quickly craft your{" "}
          <span className="bg-gradient-to-r from-purple-500 to-purple-950 text-transparent bg-clip-text">
            code with ease!
          </span>{" "}
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 ">
        {features.map((feature, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 p-2 bg-neutral-900 text-purple-500 justify-center items-center rounded-full">
                  {feature.icon}
                </div>

                <div className="text-white">
                  <h1 className="mt-1 mb-6 text-xl bg-gradient-to-r from-purple-500 to-purple-950 text-transparent bg-clip-text ">
                    {feature.text}
                  </h1>
                  <p className="text-sm p-2 mb-20 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
