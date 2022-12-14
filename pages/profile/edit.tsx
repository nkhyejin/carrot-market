import type { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";

const EditProfile: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-500" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-md text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Change
          <input id="picture" type="file" accept="image/*" className="hidden" />
        </label>
      </div>
      <div className="space-y-1">
        {/* <label htmlFor="email" className="text-sm font-medium text-gray-700 ">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          className="appearance-none w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        /> */}
        <Input label="Email address" kind="text" name="email"></Input>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 ">
          Phone number
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id="input"
            type="number"
            required
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none rounded-l-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
      <Button text="Update profile" />
    </div>
  );
};

export default EditProfile;
