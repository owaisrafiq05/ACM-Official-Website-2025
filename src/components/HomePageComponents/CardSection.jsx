import { CardDemo } from './KeyCards';
import team1 from "../../assets/images/excellence/team1.jpg";
import team2 from "../../assets/images/excellence/team2.jpg";
import comp1 from "../../assets/images/excellence/comp1.jpg";
import comp2 from "../../assets/images/excellence/comp2.jpg";
import ex1 from "../../assets/images/excellence/excellence1.jpg";
import ex2 from "../../assets/images/excellence/ex2.jpg";
import grow1 from "../../assets/images/excellence/grow1.jpg";
import grow2 from "../../assets/images/excellence/grow2.jpg";

const cardData = [
  {
    name: "3,000+ Participants",
    description: "Annually",
    bgImage: comp2, // Adjust image as necessary
    afterBgImage: comp1,
  },
  {
    name: "20+ Competitions",
    description: "Organized Yearly",
    bgImage: team1, // Adjust image as necessary
    afterBgImage: team2,
  },
  {
    name: "15+ Years",
    description: "Of Excellence",
    bgImage: ex2,
    afterBgImage: ex1,
  },
  {
    name: "1,000+",
    description: "Active Student Members",
    bgImage: grow1,
    afterBgImage: grow2,
  },
];


export function CardSection() {
  return (
    <section className="bg-white py-12 mx-auto sm:ml-20">
      <h1 className="mainh1 font-extrabold text-4xl text-center lg:text-left lg:text-7xl text-[#006984]">
        Our Excellence
      </h1>
      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 mx-auto w-full sm:px-4 sm:pl-0">
        {cardData.map((card, index) => (
          <div key={index} className="w-full">
            <CardDemo
              {...card}
            />
          </div>
        ))}
      </div>
    </section>
  );
}