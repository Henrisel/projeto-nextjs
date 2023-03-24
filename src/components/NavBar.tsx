import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
  return (
    <Box
      sx={{
        height: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        background: "#000000",
      }}
    >
      <Link href="/">
        <Typography
          sx={{
            color: "white",
            px: 2,
            transition: "0.2s",
            ":hover": { color: "green" },
          }}
        >
          Home
        </Typography>
      </Link>
      <Link href="/products/pants/redpant">
        <Typography sx={{ color: "white" }}>Redpants</Typography>
      </Link>
    </Box>
  );
}