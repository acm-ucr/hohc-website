import Image from "next/image";

const Landing = () => {
  return (
    <div>
      <div className="relative flex w-full">
        <Image
          src="/landing-image.webp"
          alt="Landing Image"
          width={1200}
          height={800}
          className="h-auto w-full object-cover"
        />
        <div className="absolute inset-0 h-1/2 bg-gradient-to-b from-white/80 to-transparent"></div>
        <h1
          className="text-hohc-blue-700 absolute top-24 left-1/2 -translate-x-1/2 text-center text-8xl font-bold whitespace-nowrap"
          style={{ textShadow: "2px 4px 2px rgba(255, 255, 255, 0.8)" }}
        >
          Hands on Health Care
        </h1>
      </div>
    </div>
  );
};

export default Landing;
