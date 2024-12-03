import Song, { SongType } from "./Song/Song";

const SongList = ({ songs }: {songs:SongType[]}) => {
  return (
    <>
      <h1>List of my favorite songs</h1>
      <ul>
        {songs.map((song: SongType) => (
          <Song artist={song.artist} title={song.title} />
        ))}
      </ul>
    </>
  );
};

export default SongList;
// export type SongListType = { songs: SongType[] };
