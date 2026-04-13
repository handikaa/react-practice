import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
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

  // Langkah 1 (Variabel)
  const nama: string = "Budi";
  const umur: number = 21;

  // Langkah 3 (onClick)
  const [count, setCount] = useState<number>(0);

  // Langkah 4 (Input)
  const [text, setText] = useState<string>("New User");

  // Langkah 5 (Form)
  const [submittedName, setSubmittedName] = useState<string>("");

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

  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text === "") {
      alert("Nama tidak boleh kosong!");
    } else {
      setSubmittedName(text);
    }
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

            {/* interaction + movie list tetap */}
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
