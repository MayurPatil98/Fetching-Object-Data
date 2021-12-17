import './App.css';
import Data from './components/Data';
import Card from './components/Table';


function App() {
  return (
    <div>
      <Card
      num = {Data[0].num}
      name = {Data[0].name}
      age = {Data[0].age}
      mobNo = {Data[0].mobNo}
      email = {Data[0].email}
      trade = {Data[0].trade}
      cgpa = {Data[0].cgpa}
      ssc = {Data[0].ssc}
      hsc = {Data[0].hsc}
      bloodGroup = {Data[0].bloodGroup}
      address = {Data[0].address}
      />
      <Card
      num = {Data[1].num}
      name = {Data[1].name}
      age = {Data[1].age}
      mobNo = {Data[1].mobNo}
      email = {Data[1].email}
      trade = {Data[1].trade}
      cgpa = {Data[1].cgpa}
      ssc = {Data[1].ssc}
      hsc = {Data[1].hsc}
      bloodGroup = {Data[1].bloodGroup}
      address = {Data[1].address}
      />
      <Card
      num = {Data[2].num}
      name = {Data[2].name}
      age = {Data[2].age}
      mobNo = {Data[2].mobNo}
      email = {Data[2].email}
      trade = {Data[2].trade}
      cgpa = {Data[2].cgpa}
      ssc = {Data[2].ssc}
      hsc = {Data[2].hsc}
      bloodGroup = {Data[2].bloodGroup}
      address = {Data[2].address}
      />
    </div>
  );
}

export default App;
