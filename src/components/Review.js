import "../styles/reviewContainer.css";
import Card from "@mui/material/Card";

const Review = () => {
  return (
    <div className="reviewWrapper">
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#111229",
          width: 280,
          borderRadius: "1.2rem",
        }}
      >
        <div className="review">
          <div className="review__header">
            <div className="review__img">
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/Benny_Dayal_Super_Singer_9_hat_1200x768.jpeg?AA6w27lI8FUIgDvLH9Do4pFCTLJFlufx&size=1200:675"
                alt=""
              />
            </div>

            <div className="review__header-right">
              <p className="review__name">Mark Smith</p>
              <div className="review__header-address">
                <img
                  alt=""
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                />

                <p>New York, USA</p>
              </div>
            </div>
          </div>
          <div className="review__content">
            <p>
              Whether you have been sent here by one of our recruitment ninjas,
              or stumbled upon it by accident, we're excited you're here! We are
              creating an innovative platform.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Review;
