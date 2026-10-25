
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <p className="eyebrow">UN PETIT COIN DE SOUVENIRS</p>

      <h1>
        Nos petits
        <br />
        <em>souvenirs</em>
      </h1>

      <p className="intro">
        Certains souvenirs méritent de rester,
        même lorsque le temps passe.
      </p>

      <div className="sections">
        <Link href="/princia" className="person-card koloina">
          <span className="card-flower">♡</span>
          <h2>Koloina</h2>
          <p>Un souvenir rien que pour toi</p>
          <span className="card-arrow">↗</span>
        </Link>
      </div>

      <p className="home-dedication">
        Conçu spécialement pour Joloina,
        <br />
        de la part de Princia ♡
      </p>

      <footer>FAIT AVEC AMOUR (TENA MBA SOKANDRENY)</footer>
    </main>
  );
}
