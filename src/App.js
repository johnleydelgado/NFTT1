import "./App.css";
import NFTT1 from "./assets/images/NFTT1.JPG";
function App() {
  return (
    <div
      style={{ textAlign: "center", padding: 150, justifyContent: "center" }}
    >
      <article
        style={{ display: "block", textAlign: "left", width: 650, margin: 0 }}
      >
        <img
          src={NFTT1}
          style={{ width: 100, height: 100, borderRadius: 32 }}
          alt="img"
        />
        <h1 style={{ fontSize: 50 }}>We&rsquo;ll be back soon!</h1>
        <div style={{ fontSize: 20, color: "#333" }}>
          <p>
            Sorry for the inconvenience but we&rsquo;re performing some
            maintenance at the moment. If you need to you can always{" "}
            <a
              href="mailto:#"
              style={{ color: "#dc8100", textDecoration: "none" }}
            >
              contact us
            </a>
            , otherwise we&rsquo;ll be back online shortly!
          </p>
          <p>&mdash; The NFTT1 Team</p>
        </div>
      </article>
    </div>
  );
}

export default App;
