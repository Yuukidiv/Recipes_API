import Categories from "./components/Categories";
import Pages from "./pages/Pages"
import Search from "./components/Search";
// we imported here browserRouter because it is used by home and page so instead of addressing it 2 times we import it here a higher level
// browserRouter enables us to navigate between pages
import { BrowserRouter } from  "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
      <Categories />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
