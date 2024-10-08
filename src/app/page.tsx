import Image from "next/image";
import { Jua, Jomhuria } from 'next/font/google';

// For Jua font
const jua = Jua({
  subsets: ["latin"],
  weight: ["400"] // Jua only has a weight of 400
});

// For Jomhuria font
const jomhuria = Jomhuria({
  subsets: ["latin"],
  weight: ["400"] // Jomhuria only has a weight of 400
});

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className='max-w-screen-xl mx-auto p-4'>

        {/* Banner Section */}
        <div className="banner flex flex-col md:flex-row items-center justify-between flex-wrap">
          <div className="banner-text w-full md:w-2/4 px-4 md:px-0 text-center md:text-left">
            <h1 className="font-bold text-xl md:text-2xl mb-4 md:mb-6 active-color">Your Gateway to the World&apos;s Best Coffee Experience.</h1>
            <p className="font-normal text-sm md:text-base mb-4 md:mb-6 green-text-color">
              Kenya&apos;s finest coffee is celebrated for its bold flavors, bright acidity, and complex aromas. We bring this legendary coffee right to your doorstep, allowing you to savor the true essence of Kenya with every sip.
            </p>
            <h3 className="font-medium text-sm md:text-base mt-6 md:mt-8 mb-4 md:mb-5 text-black">Start Your Coffee Journey Today</h3>
            <form action="get" className="flex flex-col md:flex-row items-center justify-center md:justify-start">
              <input type="text" placeholder="Your Email" className="w-full md:w-60 h-12 px-4 md:px-6 mb-3 md:mb-0 rounded-3xl outline-none" />
              <button className='mx-0 md:mx-4 active-back-color w-[197px] h-[48px] rounded-3xl text-white text-base font-medium'>Join Waitlist</button>
            </form>
          </div>
          <div className="banner-image w-full md:w-2/4 relative h-[400px] md:h-[800px] mt-8 md:mt-0">
            <Image
              className="my-12 md:my-24 relative z-10 mx-auto"
              src="/banner-coffee-bag.png"
              alt="Kenyan Coffee"
              width={350}
              height={450}
            />
            <Image
              className="absolute top-1/2 left-0 transform -translate-y-1/2 z-0"
              src="/banner-coffee-back.png"
              alt="Kenyan Coffee"
              width={700}
              height={700}
            />
          </div>
        </div>

        {/* Banner Section */}

        {/* Why Section */}
        <div className="flex items-center justify-between flex-wrap">
          <div className="why-image w-full md:w-2/4 relative overflow-visible h-[400px] md:h-[800px] order-2 md:order-1">
            <Image
              className="my-12 md:my-24 absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
              src="/Coffee_Craft_Pouch_Mockup.png"
              alt="Kenyan Coffee"
              width={450}
              height={600}
            />
            <Image
              className="absolute top-1/2 -right-9 transform -translate-y-1/2 z-0"
              src="/banner-coffee-back.png"
              alt="Kenyan Coffee"
              width={1000}
              height={1000}
            />
          </div>
          <div className="why-text w-full md:w-2/4 px-4 md:px-0 order-1 md:order-2">
            <h1 className="font-bold text-xl md:text-2xl mb-4 md:mb-6 active-color text-center md:text-left">Why Kenyan Coffee Stands Out</h1>
            <div className="bg-[#A17069] pouch-color-text pt-8 px-4 pb-4 rounded-lg max-w-full md:max-w-xl mx-auto">
              <p className="mb-4">Kenyan coffee is known for its vibrant acidity, full body, and rich, fruity-to-floral flavors with berry, citrus, and wine-like notes. Its unique characteristics stem from:</p>
              <ul className="list-disc space-y-4 pl-5">
                <li>
                  <strong>Optimal Growing Conditions:</strong> Grown in the fertile highlands, between 1,400 to 2,000 meters above sea level, Kenyan coffee plants thrive in the rich, volcanic soil and cool climate.
                </li>
                <li>
                  <strong>Traditional farming practices:</strong> Smallholder farmers, who have passed down coffee-growing expertise through generations, hand-pick each coffee cherry to ensure top-quality beans.
                </li>
                <li>
                  <strong>Rigorous Quality Control:</strong> The Coffee Board of Kenya oversees strict grading and quality control measures, ensuring that only the finest coffee beans are exported.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Why Section */}

        {/* Story Section */}
        <div className="story my-12">
          <h1 className="text-2xl font-bold text-[#3F231F]">The Story Behind Each Cup</h1>
          <p className="text-2xl my-4 font-medium text-[#3F231F]">Behind every bag of our coffee is a story worth telling. From the dedicated farmers who tend to the coffee plants to the expert roasters who bring out the best in every bean, we believe in transparency and sharing the journey of our coffee. </p>
          <p className="text-2xl my-4 font-medium text-[#3F231F]">Through our blog, you can:</p>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1  */}
            <div className="bg-[#A17069] p-4 rounded-lg text-white">
              <img src="/tatiana-fernandez.png" alt="Meet the Farmers" className="rounded-t-lg mb-4 w-full" />
              <h3 className="font-bold text-2xl mb-2 card-text-color">Meet the Farmers</h3>
              <p className="text-2xl font-bold text-[#B5A4A2]">Learn about the people and communities who grow your coffee.</p>
            </div>

            {/* Card 2  */}
            <div className="bg-[#A17069] p-4 rounded-lg text-white">
              <img src="/janko-ferlic.png" alt="Coffee Culture" className="rounded-t-lg mb-4 w-full" />
              <h3 className="font-bold text-2xl mb-2 card-text-color">Coffee Culture</h3>
              <p className="text-2xl font-bold text-[#B5A4A2]">Explore the rich culture of coffee and how it influences our offerings.</p>
            </div>

            {/* Card 3  */}
            <div className="bg-[#A17069] p-4 rounded-lg text-white">
              <img src="/sergey-kotenev.png" alt="Roasting Techniques" className="rounded-t-lg mb-4 w-full" />
              <h3 className="font-bold text-2xl mb-2 card-text-color">Roasting Techniques</h3>
              <p className="text-2xl font-bold text-[#B5A4A2]">Understand the art and science behind coffee roasting.</p>
            </div>
          </div>
        </div>
        {/* Story Section */}

        {/* Process Section */}
        <div className="process my-16">
          <h1 className={`text-center text-9xl text-[#512615] mt-8 mb-9 font-black ${jomhuria.className}`}>PROCESS</h1>
          <div className="flex items-start justify-start flex-wrap py-5 md:py-2">
            <Image
              className=""
              src="/coffee-seeds.png"
              alt="Kenyan Coffee"
              width={500}
              height={500}
            />
            <p className={`font-medium text-5xl text-[#512615] text-center leading-10 mt-14 ${jua.className}`}>Beans are the <br /> seeds of the coffee <br /> cherry</p>
          </div>

          <div className="flex items-center justify-center relative py-5 md:py-2">
            <div className="flex items-center relative justify-start flex-wrap">
              <Image
                style={{ transform: 'rotate(25deg)' }}
                className=" md:rotate-0 -mt-20 "
                src="/Free-Dotted-Curved-Arrow-Vector-1.png"
                alt="Kenyan Coffee"
                width={632}
                height={571}
              />
              <p className={`md:absolute md:top-16 md:-right-10 font-medium text-5xl text-[#512615] text-center leading-10 ${jua.className}`}>They are cleaned, <br /> triaged and <br /> processed.</p>
            </div>
          </div>

          <div className="md:hidden py-5 md:py-2">
            <div className="flex items-center relative justify-start">
              <Image
                style={{ transform: 'rotate(25deg)' }}
                className=" md:rotate-0 -mt-20"
                src="/Free-Dotted-Curved-Arrow-Vector-1.png"
                alt="Kenyan Coffee"
                width={632}
                height={571}
              />
            </div>
          </div>

          <div className="flex items-center justify-end  flex-wrap py-5 md:py-2">
            <p className={`font-medium text-5xl text-[#512615] text-center leading-10 ${jua.className}`}>They go through <br /> a roasting <br /> process.</p>
            <Image
              className=""
              src="/roasting.png"
              alt="Kenyan Coffee"
              width={500}
              height={500}
            />
          </div>

          <div className="flex items-center justify-center py-5 md:py-2">
            <Image
              style={{ transform: 'rotate(-25deg)' }}
              className="md:rotate-0"
              src="/Free-Dotted-Curved-Arrow-Vector-2.png"
              alt="Kenyan Coffee"
              width={632}
              height={571}
            />
          </div>

          <div className="py-5 md:py-2">
            <p className={`font-medium text-5xl text-[#512615] text-left leading-10 ${jua.className}`}>Beans are Ground</p>
            <br />
            <div>
              <Image
                className=" md:rotate-0 "
                src="/beans-ground.png"
                alt="Kenyan Coffee"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="py-5 md:py-2">
            <div className="flex items-center justify-center">
              <Image
                style={{ transform: 'rotate(25deg)' }}
                className=" md:rotate-0 "
                src="/Free-Dotted-Curved-Arrow-Vector-3.png"
                alt="Kenyan Coffee"
                width={632}
                height={571}
              />
            </div>
          </div>

          <div className="flex items-center justify-end flex-wrap py-5 md:py-2">
            <p className={`font-medium text-5xl text-[#512615] text-center leading-10 ${jua.className}`}>Freshly roasted <br /> beans make the <br /> best cup of coffee.</p>
            <Image
              className=""
              src="/coffee-cup.png"
              alt="Kenyan Coffee"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* Process Section */}

        {/* Talk To Us Section */}
        <div className="talk-to-us my-10 flex justify-start items-center flex-wrap">
          <h1 className="font-bold text-6xl active-color max-w-[451px]">DONT BE SHY TALK TO US</h1>
          <div className="text-btn px-0 md:px-10">
            <p className="text-black font-medium text-2xl">Say Hello.</p>
            <button className="my-4 active-back-color w-[131px] h-[48px] rounded-3xl text-white text-base font-medium">Contact Us</button>
          </div>
        </div>
        {/* Talk To Us Section */}
      </div>
    </main>
  );
}