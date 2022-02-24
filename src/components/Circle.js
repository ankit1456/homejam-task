import "../styles/circle.css";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const Circle = ({ overlay }) => {
  return (
    <div className={`circle ${overlay && "circle-overlay"}`}>
      <LocalMallOutlinedIcon />
      <span className="circle__zero">0</span>
      <span>Lebel</span>
    </div>
  );
};

export default Circle;
