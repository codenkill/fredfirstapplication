import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "@/app/productDemo.jpeg";
import { auth } from "@/auth";
import logo from "./logo.svg";  // Using relative path instead of alias

export default async function Home() {
  const session = await auth();

  return (
  <main>
    {/* HEADER */}
    <section className="bg-base-200">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-8 py-2">
        <div className="font-bold flex items-center">
          <Image
            src={logo}
            alt="CalFuel Logo"
            width={128}
            height={40}
            priority
            className="w-auto h-8"
          />
        </div>
        <div className="space-x-4 max-md:hidden">
          <a className="link link-hover" href="#pricing">Pricing</a>
          <a className="link link-hover" href="#faq">FAQ</a>
        </div>
        <div>
          <ButtonLogin session={session} />
        </div>
      </div>
      </section>
    {/* HERO */}  
      <section className="px-8 text-center lg:text-left py-32 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center">
      <Image 
        src={productDemo} 
        alt="Product demo" 
        className="w-96 rounded-xl" 
      />

      <div>
      <h1 className="text-4xl font-bold mb-6">
        Collect customer feedback to build better products
      </h1>
      <div className="opacity-90 mb-10">
        Create a feedback board in minutes, prioritize features, and build products your customers will love.
      </div>
      <ButtonLogin session={session} />
      </div>
      </section>

    {/* PRICING */}
    <section className="bg-base-200" id="pricing">
      <div className="px-8 py-20 max-w-3xl mx-auto"></div>
        <p className="text-sm uppercase font-medium text-center text-green-400 mb-4">
          Pricing
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          A pricing that adapts to your needs
        </h2>

        <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
          <div className="flex gap-2 items-baseline">
           <div className="text-4xl font-black">$19</div> 
           <div className="uppercase text-sm font-medium opacity-60">forever</div>
           </div>

        <ul className="space-y-2">
          <li className="flex gap-2 items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 16 16" 
            fill="currentColor" 
            className="text-green-600 size-4"
          >
          <path 
            fillRule="evenodd" 
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" 
            clipRule="evenodd" 
          />
          </svg>
            Collect Customer Feedback
            </li>
            <li className="flex gap-2 items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 16 16" 
            fill="currentColor" 
            className="text-green-600 size-4"
          >
          <path 
            fillRule="evenodd" 
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" 
            clipRule="evenodd" 
          />
          </svg>
            Unlimited Boards
            </li>
            <li className="flex gap-2 items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 16 16" 
            fill="currentColor" 
            className="text-green-600 size-4"
          >
          <path 
            fillRule="evenodd" 
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" 
            clipRule="evenodd" 
          />
          </svg>
            Admin Dashboard
            </li>
            <li className="flex gap-2 items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 16 16" 
            fill="currentColor" 
            className="text-green-600 size-4"
          >
          <path 
            fillRule="evenodd" 
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" 
            clipRule="evenodd" 
          />
          </svg>
            24/7 Support
            </li>  
          
        </ul>

        <ButtonLogin 
        session={session} 
        extraStyle="w-full" 
        />

        </div>
    </section>
    

    {/* FAQ */}
    <section className="bg-base-200" id="faq">
      <div className="py-20 px-8 max-w-3xl mx-auto">
        <p className="text-sm uppercase font-medium text-center text-green-400 mb-4">
          FAQ
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <ul className="max-w-lg mx-auto">
          {
            [
              { 
                question: "How is this app different from MyFitnessPal?", 
                answer: "Unlike MyFitnessPal, which focuses on calorie counting, our app is designed to give you personalized insights based on your habits." 
              },
              { 
                question: "Is this app beginner-friendly?", 
                answer: "Absolutely! We built this app to be simple, intuitive, and frustration-free. Whether you’re just starting your health journey or you’re a seasoned pro, our features adapt to your level—no overwhelming dashboards or confusing settings." 
              },
              { 
                question: "Do I need a subscription to use the app?", 
                answer: "Yes, but unlike most fitness apps that charge monthly fees, we offer a one-time payment of just €19.99—forever for the first 20 customers. No hidden costs, no recurring charges — just full access for life." 
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
        </ul>
      </div>
    </section>
  </main>
  );
}
