import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const PublicLayout = () => {
  //Outlet es como un children, para renderizar cada Route que envuelva PublicLayout
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
