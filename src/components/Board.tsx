/** @format */

export const Board: React.FC = () => {
  return (
    <div className='row px-5 py-2' style={{ height: '10vh' }}>
      <BoardLeft />
      <BoardCenter />
      <BoardRight />
    </div>
  );
};

const BoardCenter: React.FC = () => {
  return (
    <div className='col-6 col-md-8 align-self-center'>
      <h2 className='text-center text-info text-nowrap'>1 700 000 р</h2>
    </div>
  );
};
const BoardLeft: React.FC = () => {
  return (
    <div className='col-3 col-md-2 d-flex flex-column justify-content-between'>
      <div className='d-flex justify-content-between'>
        <i className='bi bi-sliders'></i>
        <span className='d-none d-md-block'>выбрать счет</span>
      </div>
      <div className='d-flex justify-content-between'>
        <i className='bi bi-download'></i>
        <span className='d-none d-md-block'>загрузить отчет</span>
      </div>
    </div>
  );
};
const BoardRight: React.FC = () => {
  return (
    <div className='col-3 col-md-2 d-flex flex-column justify-content-between'>
      <span>$73,5</span>
      <div className='d-flex justify-content-between'>
        <span className='d-none d-md-block'>обновить цены</span>
        <i className='bi bi-cash-stack'></i>
      </div>
    </div>
  );
};
