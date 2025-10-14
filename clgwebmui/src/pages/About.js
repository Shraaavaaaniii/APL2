import {List, Typography, ListItem, ListItemText} from '@mui/material';
import ImageSlider from '../components/ImageSlider';
import img1 from "../images/Department-Library.png"
import img2 from "../images/Inauguration-of-Node.JS-Workshop.jpg"
import img3 from "../images/Faculty-Members-of-First-Year.jpg"
import img4 from "../images/Industry-Visit-to-Kasturi-Foundry.jpg"
import img5 from "../images/civil2-scaled.jpg";
import img6 from "../images/4-1-1-1.jpg";
export default function About(){
    const images = [img1, img2, img3, img4, img5, img6]
    return (
        <>
        <ImageSlider images={images}/>
      <Typography variant="p">
        D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur
        is a self-financing Autonomous Institute established in the year 1984
        under the visionary leadership of Padmashree Dr. D. Y. Patil, Former
        Governor of Tripura, Bihar and West Bengal. UGC, New Delhi and Shivaji
        University, Kolhapur has conferred Autonomous status to the Institute in
        2020. The Institution is approved by All India Council for Technical
        Education (AICTE), New Delhi, Government of Maharashtra and affiliated
        to Shivaji University, Kolhapur. The Institute is accredited by National
        Assessment and Accreditation Council (NAAC), Bangalore with ‘A’ grade
        (CGPA- 3.08). The Institute is offering quality technical education for
        the past 41 years. The Institute offers eight UG programmes and two PG
        programmes. Two departments of this Institution are recognized as
        research centres by Shivaji University, Kolhapur for promoting research
        culture in the Institute. Architecture department of the Institute is
        ranked amongst the top 13 Architecture Colleges in India by Outlook
        India and ranked 21st by India Today in 2021. Three UG programmes viz.,
        B. Tech (Computer Science and Engineering), B. Tech. (Electronics &
        Telecommunication Engineering) and B. Tech. (Mechanical Engineering) is
        re-accredited by National Board of Accreditation (NBA), New Delhi for a
        period of three years from 2022 to 2025.
        <Typography variant="h5" sx={{marginTop: 5, textDecoration: 'underline'}}>
          Salient features of our institute are :
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="✅ State of the art infrastructure" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ WI-FI enabled campus"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Laboratories equipped with equipment’s with latest technologies"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ 24 hours Internet connectivity"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Industry-backed NEP 2020 Curriculum"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ MoUs with reputed Industries and Academic Institutes"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Excellent Placement Record"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ 10000+ Worldwide Alumni network"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Annual Student Festivals and a vibrant Campus Life"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Bus facility available"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ All Govt. Scholarships available to students"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Professional Chapters and Clubs"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Finishing School Trainings"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Social Internships"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Dedicated Professional Internship track of 6 months"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Capstone projects"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Industry visits and industry expert interaction"></ListItemText>
          </ListItem>
        </List>
      </Typography>
        </>
    );
}