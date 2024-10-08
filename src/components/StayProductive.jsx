const StayProductive = () => {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img
            src="/images/illustration-stay-productive.png"
            alt="stay-productive"
          />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay Productive,
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <a
            href="/"
            className="text-primary hover:text-[#42b8d1] border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] w-fit transition-colors duration-200 "
          >
            See how Fylo works.
            <img
              src="/images/icon-arrow.svg"
              alt="arrow.img"
              className="w-[20px] h-[20px] object-contain animate-moveRight"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
