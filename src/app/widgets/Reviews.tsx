import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import AngelLogo from "../../../public/Clientlogo/Logo/AnGelLogos.png"
import Banas from "../../../public/Clientlogo/Logo/BanasLogos.png"
import Chem from "../../../public/Clientlogo/Logo/ChemLogos.png"
import FlowTech from "../../../public/Clientlogo/Logo/ChemLogos-1.png"
import Desire from "../../../public/Clientlogo/Logo/DesireLogos.png"
import Duke from "../../../public/Clientlogo/Logo/DukeLogos.png"
import GA from "../../../public/Clientlogo/Logo/GALogos.png"
import GrundForce from "../../../public/Clientlogo/Logo/GrundFosLogos.png"
import Harshidh from "../../../public/Clientlogo/Logo/HarsiddhLogos.png"
import Indifos from "../../../public/Clientlogo/Logo/IndifosLogos.png"
import Leakproof from "../../../public/Clientlogo/Logo/Leak ProofLogos.png"
import pacific from "../../../public/Clientlogo/Logo/PacificLogos.png"
import prompt from "../../../public/Clientlogo/Logo/PromptLogos.png"
import ratanmani from "../../../public/Clientlogo/Logo/RatanmaniLogos.png"
import Rotodel from "../../../public/Clientlogo/Logo/RotodelLogos.png"
import Waterman from "../../../public/Clientlogo/Logo/WatermanLogos.png"

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: AngelLogo.src,
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: Waterman.src,
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: Rotodel.src,
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: ratanmani.src,
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: pacific.src,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: Banas.src,
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: Chem.src
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: FlowTech.src
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img:Desire.src
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: Duke.src
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: GA.src
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: GrundForce.src
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: Harshidh.src
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: Indifos.src
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: Leakproof.src
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: prompt.src
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
     
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
       
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center justify-center ">
        <Image className="rounded-full bg-transparent" width={150} height={100} alt="" src={img} />
        {/* <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div> */}
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background py-20 md:shadow-xl">
      <h2 className=" text-4xl p-5 sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-800   my-10 flex justify-center">
        BRANDS THAT TRUST US<br />
      </h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r  dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-black"></div>
    </div>
  );
};

export { MarqueeDemo };
