import { Box, Stack } from "@mui/material";
import NavBar from "./NavBar";

export default function MainContainer({ children }: any) {
  return (
    <Stack
      direction="row"
      sx={{ bgcolor: "#f1f3f5", height: "100vh", width: "100%" }}
    >
      <NavBar />

      <Box sx={{ height: "100%", width: "100%", my: 2, mr: 4, ml: 2 }}>
        {children}
      </Box>
    </Stack>
  );
}

