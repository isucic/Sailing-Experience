import "./globals.css";
import DestinationRoutes from "./components/DestinationRoutes/DestinationRoutes";
import Reviews from "./components/Reviews/Reviews";
import Welcome from "./components/Welcome/Welcome";
import Video from "./components/HeroVideo/Video";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
import Payment from "./components/Payment/Payment";
import ImageStack from "./components/ImageStack/ImageStack";

export default function Page() {
  return (
    <div>
      <Video />
      <Welcome />
      <DestinationRoutes />
      <Reviews />
      <PhotoGrid />
      <Payment />
      <ImageStack />
    </div>
  );
}
