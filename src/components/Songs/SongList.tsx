import Song from "./Song/Song";
import { SongType } from "../../data/SongData";

const SongList = ({ songs }: SongListType) => {
  return (
    <>
      <h1>List of my favorite songs</h1>
      <ul>
        {songs.map((song: SongType, index) => (
          <Song key={index} artist={song.artist} title={song.title} />
        ))}
      </ul>
    </>
  );
};

export default SongList;
type SongListType = { songs: SongType[] }; // SongListProps
