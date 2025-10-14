import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Prev Arrow
function PrevArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "white",
        "&:hover": { backgroundColor: "grey.200" },
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
}

// Custom Next Arrow
function NextArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "white",
        "&:hover": { backgroundColor: "grey.200" },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

export default function ImageSlider({images}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <Box
      sx={{ width: "100%", maxWidth: 800, mx: "auto", position: "relative" }}
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`slide-${index}`}
            sx={{
              width: "100%",
              height: { xs: 200, sm: 400 },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        ))}
      </Slider>
    </Box>
  );
}
