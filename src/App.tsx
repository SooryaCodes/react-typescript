
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const name = { first_name: 'Soorya', last_name: 'Krishna' }
  const nameList = [
    { first_name: 'Soorya', last_name: 'Krishna' },
    { first_name: 'Anin', last_name: 'Arafath' },
    { first_name: 'Muhammad', last_name: 'Semeer' },
  ]
  return (
    <div>
      {/* <Person name={name} /> */}
      {/* <PersonList nameList={nameList} /> */}
      {/* <Greet name='Soorya' msgCount={20} isAuthenticated={true} /> */}
      {/* <Status status='loading' /> */}
      {/* <Heading> <Oscar/> </Heading> */}
      <Greet name='Soorya' isAuthenticated={true} />
    </div>
  );
}

export default App;
