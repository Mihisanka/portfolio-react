import './index.scss';

const AnimatedLetters = ({ letterClass, startArray, idx }) => {
  return (
    <span>
      {startArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
