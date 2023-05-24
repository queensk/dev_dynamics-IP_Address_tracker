const Result = ({ ipAddress, location, timeZone, isp }) => {
  return (
    <div className="result">
      <div className="result__box">
        <h5 className="result__box--title">ip address</h5>
        <h3 className="result__box--result">{ipAddress}</h3>
      </div>
      <div className="result__box">
        <h5 className="result__box--title">location</h5>
        <h3 className="result__box--result">{location}</h3>
      </div>
      <div className="result__box">
        <h5 className="result__box--title">timezone</h5>
        <h3 className="result__box--result">{timeZone}</h3>
      </div>
      <div className="result__box">
        <h5 className="result__box--title">isp</h5>
        <h3 className="result__box--result">{isp}</h3>
      </div>
    </div>
  );
};

export default Result;
