import TestimonialBox from "./TestimonialBox";

const Testimonials = () => {
  const testData = [
    {
      id: 1,
      desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "profile-1.jpg",
      position: "Founder & CEO,Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "profile-2.jpg",
      position: "Founder & CEO,Huddle",
      name: "Mohamed",
    },
    {
      id: 3,
      desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "profile-3.jpg",
      position: "Founder & CEO,Huddle",
      name: "Eman",
    },
  ];
  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src="/images/bg-quotes.png" alt="quotes.img" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] relative z-10">
          {testData.map((ele) => {
            return (
              <TestimonialBox
                key={ele.id}
                desc={ele.desc}
                img={ele.img}
                position={ele.position}
                name={ele.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
