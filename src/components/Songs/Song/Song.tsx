import { useState } from "react";
import { SongType } from "../../../data/SongData";

const Song = ({ title, artist }: SongType) => {
  const [bold, setBold] = useState<boolean>(false);
  const toggleBold = () => {
    setBold(!bold);
  };
  return (
    <li style={{ fontWeight: bold ? "bold" : "normal" }}>
      {title} by {artist}
      {bold ? (
        <button onClick={toggleBold}>Unbold</button>
      ) : (
        <button onClick={toggleBold}>Bold</button>
      )}
    </li>
  );
};

export default Song;
