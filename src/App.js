import './App.css';
import { useState } from "react";
import EditComponent from "./components/EditComponent";
const App = () => {
  const [checked, setChecked] = useState(false);
  const onChecked = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };
  return (
    <div className="app">
      <header className="app-header">
        Quill Demo
      </header>
      <section className="app-check">
        <label>
          <input type="checkbox" checked={checked} onChange={onChecked} /> Read Only
        </label>
      </section>
      <section className="app-section">
        <EditComponent readOnly={checked} htmlValue={"<h3><strong>Default initial value</strong></h3>"} />
        <EditComponent readOnly={checked} htmlValue={"<h3><strong>Default initial value</strong></h3>"} />
        <EditComponent readOnly={checked} htmlValue={"<h3><strong>Default initial value</strong></h3>"} />
      </section>
    </div>
  );
};

export default App;
