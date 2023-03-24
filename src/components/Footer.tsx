import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
      }}
    >
      <Typography sx={{ color: "#ffffff" }}>Projeto limdo do manica</Typography>
    </Box>
  );
}