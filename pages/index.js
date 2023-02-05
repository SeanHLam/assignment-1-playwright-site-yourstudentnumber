import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AppButton from "../components/button";
import ArrowMenu from "../components/arrow";
import MenuPopup from "../components/menuPopup";
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <div class="homeCont">
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar></NavBar>
      <main className="homeMain">
        <div class="homeContent">
          <h1>An investment in knowledge pays the best interest.</h1>
          <hr className="divider"></hr>
          <p>
            Different than a college or university, the British Columbia
            Institute of Technology offers practical, flexible, applied
            education with instructors who have direct, hands-on experience in
            their field.
          </p>
          <div className="homeButtonCont">
            <AppButton link="/about" text="More About Us"></AppButton>
            <AppButton link="/contact" text="Contact Us"></AppButton>
          </div>

          <ArrowMenu linkDown="/about"></ArrowMenu>
        </div>
      </main>
    </div>
  );
}
