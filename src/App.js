
import { useState } from 'react';
import './App.css';
import AddSubscriber from './components/subscribers/AddSubscriber';
import SuscriberList from './components/subscribers/SuscriberList';
import Container from './components/templates/Container';

function App() {
  const [subscriptionList, setsubscriptionList] = useState([]);
  const addSubscriptionHandler = (sname, spincode) => {
    setsubscriptionList((prev) => { return [...prev, { name: sname, pincode: spincode, id: Math.random().toString() }] })
  }
  return (
    <Container>
      <AddSubscriber addSubscriptionHandler={addSubscriptionHandler} />
      <SuscriberList list={subscriptionList} />
    </Container>
  );
}

export default App;
