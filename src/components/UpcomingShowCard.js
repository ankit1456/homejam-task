import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const UpcomingShowCard = () => {
  return (
    <div className="upcomingShowCard">
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#111229",
          width: 210,
          borderRadius: "1.2rem",
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/Benny_Dayal_Super_Singer_9_hat_1200x768.jpeg?AA6w27lI8FUIgDvLH9Do4pFCTLJFlufx&size=1200:675"
          alt="green iguana"
        />
        <CardContent>
          <span className="upcomingShowCard__tag">Folk</span>
          <p className="upcomingShowCard__name">Benny Dayal</p>

          <CardActions className="upcomingShowCard__footer">
            <p>More Info &rarr;</p>
            <LocalMallOutlinedIcon />
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpcomingShowCard;
