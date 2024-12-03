const Greeting = (props: GreetingType): React.ReactElement => {
  const { message, language, length } = props;
  return (
    <>
      <p key={language}>{message.slice(0, length)}</p>
    </>
  );
};
export default Greeting;

type GreetingType = {
  message: string;
  language?: string;
  length?: number;
};
