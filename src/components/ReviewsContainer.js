import "../styles/reviewContainer.css";
import Review from "./Review";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const ReviewContainer = () => {
  return (
    <div className="upcomingShows">
      <div className="upcomingShows__header">
        <h3 className="upcomingShows__heading">Reviews</h3>
        <div className="reviewHeader__right">
          <p>1/12</p>
          <ChevronLeftIcon fontSize="large" />
          <ChevronRightIcon fontSize="large" />
        </div>
      </div>

      <div className="upcomingShows__cards-container">
        {[1, 2, 3].map((val, i) => (
          <Review />
        ))}
      </div>
    </div>
  );
};

export default ReviewContainer;
