import Hero from "./Hero";
import Whatwedo from "./Whatwedo";
import Services from "./Services";

function Home() {
  return (
    <main className="flex-grow">
      <Hero></Hero>
      <Whatwedo></Whatwedo>
      <Services></Services>
    </main>
  );
}

export default Home;
