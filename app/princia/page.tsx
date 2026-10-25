import Link from "next/link";

const paroles = [
  `Havanareo ve (leko lavitsa agny)
E magnategna anareo roa agnay (leko lavitsa agny)
Havanareo (leko lavitsa agny), havanao any aho (leko lavitsa agny)
Namanao any aho (leko lavitsa agny), namako agnao (leko lavitsa agny)
Mahatsiaro (leko lavitsa agny), manigna (leko lavitsa agny)`,

  `Fotsimbary madio ve leko tsa mihofa
Kilongapela madio agnao ve leko tsa mitova
Havanareo (leko lavitsa agny), havanao any aho (leko lavitsa agny)
Manigna anareo (leko lavitsa agny, vo hiverina (leko lavitsa agny)
Havanareo (leko lavitsa agny), manigna anareo (leko lavitsa agny)
Namanareo (leko lavitsa agny), havanareo (leko lavitsa agny)`,

  `Tataro fotsy agny antsisin'ny ny ala
Fa re ny tapano fotsy eroa de agny ampifin-dry malala`,

  `Fa ny madinika ee ro mamoa lohataogna aa
Manao veloma majinika e ary mandra-pihaogna`,

  `Vary madinika e ny vary tsipala
Eee ataonay veloma madinika ee ry hava-malala`,
];

// Légendes sous les photos (joloina1.jpg à joloina7.jpg)
const legendes = [
  "la petite dame qui murmure",
  "ta voix va nous manquer",
  "sending hugs",
  "Akory leka",
  "Sokandreny",
  "sweet moment",

  "my sweetie",
];

export default function PrinciaPage() {
  return (
    <main className="princia-page">
      <Link href="/" className="back-link">
        ← Retour à l'accueil
      </Link>

      {/* 1. LA CHANSON */}
      <header className="princia-header">
        <p className="eyebrow">UN SOUVENIR POUR KOLOINA</p>

        <span className="song-icon">♫</span>

        <h1>
          Leko lavitsa
        </h1>

        <p className="intro">
          Tu es ma famille, tu es mon amie,
          même si tu es loin de moi. ♡
        </p>
      </header>

      <section className="song-card">
        <div className="song-player">
          <iframe
            src="https://www.youtube-nocookie.com/embed/zrclbeZHDdQ"
            title="Havanareo ve - un souvenir pour Koloina"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <p className="song-card-caption">
          Une chanson pour nous rappeler que la distance
          ne change pas les liens du cœur. ♡
        </p>
      </section>

      {/* 2. L'ALBUM DE SOUVENIRS */}
      <section className="memory-gallery">
        <p className="eyebrow">QUELQUES INSTANTS DE NOUS</p>
        <h2>Des moments à garder ♡</h2>

        <div className="photo-grid">
          {Array.from({ length: 7 }, (_, index) => (
            <figure
              className={`memory-photo memory-photo-${index + 1}`}
              key={index}
            >
              <img
                src={`/images/joloina${index + 1}.jpg`}
                alt={`Souvenir ${index + 1} avec Koloina`}
                loading="lazy"
              />
              <figcaption>{legendes[index]}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 3. LES PAROLES */}
      <section className="lyrics">
        <p className="eyebrow">LES PAROLES</p>
        <h2>Les mots de la chanson</h2>

        {paroles.map((couplet, index) => (
          <p className="verse" key={index}>
            {couplet.split("\n").map((ligne, i) => (
              <span key={i}>
                {ligne}
                <br />
              </span>
            ))}
          </p>
        ))}
      </section>

      <footer className="princia-footer">
        <p>Mahatsiaro, manigna…</p>
        <span>Fait avec amour, de la part de Princia ♡</span>
      </footer>
    </main>
  );
}