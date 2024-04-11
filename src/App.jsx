import "./App.css";
import PasswordGenrator from "./component/PasswordGenrator";

function App() {

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 text-orange-400 bg-gray-700">
      <h2 className="text-2xl text-center text-white my-3">Password Generator</h2>
      <PasswordGenrator/>
    </div>
  );
}

export default App;
