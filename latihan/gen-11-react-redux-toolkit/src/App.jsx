import { useDispatch, useSelector } from "react-redux";
import { ubahJudul, ubahTipe } from "./bookSlice";

export default function App() {
  const bookState = useSelector((state) => state.book);
  const dispatch = useDispatch();
  console.log(bookState);

  return (
    <div>
      <h1>Buku</h1>
      <ul>
        <li>{bookState.title}</li>
        <li>{bookState.type}</li>
        <li>{bookState.author}</li>
      </ul>
      <button onClick={() => dispatch(ubahJudul())}>Ubah Judul</button>
      <button onClick={() => dispatch(ubahTipe("Religi"))}>Ubah Tipe</button>
    </div>
  );
}
