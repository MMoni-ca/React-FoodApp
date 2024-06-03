import { useState } from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";
import "./App.css";
import FoodList from "./components/FoodList";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foodData, setFood] = useState([]);
  const [foodId, setFoodId] = useState("65dd8bb0985e05d20807b9b8");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFood={setFood} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
