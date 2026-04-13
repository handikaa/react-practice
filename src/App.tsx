import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ChildComponent from "./components/navbar/child/ChildComponent";
import { IdCardIcon } from "lucide-react";

function UserInfo({ name }: { name: string }) {
  return <p className="text-gray-700">User: {name}</p>;
}

function MovieCard({ title, genre }: { title: string; genre: string }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg hover:scale-105 transition cursor-pointer shadow-lg">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-400">{genre}</p>
    </div>
  );
}

function App() {
  const [currentMenu, setCurrentMenu] = useState<string>("Dashboard");
  const [submittedName, setSubmittedName] = useState<string>(""); // ✅ tambah
  const [message, setMessage] = useState<string>("Hello dari Parent!"); // ✅ tambah

  const boxStyle = {
    backgroundColor: "#1f2937",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "16px",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text === "") {
      alert("Nama tidak boleh kosong!");
    } else {
      setSubmittedName(text);
    }
  };

  // Langkah 3 (onClick)
  const [count, setCount] = useState<number>(0);

  const [text, setText] = useState<string>("New User");

  // Navbar state (punya kamu)
  const [notifStatus, setNotifStatus] = useState<boolean>(true);

  useEffect(() => {
    if (count > 10) {
      alert(`You clicked ${count} times!`);
    }
  }, [count]);

  // handle input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const movies = [
    { id: 1, title: "Avengers", genre: "Action" },
    { id: 2, title: "Interstellar", genre: "Sci-Fi" },
    { id: 3, title: "Joker", genre: "Drama" },
    { id: 4, title: "Frozen", genre: "Animation" },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar userName="John Doe" userRole="Regional Manager" notifStatus={notifStatus} changeNotifStatus={() => setNotifStatus(!notifStatus)} currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />

      <section className="bg-gray-900 min-h-screen text-white p-6">
        {currentMenu === "Dashboard" && (
          <>
            <h2 className="text-2xl font-bold mb-4">🎬 Dashboard</h2>

            {/* 🔹 Inline Styling */}
            <div style={boxStyle}>
              <p>Ini contoh inline styling</p>
            </div>

            {/* 🔹 useState (toggle warna) */}
            <div className="mb-4">
              <button onClick={() => setCount(count + 1)} className={`px-4 py-2 rounded ${count % 2 === 0 ? "bg-blue-500" : "bg-red-500"}`}>
                Klik (warna berubah)
              </button>
              <p className="mt-2">Count: {count}</p>
            </div>

            {/* 🔹 Input */}
            <div className="mb-4">
              <input type="text" value={text} onChange={handleChange} className="px-3 py-2 rounded bg-gray-700 border border-gray-600" />
              <p>Live: {text}</p>
            </div>

            {/* 🔹 Form */}
            <form onSubmit={handleSubmit}>
              <button className="bg-green-500 px-4 py-2 rounded">Submit</button>
            </form>
            <p className="mt-2">Hasil: {submittedName}</p>

            {/* 🔹 Parent → Child */}
            <ChildComponent message={message} onChangeText={() => setMessage("Diubah oleh Child 🚀")} />

            {/* 🔹 Movie List */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Popular Movies</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} title={movie.title} genre={movie.genre} />
                ))}
              </div>
            </div>
          </>
        )}

        {currentMenu === "Analytics" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">📊 Analytics</h2>
            <p>Total Users: 1,200</p>
            <p>Active Users: 300</p>
          </div>
        )}

        {currentMenu === "Campaigns" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">📢 Campaigns</h2>
            <p>Campaign A - Running</p>
            <p>Campaign B - Completed</p>
          </div>
        )}

        {currentMenu === "Billing" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">💳 Billing</h2>
            <p>Subscription: Premium</p>
            <p>Status: Active</p>
          </div>
        )}

        {currentMenu === "Help" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">❓ Help</h2>
            <p>Contact support@reactapp.com</p>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
