import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
// Add the rest of your skill logos here
import JavaScript from "../assets/skills/js.png";
import Python from "../assets/skills/python.png";
import PHP from "../assets/skills/php.png";
import TypeScript from "../assets/skills/typescript.png";
import ReactLogo from "../assets/skills/react.png";
import Laravel from "../assets/skills/laravel.png";
import Tailwind from "../assets/skills/tailwind.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import MySQL from "../assets/skills/mysql.png";
import Git from "../assets/skills/git.png";
import GitHub from "../assets/skills/github.png";
import Photoshop from "../assets/skills/photoshop.png";
import PremierePro from "../assets/skills/premiere-pro.png";
import Figma from "../assets/skills/figma.png";
import Illustrator from "../assets/skills/illustrator.png";

export default function SkillsWidget() {
  const skills = {
    languages: [
      { name: "HTML5", logo: HTML },
      { name: "CSS3", logo: CSS },
      { name: "JavaScript", logo: JavaScript },
      { name: "TypeScript", logo: TypeScript },
      { name: "Python", logo: Python },
      { name: "PHP", logo: PHP },
    ],
    frameworks: [
      { name: "React", logo: ReactLogo },
      { name: "Laravel", logo: Laravel },
      { name: "Tailwind CSS", logo: Tailwind },
      { name: "Bootstrap", logo: Bootstrap },
    ],
    designingTools: [
      { name: "Photoshop", logo: Photoshop },
      { name: "Premiere Pro", logo: PremierePro },
      { name: "Figma", logo: Figma },
      { name: "Illustrator", logo: Illustrator },
    ],
    versionControl: [
      { name: "Git", logo: Git },
      { name: "GitHub", logo: GitHub },
    ],
    databases: [{ name: "MySQL", logo: MySQL }],
  };

  const renderSkills = (category) =>
    skills[category].map((skill) => (
      <div
        key={skill.name}
        className="flex flex-col items-center justify-center  bg-gray-700  shadow-md rounded-lg p-4 transition duration-300 hover:shadow-lg"
      >
        <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          className="w-12 h-12 mb-2"
        />
        <span className="text-sm font-normal text-white">{skill.name}</span>
      </div>
    ));

  return (
    <div
      id="Expertise"
      className="relative isolate overflow-hidden bg-gray-800 md:ml-96 min-h-screen flex items-center pb-24"
    >
      <div className="max-w-7xl  px-4 sm:px-6 md:px-12 xl:px-20">
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
          <div
            aria-hidden="true"
            className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
          </div>
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
            Expertise
          </h2>
          <p className="text-gray-300">
            We have built many products and some of them are below
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8 py-5">
          {Object.entries(skills).map(([category]) => (
            <div key={category}>
              {/* <h3 className="text-lg font-normal text-white mb-4">
                {category}
              </h3> */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {renderSkills(category)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
