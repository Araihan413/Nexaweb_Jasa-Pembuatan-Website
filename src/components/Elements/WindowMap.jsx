import windowMap from '../../assets/map_sementara.png';

const WindowMap = () => {
  return (
    <>
      <div className="rounded-3xl  border-2 overflow-hidden">
        <figure className="hover:blur-sm">
          <img src={windowMap} alt="map sementara" />
        </figure>
      </div>
    </>
  );
};

export default WindowMap;
