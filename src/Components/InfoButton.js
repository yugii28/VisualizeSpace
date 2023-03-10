import { useState } from 'react';

export default function InfoButton({ info }) {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => setShowInfo(!showInfo);

  return (
    <>
      <button style = {{background: "none", border: "none"}} onClick={toggleInfo}>ℹ️</button>
      {showInfo && <div style = {{color: "black"}}>{info}</div>}
    </>
  );
}