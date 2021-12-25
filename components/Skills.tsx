import Image from "next/image";

const Tile = ({ text }) => {
  return (
    <div
      className="px-6 my-10 rounded-full py-2 grid place-items-center text-lg bg-purple-400 hover:bg-purple-300 duration-100 cursor-pointer"
    >
      {text}{" "}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="-mt-12  px-8 py-2 flex justify-center flex-col font-inter font-medium">
      <p className="text-center text-3xl font-mono font-semibold text-purple-600">skills</p>
      <div className="-mt-16 w-full flex justify-center">
        <Image src="/assests/illustration.png" height="330" width="330" />
      </div>
      <div className="w-full flex justify-center gap-8">
        <Tile text="NextJS" />
        <Tile text="Tailwind CSS" />
        <Tile text="Node JS" />
        <Tile text="Supabase" />
      </div>
    </div>
  );
};

export default Skills;
