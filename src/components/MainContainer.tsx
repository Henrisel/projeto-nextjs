import { Box } from "@mui/material";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function MainContainer({ children }: any) {
  return (
    <>
      <NavBar />

      <Box sx={{ background: "#f1f3f5", minHeight: "80vh", p: 5 }}>
        {children}
      </Box>

      <Footer />
    </>
  );
}
