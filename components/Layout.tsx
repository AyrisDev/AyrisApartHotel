import Navbar from "./Navbar/navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
