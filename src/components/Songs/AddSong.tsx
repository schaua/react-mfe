import { SongType } from "../../data/SongData";

const AddSong = ({ addSongCallback }: AddSongType) => {
  // const addSongCallback = props.addSongCallback;
  const localAddSong = () => {
    addSongCallback({ title: "Yesterday", artist: "Beatles" });
  };
  return (
    <div className="bordered">
      <p>Create a form here later</p>
      <button onClick={localAddSong}>Add Yesterday</button>
    </div>
  );
};

export default AddSong;
type AddSongType = {
  addSongCallback: (s: SongType) => void;
};
