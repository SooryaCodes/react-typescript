import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person/Person";
import PersonList from "./components/Person/PersonList";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
// import User from "./components/state/User";
import Status from "./components/Status";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import Counter2 from './components/class/Counter'

function App() {
  const name = { first_name: "Soorya", last_name: "Krishna" };
  const nameList = [
    { first_name: "Soorya", last_name: "Krishna" },
    { first_name: "Anin", last_name: "Arafath" },
    { first_name: "Muhammad", last_name: "Semeer" },
  ];
  return (
    <div>
      {/* <Person name={name} /> */}
      {/* <PersonList nameList={nameList} /> */}
      {/* <Greet name='Soorya' msgCount={20} isAuthenticated={true} /> */}
      {/* <Status status='loading' /> */}
      {/* <Heading> <Oscar/> </Heading> */}
      {/* <Greet name='Soorya' isAuthenticated={true} /> */}

      {/* <Button handleClick={(event, id) => console.log(`Button clicked, id : ${id} `, event)} /> */}
      {/* <Input value="" handleChange={(event) => console.log(event.target.value)} /> */}

      {/* <Container styles={{ border: "2px dashed #202020", padding: '2rem' }}/> */}

      {/* <LoggedIn /> */}
      {/* <User /> */}

      {/* <Counter /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <DomRef />
      <MutableRef /> */}

      <Counter2 message="Counter" />
    </div>
  );
}

export default App;
