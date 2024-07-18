
import './Buah.css';
// Props (singkatan dari "properties") dalam React digunakan untuk mengirimkan data dari komponen induk (parent) ke komponen anak (child)
function CardBuah(props) {
  return (
    <div>
      <h1 className="text">{props.listBuah}</h1>
    </div>
  );
}

export default CardBuah;