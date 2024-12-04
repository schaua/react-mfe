import { SongData, SongType } from "../../data/SongData";
import SongList from "../Songs/SongList";
import { useState } from "react";

const MainPanel = () => {
  // const loadData = (): SongType[] => {
  //   setMySongs(SongData);
  //   return mySongs;
  // };
  // const [mySongs, setMySongs] = useState<SongType[]>(loadData());
  const [flag, setFlag] = useState<boolean>(false);
  const [mySongs, setMySongs] = useState<SongType[]>(SongData);

  const addSong = () => {
    setMySongs([
      ...mySongs.slice(0, 2),
      { title: "Love Me Do", artist: "Beatles", votes: 0 },
      ...mySongs.slice(2),
    ]);
  };
  // const addThisSong = (song: SongType) => {
  //   setMySongs([...mySongs, song]);
  // };
  return (
    <>
      <SongList initialSongs={mySongs} />
      <button onClick={addSong}>Add</button>
      <p>{flag ? "Old" : "New"}</p>
      <button onClick={() => setFlag(!flag)}>Force Refresh</button>
    </>
  );
};

export default MainPanel;
