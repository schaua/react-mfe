const Song = ({ title, artist }: SongType) => (
  <li>
    {title} by {artist}
  </li>
);

export default Song;
export type SongType = { artist: string; title: string };
