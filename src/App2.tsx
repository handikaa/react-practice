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
    if (count > 0) {
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
      <Navbar userName="John Doe" userRole="Regional Manager" notifStatus={notifStatus} changeNotifStatus={() => setNotifStatus(!notifStatus)} />

      <section>
        <div className="p-4">
          <h2 className="font-bold text-gray-800">Welcome to the Dashboard</h2>

          {/* Langkah 1 tampilkan variabel */}
          <div className="mt-4">
            <p>Nama: {nama}</p>
            <p>Umur: {umur}</p>
          </div>

          {/* Langkah 2 Props */}
          <UserInfo name={nama} />

          {/* Langkah 3 Button */}
          <div className="mt-4">
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-3 py-2 rounded">
              Klik Saya
            </button>
            <p>Jumlah klik: {count}</p>
          </div>

          {/* Langkah 4 Input */}
          <div className="mt-4">
            <input type="text" value={text} onChange={handleChange} className="border px-2 py-1" placeholder="Ketik nama..." />
            <p>Live: {text}</p>
          </div>

          {/* Langkah 5 Form */}
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded">
                Submit
              </button>
            </form>

            <p>Hasil submit: {submittedName}</p>
          </div>

          {/* Card kamu (tetap ada) */}
          <div className="grid grid-cols-4 pt-7">
            <div className="flex flex-col rounded-md bg-white shadow-2xl h-[200px] justify-between">
              <div className="flex flex-row justify-between p-4 text-gray-900">
                <div>Cost Savings</div>
                <div>{">"}</div>
              </div>
              <div className="flex flex-row justify-between p-4 text-gray-900">
                <div className="flex flex-col">
                  <div className="text-4xl font-bold">$18.000</div>
                  <div className="text-sm text-green-700">+0.7% than last week</div>
                </div>
                <div>
                  <div className="bg-blue-600 px-2 py-2 rounded-md cursor-pointer text-white hover:bg-blue-700">
                    <IdCardIcon size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
