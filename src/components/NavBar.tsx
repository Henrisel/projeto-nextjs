import { Box, Button, Typography } from "@mui/material";
import { TreeItem, TreeView } from '@mui/lab';
import Link from "next/link";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function NavBar() {
  return (
    <Box
      sx={{
        borderRadius: 3,
        margin: 1,
        width: 150,
        height: "100% - 2",
        bgcolor: "#2857f0",
        justifyContent: "flex-start",
        flexDirection: "column",
        display: "flex",
        alignItems: "flex-start",
        p: 2,
        color: "#fff",
      }}
    >
      <Box sx={{ height: 100 }} />
      <Button
        startIcon={<AddCircleOutlineIcon />}
        sx={{
          color: "#fff",
          width: "100%",
          textTransform: "none",
          borderColor: "transparent",
          borderStyle: "solid",
          borderWidth: 1,
          "&:hover": {
            borderColor: "#4b7afb",
            bgcolor: "#4371f1",
          },
        }}
      >
        Cadastros
      </Button>
    </Box>
  );
}