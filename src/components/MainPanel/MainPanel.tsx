import { SongData, SongType } from "../../data/SongData";
import AddSong from "../Songs/AddSong";
import SongList from "../Songs/SongList";
import { useState } from "react";

const MainPanel = () => {
  const [mySongs, setMySongs] = useState<SongType[]>(SongData);
  const addSong = () => {
    setMySongs([
      ...mySongs.slice(0, 2),
      { title: "Love Me Do", artist: "Beatles" },
      ...mySongs.slice(2),
    ]);
  };
  const addThisSong = (song: SongType) => {
    setMySongs([...mySongs, song]);
  };
  return (
    <>
      <SongList songs={mySongs} />
      <button onClick={addSong}>Add</button>
      <AddSong  addSongCallback={addThisSong} />
    </>
  );
};

export default MainPanel;
