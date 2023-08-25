import { Header, Footer, Modal } from '../../components'

function Home() {
  return (
    <>
      <Header />
      <main className="bg-white w-full h-full ">
        <div>
          <video
            className={`w-screen h-[calc(100vh-56px)] object-cover`}
            controls={false}
            autoPlay
            muted
            loop
          >
            <source
              src={'https://a.storyblok.com/f/144950/x/e9ede998bc/fb_loop.mp4'}
              type="video/mp4"
            />
          </video>
          <div className="absolute left-0 bottom-[92px] text-white font-bold select-none">
            <h1>
              <p className="font-bold text-[156px] ml-[32px] leading-[140px] tracking-widest">
                A Global
                <br />
                Creative
                <br />
                Collective
              </p>
            </h1>
          </div>
        </div>

        <section className="px-[32px]">
          <div className="flex justify-end pt-[32px] font-light text-[21px]">
            <div className="w-2/5"></div>
            <div className="w-1/5">
              <span className="block tracking-widet">About us</span>
            </div>
            <div className="w-2/5 leading-snug">
              <p className="">
                We believe in the power of ideas that get remembered, <br />
                build fame and shift culture. Our radically collaborative <br />
                way of working unlocks creative excellence and builds <br />
                unusually human brands. Today, we are 380 people in 6 <br />
                countries, on 3 continents, with 100+ Cannes Lions <br />
                between us.
              </p>
            </div>
          </div>

          <h2 className="text-[112px] leading-none tracking-wide">News</h2>
          <div className="flex justify-between font-light mt-4">
            <div className="w-[555px]">
              <video controls={false} autoPlay muted loop>
                <source
                  src={
                    'https://a.storyblok.com/f/144950/x/1d7df1c7ce/ssab_loop_1280x720_comp.mp4'
                  }
                  type="video/mp4"
                />
              </video>
              <div className="flex justify-between text-[19px] mt-2">
                <span className="tracking-wider">SSAB</span>
                <span className="tracking-wider">
                  Sweden’s biggest steel company <br />
                  challenges the industry by turning <br />
                  CO₂ into H₂O.
                </span>
              </div>
            </div>

            <div className="w-[789px]">
              <img
                src="https://a.storyblok.com/f/144950/3356x1886/2bee6501f2/vasttrafik_hero_thumb2.png/m/1600x0/filters:quality(75)/"
                alt="vasttrafik hero"
                className="h-[444px] object-cover"
              />
              <div className="flex justify-between text-[19px] mt-2">
                <span className="tracking-wider">
                  Västtrafik Public <br /> Transport
                </span>
                <span className="tracking-wider mr-14">
                  Sometimes, all you need to get your point across is to
                  <br /> stack 36 cars on top of each other.
                </span>
              </div>
            </div>
          </div>

          <div className="flex mt-[128px] justify-between font-light">
            <div className="w-[789px]">
              <img
                src="https://a.storyblok.com/f/144950/2560x1440/8d63463bb8/seagrams_header.png/m/1600x0/filters:quality(75)/"
                alt="seagrams"
              />
              <div className="flex justify-between text-[19px] mt-2 tracking-wider">
                <span>Seagram’s 7</span>
                <span className="mr-14">
                  Celebrating the regulars together with comedian Iliza <br />
                  Schlesinger.
                </span>
              </div>
            </div>

            <div className="w-[437px]">
              <img
                src="https://a.storyblok.com/f/144950/1920x1080/5bb27c53a9/mandarin_tumnagel_04.png/m/1600x0/filters:quality(75)/"
                alt="mandarin tumnagel"
                className="h-[328px] object-cover"
              />
              <div className="text-[19px] mt-2 tracking-wider">
                <span>Great News!</span>
                <br />
                <span>
                  We’re Mandarin Oriental’s new lead creative <br /> and brand
                  agency.
                </span>
              </div>
            </div>
          </div>

          <div className="flex mt-[128px] font-light justify-between">
            <div className="w-[555px]">
              <video
                controls={false}
                autoPlay
                muted
                loop
                className="w-full h-[416px] object-cover"
              >
                <source
                  src={
                    'https://a.storyblok.com/f/144950/x/82e31838b4/luger_shuffle_skrap_comp.mp4'
                  }
                  type="video/mp4"
                />
              </video>
              <div className="flex justify-between text-[19px] mt-2 tracking-wider">
                <span>Live Nation & Luger</span>
                <span className="mr-8">
                  Live entertainment companies <br /> celebrate the live music
                  <br />
                  experience by introducing: The <br /> Shuffle Ticket!
                </span>
              </div>
            </div>

            <div className="w-[789px]">
              <img
                src="https://a.storyblok.com/f/144950/2400x1600/9fb20230cd/news_fame_01-b.jpg/m/1600x0/filters:quality(75)/"
                alt="vasttrafik hero"
              />
              <div className="flex justify-between text-[19px] mt-2 tracking-wider">
                <span className="w-1/3">Business</span>
                <span className="w-2/3">
                  Learn all about Fame – our new offer to amplify
                  <br /> engagement and reach of great ideas!
                </span>
              </div>
            </div>
          </div>

          <div className="flex mt-[128px] justify-between font-light text-[19px]">
            <div>
              <img
                src="https://a.storyblok.com/f/144950/2000x1119/535802d6cf/gojek.jpg/m/1600x0/filters:quality(75)/"
                alt="gojek"
                width={555}
              />
              <div className="flex justify-between mt-2 tracking-wider">
                <span>Gojek</span>
                <span className="mr-4">
                  In Singapore’s highly competitive <br /> ride-hailing market,
                  how does a <br />
                  brand from Indonesia stand out? <br /> Watch our latest
                  campaign for <br /> Gojek.
                </span>
              </div>
            </div>

            <div className="text-[19px]">
              <video controls={false} autoPlay muted width={672} loop>
                <source
                  src={
                    'https://a.storyblok.com/f/144950/x/2f1e5ffd07/craft_listimage_shoe_stopmotion_4x5.mp4'
                  }
                  type="video/mp4"
                />
              </video>
              <div className="flex justify-between mt-2 tracking-wider">
                <span>Craft</span>
                <span>
                  Running footwear and apparel company Craft <br /> launches a
                  240-page long book containing <br /> only two phrases. Can you
                  guess which ones?
                </span>
              </div>
            </div>
          </div>

          <div className="flex mt-[128px] justify-between font-light text-[19px]">
            <div className="w-[789px]">
              <img
                src="https://a.storyblok.com/f/144950/9477x4726/06ae3fa0cb/volvo-trucks_a-love-story_hero-image_clouds.jpg/m/1600x0/filters:quality(75)/"
                alt="Volvo trucks a love story"
                className="h-[444px] object-cover"
              />
              <div className="flex justify-between mt-2 mr-14 tracking-wider">
                <span>Volvo Trucks</span>
                <span>
                  A seemingly impossible love story unfolds in this new <br />
                  campaign for Volvo Trucks.
                </span>
              </div>
            </div>

            <div className="w-[555px] text-[19px]">
              <img
                src="https://a.storyblok.com/f/144950/5120x2880/2f3bebed8a/electrolux-hero_001.jpg/m/1600x0/filters:quality(75)/"
                alt="electrolux hero"
              />
              <div className="flex justify-between text-[19px] mt-2 tracking-wider">
                <span className="w-2/5">Electrolux</span>
                <span className="w-3/5">Let’s break the pattern.</span>
              </div>
            </div>
          </div>
        </section>

        <h2 className="text-[112px] mt-[128px] ml-8 mb-4 leading-none tracking-wide">
          Case studies
        </h2>
        <div className="max-w-screen">
          <div className="relative">
            <img
              src="https://a.storyblok.com/f/144950/2120x934/74bb6d35c5/polestar-no-compromises1.jpg/m/1600x0/filters:quality(75)/"
              alt="Polestar no compromises"
              className="w-full h-auto"
            />
            <div className="absolute top-0 right-0 select-none text-[19px] text-white pt-4 pr-14 tracking-wide">
              <h1>
                <p className="font-light">
                  How we introduced an unknown <br /> electric car brand by
                  listing <br />
                  everything it’s not.
                </p>
              </h1>
            </div>
            <div className="absolute left-0 bottom-0 select-none text-[172px] text-white">
              <h1>
                <p className="font-semibold ml-[32px] mb-[32px] leading-[140px] tracking-widest">
                  This is
                  <br />
                  Polestar
                </p>
              </h1>
            </div>
          </div>
        </div>

        <section className="px-[32px]">
          {/* SECTION 9 */}
          <div className="flex mt-[128px] justify-between font-light">
            <div className="w-[789px]">
              <img
                src="https://a.storyblok.com/f/144950/6000x2250/2a309ddc96/visit-sweden-welcome1.jpg/m/1600x0/filters:quality(75)/"
                alt="seagrams"
                className="h-[526px] object-cover"
              />
              <div className="flex justify-between text-[19px] mt-2 mr-14 tracking-wider">
                <span>Visit Sweden</span>
                <span>That time we used a toilet brush to promote Sweden.</span>
              </div>
            </div>

            <div className="w-[320px]">
              <img
                src="https://a.storyblok.com/f/144950/3000x1242/d3a4457669/boxes2.jpeg/m/1600x0/filters:quality(75)/"
                alt="electrolux hero"
                className="h-[427px] object-cover"
              />
              <div className="text-[19px] mt-2 tracking-wider">
                <span>
                  Uber
                  <br />
                  How we put more people in fewer cars.
                </span>
              </div>
            </div>
          </div>

          <div className="flex mt-[128px] justify-between font-light">
            <div className="w-[437px]">
              <img
                src="https://a.storyblok.com/f/144950/1920x816/760d9dad26/the-chase-stills-0-00-06-03.jpg/m/1600x0/filters:quality(75)/"
                alt="the chase stills"
                className="h-[437px] object-cover"
              />
              <div className="text-[19px] mt-2 tracking-wider">
                <span>
                  Head & Shoulders
                  <br />
                  How we broke every category convention to <br /> get Japanese
                  men talking about dandruff.
                </span>
              </div>
            </div>

            <div className="w-[789px]">
              <img
                src="https://a.storyblok.com/f/144950/1060x707/9f238df0be/oatly-rebranding09.jpg/m/1600x0/filters:quality(75)/"
                alt="otlay rebranding"
                className="h-[592px] object-cover"
              />
              <div className="flex justify-start mt-2 text-[19px] tracking-wide">
                <div className="w-1/3">
                  <p>Oatly</p>
                </div>
                <div className="w-2/3">
                  <span>Changing how people think of milk.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-[128px] justify-between font-light">
            <div className="w-[437px]">
              <img
                src="https://a.storyblok.com/f/144950/2400x1202/9d13a14fe8/kami-list-image.jpg/m/1600x0/filters:quality(75)/"
                alt="the chase stills"
                className="h-[437px] object-cover"
              />
              <div className="text-[19px] mt-2 tracking-wider">
                <span>
                  Down Syndrome International
                  <br />
                  Meet KAMI, the world’s first virtual influencer with Down
                  Syndrome.
                </span>
              </div>
            </div>

            <div className="w-[672px]">
              <img
                src="https://a.storyblok.com/f/144950/1920x1080/a1676a3665/volvo-trucks-epic-split.jpg/m/1600x0/filters:quality(75)/"
                alt="the chase stills"
                className="h-[672px] object-cover"
              />
              <div className="flex justify-between text-[19px] mt-2 mr-14 tracking-wider">
                <span>Volvo Trucks</span>
                <span>Changing the face of global B2B marketing.</span>
              </div>
            </div>
          </div>
        </section>
        <Modal />
      </main>
      <Footer />
    </>
  )
}

export default Home
