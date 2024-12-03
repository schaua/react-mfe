import "./App.css";
// import Greeting from "./components/Greeting/Greeting";
import { SongType } from "./components/Songs/Song/Song";
import SongList from "./components/Songs/SongList";

const App = () => {
  const mySongs: SongType[] = [
    { title: "Gravity", artist: "Allison Kraus" },
    { title: "Gravity", artist: "I Forget" },
  ];
  return (
    <>
      {/* <Greeting message="Hello" />
      <Greeting message="Bonjour" length={2} /> */}
      <SongList songs={mySongs} />
    </>
  );
};

export default App;
