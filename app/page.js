import Cards from "@/components/cards";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Services from "@/components/service";
import Slider from "@/components/slider";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Slider />
      <Cards />
      <Services />
      <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
      <div className="elfsight-app-dc004f29-df5a-4c84-b125-d38be86d22a1" data-elfsight-app-lazy></div> 
    </>
  );
}
