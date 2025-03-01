const ServiceListView = ({ itemData, title }) => {
  return (
    <div className="max-w-[1300px] mx-auto pt-4 pb-10 lg:py-28 px-3 md:px-10 lg:px-0 grid grid-cols-1 lg:grid-cols-2  lg:gap-10">
    {itemData.map((list, index) => (
      <div key={index} className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 sm:text-3xl md:text-4xl">{list.title}</h2>
        <ul className="list-disc pl-5 space-y-3 text-base sm:text-lg">
          {list.items.map((item, idx) => (
            <li key={idx} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  
  );
};

export default ServiceListView;
