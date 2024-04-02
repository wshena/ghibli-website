
export const TruncatedText = ({ text, limit, style }:{text:string, limit:number, style:string}) => {
  const words = text?.split(' ');
  const slicedWords = words?.slice(0, Math.min(limit, words?.length));
  const slicedText = slicedWords?.join(' ');

  if (words?.length > limit) {
    return <p className={`${style}`}>{slicedText}...</p>;
  }
  return <p className={`${style}`}>{slicedText}</p>;
};
