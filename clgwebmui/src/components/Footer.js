import {Box, Container, Typography, Link} from '@mui/material';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "black",
          
        }}
      >
        <Container maxWidth="lg" sx={{ color: "white" }}>
          <Typography variant="body1" align="center">
            <h3>
              D. Y. Patil College Of Engineering And Technology, Kasaba Bawada
            </h3>
          </Typography>
          <Typography variant="body2" align='center'>
            Email: info.dypcet@dypgroup.edu.in
            <br /> Tel: 0231-2601431/32/33
            <br />
            Send your resumes for Jobs:career.dypcet@dypgroup.edu.in
            <br />
            For student document verification apply through e-office<br/>
          </Typography>
          <Container align="center">
            <Link
              href="https://www.facebook.com/dypcetkolhapur"
              sx={{ margin: 2 }}
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dypatilkolhapur/"
              sx={{ margin: 2 }}
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.instagram.com/dypcet_official/?igshid=1mqhatnrhicbb"
              sx={{ margin: 2 }}
            >
              <FaInstagram />
            </Link>
            <Link
              href="http://www.youtube.com/@dypcetofficial"
              sx={{ margin: 2 }}
            >
              <FaYoutube />
            </Link>
          </Container>
          <Typography align="center"><br/>
            Approved by AICTE, DTE -Govt. of Maharashtra & Affiliated to Shivaji University<br/> © 2025 DYP Group.
          </Typography>
        </Container>
      </Box>
    );
}