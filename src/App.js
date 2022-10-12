import Home from "./pages/Home"
import Pages from "./pages/Pages"
// we imported here browserRouter because it is used by home and page so instead of addressing it 2 times we import it here a higher level
// browserRouter enables us to navigate between pages
import { BrowserRouter } from  "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
