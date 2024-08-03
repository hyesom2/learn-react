// > components
import CardList from '@/components/CardList';

// > data
import ProductsData from '@/data/products';

function App() {
  return (
    <div className="app">
      <CardList ProductsData={ProductsData} />
    </div>
  );
}

export default App;