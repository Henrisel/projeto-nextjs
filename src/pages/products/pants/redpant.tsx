import NavBar from "@/components/NavBar";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function RedPant() {
  return (
    <>
      <Paper sx={{ p: 2, borderRadius: 3, backgroundColor: "#ffffff" }}>
        <Typography variant="h4">Vinícola</Typography>
      </Paper>
    </>
  );
}