const EducationSection = ({reference}) => {
  return (
    <div ref={reference} id="education" className="flex flex-col gap-10">
      {" "}
      <div className="flex flex-row sm:p-4 hover:shadow-lg hover:bg-gray-500/10 rounded-sm ">
        <div className="w-1/4 flex flex-col"> 2021-25</div>
        <div className="w=3/4 flex flex-col">
          Muzaffarpur Institute of Technology
          <div className="">Information Technology (B.Tech) </div>
          <div className="">CGPA- 7.86</div>
        </div>
      </div>
      <div className="flex flex-row p-4 hover:shadow-lg hover:bg-gray-500/10 rounded-sm ">
        <div className="w-1/4 flex flex-col"> 2018-20</div>
        <div className="w=3/4 flex flex-col">
          DAV Public School,Bokaro Steel city
          <div className="">Class-12 (CBSE) </div>
          <div className="">Percentage:- 90.01%</div>
        </div>
      </div>
      <div className="flex flex-row p-4 hover:shadow-lg hover:bg-gray-500/10 rounded-sm ">
        <div className="w-1/4 flex flex-col"> 2018-20</div>
        <div className="w=3/4 flex flex-col">
          St.Mary's English School
          <div className="">Class-10 (CBSE) </div>
          <div className="">Percentage:- 87.8%</div>
        </div>
      </div>
    </div>
  );
};
export default EducationSection;
