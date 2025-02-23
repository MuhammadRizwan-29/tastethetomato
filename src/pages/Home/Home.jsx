import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

export default function Home() {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </>
  );
}
