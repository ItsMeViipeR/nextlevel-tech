import React from "react";

export default function HomePage() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "3em" }}>Next Level Tech</h1>
        <p style={{ fontSize: "1.2em" }}>
          Bienvenue sur le blog Next Level Tech, où nous explorons les dernières
          innovations technologiques.
        </p>
      </div>
      <main>
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "2em" }}>Derniers Articles</h2>
          <p style={{ fontSize: "1em" }}>
            Restez à l'écoute pour nos derniers articles sur les tendances
            technologiques de pointe et les analyses.
          </p>
        </section>
        <section>
          <h2 style={{ fontSize: "2em" }}>À Propos de Nous</h2>
          <p style={{ fontSize: "1em" }}>
            Next Level Tech est votre source de référence pour des articles
            approfondis et des analyses sur les dernières technologies.
          </p>
        </section>
      </main>
    </div>
  );
}
