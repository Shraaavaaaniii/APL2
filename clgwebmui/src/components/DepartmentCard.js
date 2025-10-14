import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
} from "@mui/material";

const departments = [
  {
    name: "First Year Engineering",
    details:
      "First Year Engineering Department is for taking care of the first-year students. Department contributes to laid a foundation of Engineering and make students ready to peruse their career in engineering.",
  },
  {
    name: "Chemical Engineering",
    details:
      "Industry Based Curriculum. 100 % Placement Record.Strong Industry Institute Interaction. Research and Industry Problem Based Projects for the Students & Faculty. Strong Alumni Network. Special Training on Advanced Industrial Software’s. Various Clubs for Preparation of GATE Examination & Higher Education.",
  },
  {
    name: "Computer Science & Engineering",
    details:
      "The department of Computer Science & Engineering is the first department amongst all established institutes in the Western Maharashtra. The program emphasizes on industry based cutting edge technologies including various CSE tracks like Software Engineering, Database Engineering, Networking, AI & ML, Data Science, Blockchain Technology, etc.",
  },
  {
    name: "Mechanical Engineering",
    details:
      "Conductive environment between faculty members and students. Student forumsto cover a wide range of subjects, including coursework, extracurricular activities, career advice, Research work which provides valuable resources for student interaction and learning outside the classroom.",
  },
  {
    name: "School Of Architecture",
    details: "",
  },
  {
    name: "Civil Engineering",
    details: "Covers construction, design, and infrastructure projects.",
  },
  {
    name: "Electronics & Telecommunication Engineering",
    details: "Covers circuits, communication, and signal processing.",
  },
  {
    name: "Computer Science and Engineering (Data Science)",
    details: "Specialization in data analysis and big data.",
  },
  {
    name: "Computer Science and Engineering (AI & ML)",
    details: "Focus on Artificial Intelligence and Machine Learning.",
  },
  {
    name: "M.Tech Computer Science & Engineering",
    details: "Postgraduate program in advanced CS topics.",
  },
  {
    name: "M.Tech Electronics & Telecommunication Engineering",
    details: "Postgraduate specialization in Electronics.",
  },
  {
    name: "Ph.D. in Electronics & Telecommunication Engineering",
    details: "Research-focused program in E&TC.",
  },
  {
    name: "Ph.D. in Computer Science & Engineering",
    details: "Doctoral research in Computer Science.",
  },
];

export default function DepartmentCards() {
  return (
    <>
      <Typography
        align="center"
        sx={{
          marginTop: 5,
          fontSize: 30,
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Our Departments
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{ padding: 3 }}
        alignItems="stretch" // ✅ makes children equal height
      >
        {departments.map((dept, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                height: "100%", // ✅ fills available height
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardActionArea sx={{ flexGrow: 1 }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {dept.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 6, // ✅ limit text preview
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {dept.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
