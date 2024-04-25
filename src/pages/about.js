import Contact from "@/components/contact";
import Container from "@/components/container";
import Hero from "@/components/hero";
import PostBody from "@/components/post-body";
import Image from "next/image";
import eyecatch from "images/about.jpg";
import TwoColumn from "@/components/twoColumn";
import TwoColumnMain from "@/components/twoColumnMain";
import TwoColumnSideber from "@/components/twoColumnSideber";

export default function About() {
  return (
    <>
      <Container>
        <Hero title="About" subtitle="ギャラリーカフェ" />

        <figure>
          <Image
            src={eyecatch}
            alt=""
            layout="responsive"
            sixe="(min-widtth: 1152px) 1152px, 100vw"
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <p>
                歌の森公園前にある立山が見えるカフェです☕自家製野菜でお昼ご飯🍚ケーキはすべて手作り🍰
              </p>
              <h2>営業時間</h2>
              <p>モーニングは午前8時30分から午前10時までやってます!</p>
              <p>ランチは午前11時から午後1時30分までです</p>
              <p>お昼ご飯は無くなり次第終了させていただきます。</p>
              <p>
                午後1時30分から午後3時までは喫茶のみとさせていただきますのでご了承ください。お店は午後3時で閉店となります。
              </p>

              <h2>モーニング</h2>
              <p>トースト（シナモンor抹茶orMix） : 650円</p>
              <p>ホットサンド : 750円</p>
              <p>
                上記の2つからお選びいただき、下記の飲み物をお選びいただけます。
              </p>
              <p>コーヒー（Hot/Ice）</p>
              <p>紅茶（Hot/Ice）</p>
              <p>リンゴジュース</p>
              <p>オレンジジュース</p>
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSideber>
            <Contact />
          </TwoColumnSideber>
        </TwoColumn>
      </Container>
    </>
  );
}
