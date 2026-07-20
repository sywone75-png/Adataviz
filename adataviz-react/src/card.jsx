const Card = ({ item }) => {
  return (
    <article className="card">
      <h2>{item.nom_long}</h2>

      <p>
        <strong>🍎 Type :</strong> {item.produit}
      </p>

      <p>
        <strong>📍 Adresse :</strong> {item.localisation}
      </p>

      <p>
        <strong>📍 Ardt :</strong> {item.ardt}
      </p>

      <p>
        <strong>🗓️ Jour :</strong> {item.jours_tenue}
      </p>

      <p>
        <strong>⏳ Horaires :</strong>{" "}
        {item.h_deb_sem_1} - {item.h_fin_sem_1}
      </p>
    </article>
  );
};

export default Card;