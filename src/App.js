import './App.css';
import Navbar from './components/Navbar.js';
import Grid from './components/Grid.js';
import Card from './components/Card.js';
import data from './data.js';

function App() {
  const cards = data.map(item => <Card
    key={item.id}
    item={item}
  />);

  return (
    <div>
      <Navbar />
      <Grid />
      <section className="card__list">
        {cards}
      </section>
    </div>
  );
}

export default App;
