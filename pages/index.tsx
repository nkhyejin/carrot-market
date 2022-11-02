export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 xl:place-content-center lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white flex flex-col justify-between p-6 rounded-2xl shadow-xl dark:bg-black">
        <span className="font-bold text-3xl dark:text-white">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chiar</span>
          <span className="font-semibold dark:text-white">$19</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold dark:text-white">$80</span>
        </div>

        <div className="flex flex-col justify-between pt-2 border-t-2 border-dashed">
          <span className="font-semibold dark:text-white">Total</span>
          <span className="font-semibold dark:text-white">$99</span>
        </div>
        <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto active:bg-yellow hover:bg-teal-500 hover:text-black dark:bg-black dark:text-white dark:border-2 border-white dark:hover:bg-slate-500">
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="portrait:bg-indigo-600 landscape:bg-teal-500 p-6 pb-14 xl:pb-52">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="relative rounded-3xl bg-white -top-5 p-6">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className=" h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10">
            <span className="text-lg font-medium ">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-1 ">
        <div className="flex mb-5 justify-between items-center ">
          <span>←</span>
          <div className="space-x-3">
            <span>🌟 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💗</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium mb-1.5 text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="flex items-center justify-between">
            <div className="mt-3 mb-5 flex space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-4 ">
              <button className="rounded-lg  bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg  bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="font-medium text-2xl">$450</span>
          <button className="bg-blue-500 text-center text-white rounded-lg py-2 px-5 text-xs">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
