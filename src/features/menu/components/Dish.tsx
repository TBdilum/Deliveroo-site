import { Box, Card, Typography } from "@mui/material";
import { IDish } from "../../../data/Sides";
import Button from "../../../components/Button";
import AddIcon from "@mui/icons-material/Add";
import { Colors } from "../../../theme";

type DishProps = {
  data: IDish;
};

const Dish = ({ data }: DishProps) => {
  return (
    <Card
      sx={{
        border: `1px solid ${Colors.border.default}`,
        borderRadius: "12px",
        overflow: "hidden",
        p: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "150px",
        width: "100%",
        maxHeight: "150px",
        maxWidth: "600px",
        boxShadow: `0px 2px 8px ${Colors.boxShadow.default}`,
        backgroundColor: Colors.background.defaultLight,
      }}
    >
      <Box
        sx={{
          width: "100px",
          height: "100px",
          borderRadius: "8px",
          overflow: "hidden",
          mr: 2,
        }}
      >
        <img
          src={data.image}
          alt={data.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          height: "100%",
          width: "100%",
          fontSize: "0.5rem",
          flex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "0.9rem",
            mb: 0.5,
          }}
        >
          {data.name}
        </Typography>
        <Typography
          sx={{
            color: Colors.text.lighter,
            fontSize: "0.7rem",
            mb: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {data.description}
        </Typography>
        <Typography
          sx={{
            fontWeight: "normal",
            color: Colors.text.default,
          }}
        >
          {data.price}
        </Typography>
      </Box>

      <Button
        sx={{
          backgroundColor: Colors.background.defaultLight,
          color: Colors.text.inverse,
          border: `1px solid ${Colors.border.subtle}`,
          borderRadius: "4px",
          width: "auto",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ml: "10px",
        }}
      >
        <AddIcon
          sx={{
            color: Colors.text.default,
            display: "flex",
            alignItems: "center",
            ml: 1,
          }}
        />
      </Button>
    </Card>
  );
};

export default Dish;
