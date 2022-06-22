import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardPeople from "./CardPeople"


const ListSW = () => {
  const [personajes, setPersonajes] = React.useState([]);
  React.useEffect(() => {
    obtenerDatosPer();
  }, []);

  const obtenerDatosPer = async () => {
    const data = await fetch(`https://swapi.dev/api/people`);
    const personaje = await data.json();
    setPersonajes(personaje.results);
  };

  return (
    <div className="row">
      {personajes.map((item) => (
      <CardPeople
      name=  {item.name}
      hair_color={item.hair_color}
      eye_color= {item.eye_color}
      height= {item.height}
      gender={item.gender}
      birth_year={item.birth_year}
     
      />
     
      ))} 
    
        </div>
        
      
  
  );
};
export default ListSW;