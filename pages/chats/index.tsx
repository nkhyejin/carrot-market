import type { NextPage } from "next";

const Chat: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px] ">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div
          key={i}
          className=" px-4 cursor-pointer flex py-3 items-center space-x-3"
        >
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm font-medium text-gray-500">
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
