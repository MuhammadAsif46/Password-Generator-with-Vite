import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenrator = () => {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");

//   useRef hook 

const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let specialChar = "!@#$%^&*()-+=[]{}~`";
    if (isNumber) str += num;
    if (isCharacter) str += specialChar;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumber, isCharacter, setPassword]);

  const copyPasswordToClipboard = useCallback (()=>{
    // full select input field
    passwordRef.current?.select()
    // select specific range for input field
    // passwordRef.current?.setSelectionRange(0,200)
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    passwordGenrator()
  },[length, isNumber, isCharacter,passwordGenrator])

  return (
    <>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          ref={passwordRef}
          readOnly
        />
        <button
        onClick={copyPasswordToClipboard} className="rounded-s-none hover:bg-blue-900 border-none outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer"
          />
        </div>
        <label>Length: ({length})</label>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumber}
            id="numberInput"
            onChange={() => {
              setIsNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isCharacter}
            id="characterInput"
            onChange={() => {
              setIsCharacter((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </>
  );
};

export default PasswordGenrator;
