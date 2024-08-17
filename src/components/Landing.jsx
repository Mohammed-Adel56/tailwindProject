const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container ">
        <div className="element-center flex-col pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              className="w-full h-fit"
              src="/images/illustration-intro.png"
              alt="landing.img"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-3">
              All your files in one source location.
              <br />
              accessible anywhere.
            </h1>
            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full mb-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <a
            href="/"
            className="btn w-[200px] h-[60px] rounded-[30px] element-center text-white font-medium "
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img
          src="/images/bg-curvy-desktop.svg"
          alt="img"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Landing;
