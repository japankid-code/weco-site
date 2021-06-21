import Hero from "./Hero";
import Laser from "./Laser";
import Chemical from "./Chemical";

function Texturing() {
  return (
    <main className="flex-grow">
      <Hero></Hero>
      <Laser></Laser>
      <Chemical></Chemical>
    </main>
  );
}

export default Texturing;
