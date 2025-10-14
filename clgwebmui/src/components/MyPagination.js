import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

export default function PagePagination() {
  const navigate = useNavigate();
  const location = useLocation();

  // All page routes
  const pages = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "Admissions", path: "/admissions" },
    { label: "Departments", path: "/departments" },
    { label: "Placement", path: "/placement" },
    { label: "Contact", path: "/contact" },
  ];

  // find current page index
  const currentIndex = pages.findIndex((p) => p.path === location.pathname);
  const currentPage = currentIndex === -1 ? 1 : currentIndex + 1;

  const handleChange = (event, value) => {
    navigate(pages[value - 1].path); // go to page by index
  };

  return (
    <Pagination
      count={pages.length}
      page={currentPage}
      onChange={handleChange}
      color="primary"
      sx={{ display: "flex", justifyContent: "center", mt: 3 }}
    />
  );
}
