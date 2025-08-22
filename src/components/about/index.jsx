import ceoImage from "../../assets/team/ceo.jpg";
import member1Image from "../../assets/team/member1.jpg";
import member2Image from "../../assets/team/member2.jpg";

export default function About() {
  const team = [
    { name: "Flora Nyra", position: "Product Manager", image: member1Image },
    { name: "Evander Mac", position: "Art Director", image: member1Image },
    {
      name: "Taytum Elia",
      position: "Investment Planner",
      image: member1Image,
    },
    { name: "Wylder Elio", position: "Financial Analyst", image: member2Image },
    { name: "Sophia Lee", position: "UI/UX Designer", image: member2Image },
    {
      name: "Liam Johnson",
      position: "Software Developer",
      image: member2Image,
    },
    {
      name: "Olivia Brown",
      position: "Quality Assurance",
      image: member2Image,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Meet Our <span className="text-cyan-600">Team</span>
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Our diverse team of professionals brings innovation, creativity, and
          technical expertise together to deliver outstanding software
          solutions.
        </p>

        {/* CEO Spotlight */}
        <div className="mb-20">
          <div className="w-60 mx-auto bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <img
              src={ceoImage}
              alt="CEO"
              className="w-full rounded-xl mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-cyan-600 font-medium">CEO</p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transform transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-cyan-500"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
