import ItemListContainer from "./components/ItemListContainer";
import Routes from "./routes/Routes";
import { Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <Routes>
      <Route exact path="/" component={ItemListContainer} />
      <Route path="/detail/:id" component={ItemDetailContainer} />
      {/* <Route>
        <ItemListContainer />
      </Route> */}
    </Routes>
  );
}

export default App;
