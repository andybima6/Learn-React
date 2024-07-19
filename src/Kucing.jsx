import React, {useState} from 'react';

function Kucing() {
    const [name,setName] = useState('Tom');
    const [warna, setWarna] = useState('Biru')
    const [makanan, setMakan] = useState(['Ikan', 'Ayam']);
    return(
        <div>
            <h2>Nama : {name}</h2>
         <h2>Warna : {warna}</h2>
         <h2>Makanan : </h2>
         <ul>
        {makanan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
        </div>
    );

}
export default Kucing