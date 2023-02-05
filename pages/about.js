import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AppButton from "../components/button";
import ArrowMenu from "../components/arrow";
import MenuPopup from "../components/menuPopup";
import NavBar from "../components/navBar";
import TitleText from "../components/title";
import Carousel from "../components/carousel";

export default function about() {
  return (
    <div className="aboutCont">
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar></NavBar>
      <main>
        <div className="aboutContent">
          <TitleText text="ABOUT US"></TitleText>

          <div className="aboutBodyCont">
            <div>
              <p className="aboutParagraph">
                We are proud to deliver an education that goes beyond textbooks
                and classrooms.
              </p>
            </div>

            <div>
              <p className="aboutParagraph">
                Our students gain the technical skills, real-world experience,
                and problem-solving ability needed to embrace complexity and
                lead innovation in a rapidly changing workforce.
              </p>
            </div>

            <div>
              <p className="aboutParagraph">
                Through close collaboration with industry, our network of alumni
                and partners continue to achieve global success.
              </p>
            </div>

            <div>
              <h2 className="aboutheaders">Information Sessions</h2>
            </div>

            <div>
              <p className="aboutParagraph">
                Information sessions are a simple way to figure out the next
                step along your career path.
              </p>
            </div>

            <div>
              <h3  className="aboutheaders">Big Info</h3>
            </div>

            <div>
              <p className="aboutParagraph">
                Big Info is the largest program expo and information session at
                BCIT. It's your chance to find out about all our programs - from
                business, computing, and health to engineering, trades, and
                applied sciences.
              </p>
            </div>

            <div>
              <p className="aboutParagraph">
                If you missed our fall event the next Big Info is scheduled to
                return on February 15, 2023.
              </p>
            </div>

            <div>
              <h2  className="aboutheaders">Campus Tours</h2>
            </div>

            <div>
              <p className="aboutParagraph">
                Tours run weekdays September to May, on our Burnaby campus. See
                BCIT in person and get a taste of campus life.
              </p>
            </div>
          </div>

          <Carousel></Carousel>

          <TitleText text="DEPARTMENTS"></TitleText>
          <ul className="aboutList">
            <li>Applied & Natural Sciences</li>
            <li>Business & Media</li>
            <li>Computing & IT</li>
            <li>Engineerin</li>
            <li>Health Sciences</li>
            <li>Trades & Apprenticeships</li>
          </ul>
        </div>

        <ArrowMenu linkUp="/" linkDown="/contact"></ArrowMenu>
      </main>
    </div>
  );
}
