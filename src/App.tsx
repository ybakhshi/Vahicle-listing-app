import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

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
      <GridItem area={"nav"} bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"5px"} bg={"red"}>
          Asid
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"blue"}>
        {" "}
        main{" "}
      </GridItem>
    </Grid>
  );
}

export default App;
