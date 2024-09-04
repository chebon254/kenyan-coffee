import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className='max-w-screen-xl mx-auto p-4'>

        {/* Banner Section */}
        <div className="banner flex items-center justify-between flex-wrap ">
          <div className="banner-text w-2/4">
            <h1 className="font-bold text-2xl mb-6 active-color">Your Gateway to the World&apos;s Best Coffee Experience.</h1>
            <p className="font-normal text-base mb-6 green-text-color">Kenya&apos;s finest coffee is celebrated for its bold flavors, bright acidity, and complex aromas. We bring this legendary coffee right to your doorstep, allowing you to savor the true essence of Kenya with every sip.</p>
            <h3 className="font-medium text-base mt-8 mb-5 text-black">Start Your Coffee Journey Today</h3>
            <form action="get">
              <input type="text" placeholder='Your Email' className='w-60 h-12 px-6 mb-3 rounded-3xl outline-none' />
              <button className='mx-4 active-back-color w-[197px] h-[48px] rounded-3xl text-white text-base font-medium'>Join Waitlist</button>
            </form>
          </div>
          <div className="banner-image w-2/4 relative h-[800px]">
            <Image
              className="my-24 relative z-10"
              src="/banner-coffee-bag.png"
              alt="Kenyan Coffee"
              width={450}
              height={650}
            />
            <Image
              className="absolute top-1/2 left-0 transform -translate-y-1/2 z-0"
              src="/banner-coffee-back.png"
              alt="Kenyan Coffee"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        {/* Banner Section */}

        {/* Why Section */}
        <div className="flex items-center justify-between flex-wrap">
          <div className="why-image w-2/4 relative overflow-visible h-[800px]">
            <Image
              className="my-24 absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
              src="/Coffee_Craft_Pouch_Mockup.png"
              alt="Kenyan Coffee"
              width={550}
              height={750}
            />
            <Image
              className="absolute top-1/2 -right-9 transform -translate-y-1/2 z-0"
              src="/banner-coffee-back.png"
              alt="Kenyan Coffee"
              width={1200}
              height={1200}
            />
          </div>
          <div className="why-text w-2/4">
            <h1 className="font-bold text-2xl mb-6 active-color text-center">Why Kenyan Coffee Stands Out</h1>
            <div className="bg-[#A17069] pouch-color-text pt-8 px-4 pb-4 rounded-lg max-w-xl mx-auto">
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
              <img src="/tatiana-fernandez.png" alt="Meet the Farmers" className="rounded-t-lg mb-4 w-full"/>
                <h3 className="font-bold text-2xl mb-2 card-text-color">Meet the Farmers</h3>
                <p className="text-2xl font-bold text-[#B5A4A2]">Learn about the people and communities who grow your coffee.</p>
            </div>

            {/* Card 2  */}
            <div className="bg-[#A17069] p-4 rounded-lg text-white">
              <img src="/janko-ferlic.png" alt="Coffee Culture" className="rounded-t-lg mb-4 w-full"/>
                <h3 className="font-bold text-2xl mb-2 card-text-color">Coffee Culture</h3>
                <p className="text-2xl font-bold text-[#B5A4A2]">Explore the rich culture of coffee and how it influences our offerings.</p>
            </div>

            {/* Card 3  */}
            <div className="bg-[#A17069] p-4 rounded-lg text-white">
              <img src="/sergey-kotenev.png" alt="Roasting Techniques" className="rounded-t-lg mb-4 w-full"/>
                <h3 className="font-bold text-2xl mb-2 card-text-color">Roasting Techniques</h3>
                <p className="text-2xl font-bold text-[#B5A4A2]">Understand the art and science behind coffee roasting.</p>
            </div>
          </div>
        </div>
        {/* Story Section */}

        {/* Process Section */}
        {/* Process Section */}

        {/* Talk To Us Section */}
        <div className="talk-to-us my-10 flex justify-start items-center">
          <h1 className="font-bold text-6xl active-color">DONT BE SHY <br /> TALK TO US</h1>
          <div className="text-btn px-10">
            <p className="text-black font-medium text-2xl">Say Hello.</p>
            <button className="my-4 active-back-color w-[131px] h-[48px] rounded-3xl text-white text-base font-medium">Contact Us</button>
          </div>
        </div>
        {/* Talk To Us Section */}
      </div>
    </main>
  );
}