// //function App() {

//   //const marche = {
//     //nom: "Marché Bastille",
//     //arrondissement: 11,
//     //type: "Alimentaire"
//   //}

//   //return (
//     //<div>
//     //<h1>{marche.nom}</h1>
//     //<p> Arrondissement : {marche.arrondissement}</p>
//     //<p>Type : {marche.type}</p>
//     //</div>
//   //);
// //}

// //export default App;


// exo 3 

// function App() {

//   const marches = [
//     {
//       id: 1,
//       nom: "Marché Bastille",
//       arrondissement: 11,
//      type: "Alimentaire"
//     },
//     {
//       id: 2,
//       nom: "Marché Aligre",
//       arrondissement: 12,
//       type: "Alimentaire"
//     },
//     {
//       id: 3,
//       nom: "Marché Saint-Germain",
//       arrondissement: 6,
//       type: "Alimentaire"
//     }
//   ]

//   return (
//     <div>
//       <h1>Les marchés de Paris</h1>

//       {marches.map((marche) => (
//         <div key={marche.id}>
//           <h2>{marche.nom}</h2>
//           <p>Arrondissement : {marche.arrondissement}</p>
//           <p>Type : {marche.type}</p>
//         </div>
//       ))}

//     </div>
//   )
// }

// export default App;


// //Tp mercredi aprem

import { useState, useEffect } from "react";
import "./index.css";
import Card from "./Card.jsx";

const App = () => {
  const [marches, setMarches] = useState([]);

  const chargerDonnees = async () => {
    try {
      const reponse = await fetch(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/marches-decouverts/records?limit=20"
      );
    
      const resultat = await reponse.json();

      const donneesFormatees = (resultat.results || []).map((item) => ({
        id: item.id || Math.random().toString(),
        nom_long: item.nom_long || "Marché",
        produit: item.produit || "Non renseigné",
        localisation: item.localisation || "Adresse non renseignée",
        ardt: item.ardt || "non renseigné",
        jours_tenue: item.jours_tenue || "Non renseigné",
        h_deb_sem_1: item.h_deb_sem_1 || "",
        h_fin_sem_1: item.h_fin_sem_1 || "",
      }));

      setMarches(donneesFormatees);

    } catch (erreur) {
      console.error("Erreur :", erreur);
    }
  };

  useEffect(() => {
    chargerDonnees();
  }, []);

  return (
    <div>
      <header>
        <h1>Les marchés de Paris</h1>
      </header>
      <div className="cards">
      {marches.map((marche) => (
        <Card key={marche.id} item={marche} />
      ))}
     </div>
    </div>
  );
  };
export default App;


  




  

  

  //   nom_court: "Marché Bastille",
  //   ardt: "11e arrondissement",
  //   jours_tenue: "samedi"
  // },
  // {
  //   nom_court: "Mrché charonne",
  //   ardt: "12e arrondissement",
  //   jours_tenue: "dimanche"
  // },
  // {
  //   nom_court: "Marché Aligre",
  //   ardt: "5e arrondissement",
  //   jours_tenue: "mercredi"
  // }



// function App() {


//   return (
//     <div>
//       <h1>Mon Adataviz</h1>

//       {donnees.map((item, index) => (
//         <div className="carte" key={index}>
//           <h2>{item.nom_court}</h2>
//           <p>{item.ardt}</p>
//           <p>{item.jours_tenue}</p>
//         </div>
//       ))}

//     </div>
//   )
// }

// export default App


// // TP Maeva 

// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   console.log('je dessine');
//   return (
//     <>
//       <section id="center">
       
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button
//         <button 
//         type="button"
//         className="counter"
//         onClick={() =>}
//       </section>

      
//     </>
//   )
// }

// export default App
