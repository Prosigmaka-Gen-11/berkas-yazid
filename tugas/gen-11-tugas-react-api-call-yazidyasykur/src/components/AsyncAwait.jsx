import React, {useEffect, useState} from 'react';

export default function AsyncAwait() {

    const [allDaerah, setAllDaerah] = useState([])
    const [lokasi, setLokasi] = useState("1301")
    const [waktu, setWaktu] = useState({})

    useEffect(() => {

        async function fetchAllDaerah() {
            const data = await fetch("https://api.myquran.com/v1/sholat/kota/semua");
            const json = await data.json();
            setAllDaerah(json)
        }

        fetchAllDaerah();
    }, [])

    useEffect(() => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        async function fetchJadwal() {
            const data = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${lokasi}/${year}/${month}/${day}`);
            const json = await data.json();
            setWaktu(json.data.jadwal)
        }

        fetchJadwal();

    }, [lokasi])
    
    return(
        <div>
            <div>
                <h3>Jadwal Shalat Hari Ini</h3>
                <p>Menggunakan Async Await</p>
                <label>
                    Pilih Lokasi: <br />
                    <select value={lokasi} onChange={event => setLokasi(event.target.value)}>
                        {
                            allDaerah.map(item => <option key={item.id} value={item.id}>{item.lokasi}</option>)
                        }
                    </select>
                </label>

                
            </div>

            <div>
                <p>{waktu.tanggal}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Waktu</th>
                            <th>Pukul</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Imsak</td><td>{waktu.imsak}</td>
                        </tr>
                        <tr>
                            <td>Subuh</td><td>{waktu.subuh}</td>
                        </tr>
                        <tr>
                            <td>Terbit</td><td>{waktu.terbit}</td>
                        </tr>
                        <tr>
                            <td>Dhuha</td><td>{waktu.dhuha}</td>
                        </tr>
                        <tr>
                            <td>Dzuhur</td><td>{waktu.dzuhur}</td>
                        </tr>
                        <tr>
                            <td>Ashar</td><td>{waktu.ashar}</td>
                        </tr>
                        <tr>
                            <td>Magrib</td><td>{waktu.maghrib}</td>
                        </tr>
                        <tr>
                            <td>Isya</td><td>{waktu.isya}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}