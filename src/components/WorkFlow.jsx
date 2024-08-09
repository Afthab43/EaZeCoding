import { CircleCheck } from "lucide-react";
import codingImage from "../assets/images/code.jpg";
import { workflows } from "../constants/Constants";

const WorkFlow = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center">
        Optimize your{" "}
        <span className="bg-gradient-to-r from-purple-500 to-purple-950 text-transparent bg-clip-text">
          coding workflow
        </span>{" "}
      </h2>
      <div className="flex flex-wrap justify-center mt-10 px-4">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codingImage} alt="" />
        </div>
        <div className="pt-12 w-full lg:w-1/2 ">
          {workflows.map((workflow, index) => {
            return (
              <div key={index} className="flex mb-10">
                <div className="text-green-500 bg-neutral-900 p-2 h-10 w-10 rounded-full justify-center items-center">
                  <CircleCheck />
                </div>
                <div className="">
                  <h3 className="mt-1 mb-2 text-xl bg-gradient-to-r from-purple-500 to-purple-950 text-transparent bg-clip-text">
                    {workflow.title}
                  </h3>
                  <h3 className="text-[13px] text-neutral-500">
                    {workflow.description}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
