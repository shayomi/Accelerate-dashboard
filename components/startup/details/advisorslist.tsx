import React from "react";

const AdvisorsList = () => {
  const advisors = [
    {
      id: 1,
      name: "Darlene Roberts",
      imageUrl: "/assets/images/p3.png",
      skill: "Storytelling",
      affiliation: "Future Africa",
    },
    {
      id: 2,
      name: "John Smith",
      imageUrl: "/assets/images/p2.png",
      skill: "Business Strategy",
      affiliation: "Startup Hub",
    },
    {
      id: 3,
      name: "Emma Thompson",
      imageUrl: "/assets/images/p1.png",
      skill: "Marketing",
      affiliation: "InnovateX",
    },
  ];

  return (
    <section className="p-6">
      <h5 className="mb-5 font-medium text-xl">Advisors</h5>

      <div className="space-y-4">
        {advisors.map((advisor) => (
          <div key={advisor.id} className="flex items-center gap-4">
            <img
              src={advisor.imageUrl}
              alt={`${advisor.name}`}
              className="w-16 h-16 object-cover object-top rounded"
            />

            <div>
              <div className="mb-1">
                <span className="text-sm font-semibold  hs-dark-mode-active:text-white">
                  {advisor.name}
                </span>
              </div>
              <div className="flex flex-row gap-2 mb-2">
                <span className="text-sm text-black/50  hs-dark-mode-active:text-white font-normal border-r-[1px] border-gray-400 pr-2">
                  {advisor.skill}
                </span>
                <span className="text-sm text-black/50  hs-dark-mode-active:text-white font-normal">
                  {advisor.affiliation}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvisorsList;
