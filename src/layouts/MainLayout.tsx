import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative mx-auto mt-6 max-w-3xl px-6">
      <Header />
        <main className="flex-1 overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
