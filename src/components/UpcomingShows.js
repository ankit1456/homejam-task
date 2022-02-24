import "../styles/upcomingShows.css";
import UpcomingShowCard from "./UpcomingShowCard";

const UpcomingShows = () => {
  const cards = [
    {
      name: "Benny Dayal",
      tag: "Folk",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/Benny_Dayal_Super_Singer_9_hat_1200x768.jpeg?AA6w27lI8FUIgDvLH9Do4pFCTLJFlufx&size=1200:675",
    },
    {
      name: "Vijay Yesudas",
      tag: "Bollywood",
      image:
        "https://static.toiimg.com/photo/msid-70391965/70391965.jpg?191352",
    },
    {
      name: "Andrea Jeremiah",
      tag: "Folk",
      image: "https://jfwonline.com/wp-content/uploads/2022/01/Andrea_main.jpg",
    },
    {
      name: "Shilpa Rao",
      tag: "Folk",
      image:
        "https://assets.thehansindia.com/h-upload/2021/07/17/1089265-shilpa-rao.webp",
    },
  ];
  return (
    <div className="upcomingShows">
      <div className="upcomingShows__header">
        <h3 className="upcomingShows__heading">Upcoming Shows</h3>
        <p>View All</p>
      </div>

      <div className="upcomingShows__cards-container">
        {cards.map((val, i) => (
          <UpcomingShowCard
            image={val.image}
            cardName={val.name}
            tag={val.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingShows;
