import { Card, CardMedia, Box, Typography } from "@mui/material";
import cseImg from "../clgimg.jpg";

export default function DepartmentCard() {
  return (
    <Card
      sx={{ position: "relative", borderRadius: 3, boxShadow: 4, marginTop: 5 }}
    >
      {/* Image from src */}
      <CardMedia
        component="img"
        height="400"
        image={cseImg}
        alt="Computer Science"
      />

      {/* Overlay content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.4)", // dark overlay
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="h4">
          D. Y. Patil College Of Engineering & Technology, Kolhapur
        </Typography>
      </Box>
    </Card>
  );
}
