import Link from "next/link";
import Image from "next/image";
import Star from "@/public/Star Icon.svg";

const NotFound = () => {
  return (
    <div className="relative h-screen w-full bg-hohc-yellow-100">     
      <div className=" absolute left-130 top-10 h-full w-full scale-150 rotate-4 opacity-5">
        <Image 
          src={Star} 
          alt="" 
          fill 
          className="object-contain" 
          priority 
        />
      </div>

      <div className="relative z-10 flex flex-col translate-y-1 items-center">
        <p className="text-huge font-hohc-kanit top-20">
          404
        </p>
        <p className="text-7xl translate-x-5 font-hohc-kanit mb-5">
          Oops! The page you were <br className="mb-5"/>looking for doesn't exist.
        </p>
        <Link href="/" className="mt-10 bg-hohc-blue-500 px-20 py-10 text-white text-4xl rounded-4xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
          Back to Home
          </Link>
      </div>
      
      


      <div className=" absolute right-120 -bottom-60 h-full w-full scale-150 -rotate-20 opacity-5 ">
        <Image 
          src={Star} 
          alt="" 
          fill 
          className="object-contain" 
          priority 
        />
      </div>
      
    </div>
    
  );
};

export default NotFound;