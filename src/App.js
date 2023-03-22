import React, {useState} from "react"
import './App.css';
import Card from "./components/Card/Card"

const robots = [
  {
    id: 1,
    first_name: "Jada",
    last_name: "Foulks",
    email: "jfoulks0@ifeng.com",
    avatar: "https://robohash.org/104.236.21.134.png"
  },
  {
    id: 2,
    first_name: "Saw",
    last_name: "Pridmore",
    email: "spridmore1@liveinternet.ru",
    avatar: "https://robohash.org/F6M.png?set=set1"
  },
  {
    id: 3,
    first_name: "Valerie",
    last_name: "Polley",
    email: "vpolley2@eventbrite.com",
    avatar: "https://robohash.org/ARU.png?set=set1"
  },
  {
    id: 4,
    first_name: "Bogey",
    last_name: "Strong",
    email: "bstrong3@reference.com",
    avatar: "https://robohash.org/XLB.png?set=set1"
  },
  {
    id: 5,
    first_name: "Claudelle",
    last_name: "Guislin",
    email: "cguislin4@opera.com",
    avatar: "https://robohash.org/9KT.png?set=set1"
  },
  {
    id: 6,
    first_name: "Mignon",
    last_name: "Bourgeois",
    email: "mbourgeois5@elpais.com",
    avatar: "https://robohash.org/XN7.png?set=set1"
  },
  {
    id: 7,
    first_name: "Silvio",
    last_name: "Himpson",
    email: "shimpson6@hatena.ne.jp",
    avatar: "https://robohash.org/CIF.png?set=set2"
  },
  {
    id: 8,
    first_name: "Berry",
    last_name: "Sketchley",
    email: "bsketchley7@gov.uk",
    avatar: "https://robohash.org/01C.png?set=set2"
  }
];



function App() {
  const [users, setUsers] = useState(robots)

  return (
    <div className='main-container'>
      <h1>Workshop - Robots</h1>
      <Card users={users} />
    </div>
  );
}

export default App;
