import InfoShort from "./InfoShort";
import InfoFull from "./InfoFull";

function InfoContent() {
  return (
    <div className="container text-info">
      <InfoShort />
      <InfoFull />
    </div>
  );
}

export default InfoContent;
