const Error = () => (
  <div className="page">
    <div className="badge">✦ Oops ✦</div>
    <h1><span>404</span> Lost? 🌌</h1>
    <div className="divider">
      <div className="divider-line" />
      <span className="divider-icon">✦</span>
      <div className="divider-line" />
    </div>
    <p>The page you are looking for seems to have floated away into the cosmos. Let us guide you back.</p>
    <div className="buttons">
      <button className="btn-primary" onClick={() => window.history.back()}>Go Back</button>
      <button className="btn-outline" onClick={() => window.location.href = "/"}>Home</button>
    </div>
  </div>
);
export default Error;
