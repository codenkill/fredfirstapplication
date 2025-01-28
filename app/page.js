"use client"; // This must be the very first line in the file

import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name ="Fred";

  return (
  <main>
    {/* HEADER */}
    <section className="bg-base-200">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
        <div className="font-bold">FredApp</div>
        <div className="space-x-4 max-md:hidden">
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">FAQ</a>
        </div>
        <div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
        </div>
      </div>
      </section>
    {/* HERO */}  
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Collect customer feedback to build better products
      </h1>
      <div className="opacity-90 mb-10">
        Create a feedback board in minutes, prioritize features, and build products your customers will love.
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>

    {/* PRICING */}
    <section className="bg-base-200 py-32">
      <div className="px-8 py-32 max-w-3xl mx-auto"></div>
        <p className="text-sm uppercase font-medium text-center text-primary mb-4">
          Pricing
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          A pricing that adapts to your needs
        </h2>

        <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto">
          <div className="flex gap-2 items-baseline">
           <div className="text 4-l font-black">$19</div> 
           <div className="uppercase text-sm font-medium opacity-60">/month</div>
          

        <ul>
          <li>Collect Customer Feedback</li>
          <li>Unlimited Boards</li>
          <li>Admin Fashboard</li>
          <li>24/7 Support</li>
        </ul>

        </div>
        </div>
    </section>
    </main>
  );
}
