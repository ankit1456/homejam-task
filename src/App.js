import Header from "./components/Header";
import ReviewContainer from "./components/ReviewsContainer";
import UpcomingShows from "./components/UpcomingShows";

function App() {
  return (
    <div className="App">
      <Header />
      <UpcomingShows />
      <ReviewContainer />
    </div>
  );
}

export default App;
