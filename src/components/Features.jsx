import FeatureBox from "./FeatureBox";

const Features = () => {
  const items = [
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files,anywhere",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  console.log(items);
  return (
    <section className="pb-[150px]">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full ">
          {items.map((feature, index) => (
            <FeatureBox
              title={feature.title}
              icon={feature.icon}
              desc={feature.desc}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
