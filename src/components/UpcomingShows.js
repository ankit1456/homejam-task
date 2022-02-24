import "../styles/upcomingShows.css";
import UpcomingShowCard from "./UpcomingShowCard";

const UpcomingShows = () => {
  return (
    <div className="upcomingShows">
      <div className="upcomingShows__header">
        <h3 className="upcomingShows__heading">Upcoming Shows</h3>
        <p>View All</p>
      </div>

      <div className="upcomingShows__cards-container">
        {[1, 2, 3, 4].map((val, i) => (
          <UpcomingShowCard />
        ))}
      </div>
    </div>
  );
};

export default UpcomingShows;
