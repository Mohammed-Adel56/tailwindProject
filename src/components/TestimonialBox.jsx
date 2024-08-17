/* eslint-disable react/prop-types */
const TestimonialBox = ({ desc, img, position, name }) => {
  return (
    <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px 8px 1px #1c202c]">
      <p className="text-sm font-normal tracking-[0.8px] mb-[30px]">{desc}</p>
      <div className="flex items-center  gap-3 mt-4">
        <img
          src={`/images/${img}`}
          alt="profile.img"
          className="w-[50px] h-[50px] rounded-full object-contain "
        />
        <div>
          <strong className="block mb-[5px]">{name}</strong>
          <p className="font-normal text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
