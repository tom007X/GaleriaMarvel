import { getCharacters } from "../../services/personajes.service";
import { useEffect, useState } from "react";
import "./personaje.css";

const Personaje = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCharacters();
            setPersonajes(data);
        };

        fetchData();
    }, []);

    return (
        <div className="personajes-container">
            {personajes.map((personaje) => (
                <div key={personaje.id}>
                    <div className="card">
                    <img src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}  />
                    <p>{personaje.name}</p>
                     </div>
                </div>
            ))}
        </div>
    );
};

export default Personaje;
