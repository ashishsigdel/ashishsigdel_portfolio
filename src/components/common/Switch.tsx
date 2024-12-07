"use client";

const Switch = ({
  status,
  id,
  changeStatus,
}: {
  status: boolean;
  id: number;
  changeStatus?: (id: number, status: boolean) => void;
}) => {
  return (
    <>
      <div
        className={`w-[50px] h-6 flex items-center ${
          status ? "bg-green-500" : "bg-gray-300"
        } rounded-full p-[2px] cursor-pointer`}
        onClick={() => {
          changeStatus && changeStatus(id, status);
        }}
      >
        {/* Switch  */}
        <div
          className={`bg-white h-5 w-5 rounded-full shadow-md ${
            status && " transform translate-x-[26px]"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Switch;
