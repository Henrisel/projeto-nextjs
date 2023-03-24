import NavBar from "@/components/NavBar";
import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function RedPant() {
  return (
    <>
      <Paper
        sx={{ p: 3, borderRadius: 3, backgroundColor: "#ffffff" }}
        elevation={0}
      >
        <Typography variant="h4" mb={3}>
          Vinícola
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField sx={{ flex: 1 }} label="Texto do manica" />
          <TextField sx={{ flex: 1 }} label="Texto do manica" />
          <TextField sx={{ flex: 1 }} label="Texto do manica" />
        </Stack>
      </Paper>
    </>
  );
}