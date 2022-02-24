import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const UpcomingShowCard = ({ image, cardName, tag }) => {
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
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <span className="upcomingShowCard__tag">{tag}</span>
          <p className="upcomingShowCard__name">{cardName}</p>

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
