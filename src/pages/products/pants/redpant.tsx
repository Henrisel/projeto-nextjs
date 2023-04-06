import NavBar from "@/components/NavBar";
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function RedPant() {
  return (
    <>
      <Typography variant="h4" mb={3}>
        Vinícola
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField sx={{ flex: 1 }} label="Texto do manica" />
        <TextField sx={{ flex: 1 }} label="Texto do manica" />
        <TextField sx={{ flex: 1 }} label="Texto do manica" />
      </Stack>
      <Box justifyContent="flex-end" alignItems="flex-end" display="flex">
        <Button>Salvar</Button>
      </Box>
    </>
  );
}