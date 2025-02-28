import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import VehicleListPage from "./pages/vehicle-list-page/VehicleListPage";
import VehicleDetailPage from "./pages/vehicle-detail-page/VehicleDetailPage";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // `"nav" "main"`
        lg: `"nav nav" "aside main"`, //`"nav nav" "aside main"`
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"5px"}>
          Asid
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Router>
          <Routes>
            <Route path="/" element={<VehicleListPage />} />
            <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
          </Routes>
        </Router>
      </GridItem>
    </Grid>
  );
}

export default App;
