const TrekkingMap = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="lg:text-[25px] text-[20px] font-semibold ">Map</div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.879698949094!2d85.3321607760137!3d27.690112826250264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ed5bdbd9b9%3A0x232210f28f3c672a!2sViza%20Education!5e0!3m2!1sen!2snp!4v1724838437291!5m2!1sen!2snp"
            loading="lazy"
            className="w-[100%] lg:h-[40vh] h-[40vh] rounded-[8px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrekkingMap;
