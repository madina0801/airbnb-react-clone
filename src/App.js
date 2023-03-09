import './App.css';
import Navbar from './components/Navbar.js';
import Grid from './components/Grid.js';
import Card from './components/Card.js';
import data from './data.js';

function App() {
  const cards = data.map(card => <Card
    key={card.id}
    coverImg={card.coverImg}
    rating={card.stats.rating}
    reviewCount={card.stats.reviewCount}
    location={card.location}
    title={card.title}
    price={card.price}
  />);
  console.log(cards)

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
