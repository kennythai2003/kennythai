import "../styles/Clubs.css";
import Club from "./Club";
import acmICON from "../assets/acm.png";
import leetcodeICON from "../assets/leetcode.png";
import redcrossICON from "../assets/redcross.png";
import thetatauICON from "../assets/thetatau.png";
import mentorcollectiveICON from "../assets/mentorcollective.png";

function Clubs() {
  const data = [
    {
      image: acmICON,
      alttag: "ACM Icon",
      clubName: "association of computing machinery",
      date: "sept. 2021 - present",
    },
    {
      image: leetcodeICON,
      alttag: "LeetCode Icon",
      clubName: "competitive coding club",
      date: "sept. 2022 - present",
    },
    {
      image: redcrossICON,
      alttag: "Red Cross Icon",
      clubName: "red cross",
      date: "aug. 2017 - present",
    },
    {
      image: thetatauICON,
      alttag: "Theta Tau Icon",
      clubName: "theta tau",
      date: "may 2023 - present",
    },
    {
      image: mentorcollectiveICON,
      alttag: "Mentor Collective Icon",
      clubName: "mentor collective",
      date: "sept. 2022 - present",
    },
  ];

  return (
    <section id="clubs">
      <h1 className="clubs-title">club and organizations</h1>

      <div className="clubs-flexboxes-containers">
        <div className="clubs-flexbox-containers">
          {data.map((value, index) => (
            <Club
              key={index}
              image={value.image}
              alttag={value.alttag}
              clubName={value.clubName}
              date={value.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clubs;
