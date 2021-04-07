/** @format */

export const Information: React.FC = () => {
  return (
    <div className='container text-info'>
      <InfoShort />
      <InfoFull />
    </div>
  );
};

const InfoFull: React.FC = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <span>I am is InfoFull</span>
        </div>
      </div>
    </>
  );
};
const InfoShort: React.FC = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <span>I am is InfoShort</span>
        </div>
      </div>
    </>
  );
};
