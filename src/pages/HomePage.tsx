import { Box, Container, Grid2 as Grid } from "@mui/material";
import RestaurantInfoView from "../features/menu/views/RestaurantInfoView";
import CategoriesBar from "../features/menu/components/CategoriesBar";
import MenuView from "../features/menu/views/MenuView";
import Cart from "../features/menu/components/Cart";

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <RestaurantInfoView />
      <CategoriesBar />
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          minHeight: "calc(100vh - 130px)",
          overflowY: "auto",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid
              size={{
                sm: 12,
                xs: 12,
                md: 8,
              }}
            >
              <MenuView />
            </Grid>
            <Grid
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                },
              }}
              size={{
                sm: 0,
                md: 4,
              }}
            >
              <Cart />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
