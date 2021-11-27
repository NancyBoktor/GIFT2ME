import react from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Home.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShareIcon from '@mui/icons-material/Share';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import EventIcon from '@mui/icons-material/Event';

const theme = createTheme({
  palette: {
    pink: {
      main: '#D11071;',
    },
  },
});

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="top">

        <div id="top-children">
          <img className="hp-image" alt="bar" src="https://images.pexels.com/photos/5469758/pexels-photo-5469758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
         {/* WOMEN https://images.pexels.com/photos/5469719/pexels-photo-5469719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 */}
        {/* WHITE WOOD https://images.pexels.com/photos/3422495/pexels-photo-3422495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 */}
        {/* GREEN PRESENT https://images.pexels.com/photos/3307696/pexels-photo-3307696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 */}
        {/* BROWN WOOD RED/CREME https://images.pexels.com/photos/1303082/pexels-photo-1303082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 */}
        
        
        <div class="top-children phrase">Gifting made easy
        </div>
        <div id="regg">
          <ThemeProvider theme={theme}>
            <Link to="/register" className="reg-btn" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                href="#contained-buttons"
                color="pink"
                size="large"
              >
                Register Now
              </Button>
            </Link>
          </ThemeProvider>
        </div>

      </div>

      <div className="icons">
        <div id="circle">
          <div id="icon-children"><HowToRegIcon id="icon-children" fontSize="large" /></div>
        </div>
        <div id="circle">
          <div id="icon-children"><EventIcon id="icon-children" fontSize="large" /></div>
        </div>
        <div id="circle">
          <div id="icon-children"><CardGiftcardIcon id="icon-children" fontSize="large" /></div>
        </div>
        <div id="circle">
          <div id="icon-children"><ShareIcon id="icon-children" fontSize="large" /></div>
        </div>
      </div>

      <div className="caption">
        <p id="words">Register</p> <span id="arrow">➠</span>
        <p id="words">Create Events</p> <span id="arrow">➠</span>
        <p id="words">Make Wishlist</p> <span id="arrow">➠</span>
        <p id="words">Share</p>
      </div>

      <img src="collage.png" />


      <Footer />
    </>
  );
};

export default Home;
