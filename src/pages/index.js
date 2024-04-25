import Container from "@/components/container";
import Hero from "@/components/hero";

import HomeMenu from "@/components/homeMenu";

export default function Home() {
  return (
    <>
      <Container>
        <Hero
          title="Coffee"
          subtitle="カラダもココロも、喜びで満たす。"
          imageOn
        />
      </Container>
      <HomeMenu />
    </>
  );
}
