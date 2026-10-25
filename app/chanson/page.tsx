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

// Photos associées à chaque couplet (numéros de joloinaX.jpg)
const photosParCouplet: number[][] = [
  [1, 2], // couplet 1
  [3],    // couplet 2
  [4, 5], // couplet 3
  [6],    // couplet 4
  [7],    // couplet 5
];

export default function PrinciaPage() {
  return (
    <main className="princia-page">
      <Link href="/" className="back-link">
        ← Retour à l'accueil
      </Link>

      {/* EN-TÊTE */}
      <header className="princia-header">
        <p className="eyebrow">UN SOUVENIR POUR KOLOINA</p>

        <span className="song-icon">♫</span>

        <h1>Leko lavitsa</h1>

        <p className="intro">
          Tu es ma famille, tu es mon amie,
          même si tu es loin de moi. ♡
        </p>
      </header>

      {/* PAROLES + PHOTOS ÉPARPILLÉES */}
      <section className="lyrics-story">
        <p className="eyebrow">LES PAROLES</p>
        <h2>Les mots de la chanson</h2>

        {paroles.map((couplet, index) => (
          <div
            className={`story-row ${index % 2 === 1 ? "reverse" : ""}`}
            key={index}
          >
            <div className="story-photos">
              {photosParCouplet[index].map((n, i) => (
                <figure
                  className={`story-photo story-photo-${i + 1}`}
                  key={n}
                >
                  <img
                    src={`/images/joloina${n}.jpg`}
                    alt={`Souvenir ${n} avec Koloina`}
                    loading="lazy"
                  />
                  <figcaption>Un souvenir précieux ♡</figcaption>
                </figure>
              ))}
            </div>

            <p className="verse">
              {couplet.split("\n").map((ligne, i) => (
                <span key={i}>
                  {ligne}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </section>

      {/* LA VIDÉO EN BAS */}
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

      <footer className="princia-footer">
        <p>Mahatsiaro, manigna…</p>
        <span>Fait avec amour, de la part de Princia ♡</span>
      </footer>
    </main>
  );
}