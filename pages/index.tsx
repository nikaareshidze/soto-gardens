import {
  ExploreInPicture,
  ExploreOurCollection,
  Header,
  MainImageCarrousel,
  OfferBanner,
  ShopPlantsBy,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soto Gardens</title>
        <meta name="description" content="Created by Aresha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <OfferBanner />
        <Header />
        <MainImageCarrousel />
        <ExploreOurCollection />
        <ExploreInPicture />
        <ShopPlantsBy />
      </div>
    </>
  );
}
