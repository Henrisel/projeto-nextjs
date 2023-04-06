import { Box, Stack } from "@mui/material";
import NavBar from "./NavBar";

export default function MainContainer({ children }: any) {
  return (
    <Stack
      direction="row"
      sx={{ bgcolor: "#ebebeb", height: "100vh", width: "100%" }}
    >
      <NavBar />

      <Box
        sx={{
          p: 3,
          height: "100% - 1",
          width: "100%",
          m: 1,
          borderRadius: 3,
          bgcolor: "#fff",
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}

