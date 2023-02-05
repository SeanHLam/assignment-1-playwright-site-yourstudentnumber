import Head from "next/head";
import TitleText from "../components/title";
import NavBar from "../components/navBar";
import ArrowMenu from "../components/arrow";
import ContactForm from "../components/form";

export default function Contact() {
  return (
    <div className="contactCont">
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Contact Us Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar></NavBar>
      <main className="contactMain">
        <TitleText text="Contact Us"></TitleText>
        <div>
          <p className="aboutParagraph">Want to discuss? Lets Chat!</p>
        </div>
        <ContactForm></ContactForm>
      </main>

      <ArrowMenu linkUp="/about"></ArrowMenu>
    </div>
  );
}
