import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
  return (
    <Box
      sx={{
        borderRadius: 2,
        margin: 2,
        width: 150,
        height: "100% - 2",
        bgcolor: "#ffffff",
        justifyContent: "flex-start",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        p: 2,
      }}
    >
      <Link href="/">
        <Typography
          sx={{
            color: "#000",
            px: 2,
            transition: "0.2s",
            ":hover": { color: "purple" },
          }}
        >
          Home
        </Typography>
      </Link>
      <Link href="/products/pants/redpant">
        <Typography sx={{ color: "#000" }}>Redpants</Typography>
      </Link>
    </Box>
  );
}