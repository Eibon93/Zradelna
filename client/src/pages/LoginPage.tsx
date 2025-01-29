import { useState } from "react";
import rizek from "../assets/rizek.jpg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="bg-yellow-500 w-full h-full flex flex-col items-center justify-center p-8 md:w-1/3">
        <h2 className="text-3xl font-bold text-black mb-6">Jídelna-KD-Žatec</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Emailová adresa"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 pl-10 border rounded bg-white text-gray-700"
              required
            />
            <span className="absolute left-3 top-3 text-gray-400">📧</span>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Heslo"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 border rounded bg-white text-gray-700"
              required
            />
            <span className="absolute left-3 top-3 text-gray-400">🔒</span>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-white text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-200"
          >
            Přihlásit se
          </button>
          <p className="text-center text-sm text-gray-700">
            <a href="#" className="text-gray-900 font-bold">Zapomenuté heslo</a>
          </p>
        </form>
      </div>

      <div className="hidden md:block md:w-full bg-cover bg-center" style={{ backgroundImage: `url(${rizek})` }}></div>
    </div>
  );
}
