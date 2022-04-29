const Counter = ({ counter, setCounter }) => {
  return (
    <div>
      <div className="controls">
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
