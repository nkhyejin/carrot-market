import Link from "next/link";

interface ItemProps {
  title: ProfileText;
  [key: string]: any;
}

export type ProfileText = "판매내역" | "구매내역" | "관심목록";
const ProfilePath: { [key in ProfileText]: string } = {
  판매내역: "/profile/sold",
  구매내역: "/profile/bought",
  관심목록: "/profile/loved",
};

const ProfileItem = ({ title, ...rest }: ItemProps) => {
  return (
    <Link href={ProfilePath[title]}>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 text-white bg-orange-500 rounded-full flex justify-center items-center">
          {title === "판매내역" && (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          )}
          {title === "구매내역" && (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          )}
          {title === "관심목록" && (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          )}
        </div>
        <span className="text-sm font-medium text-gray-700 mt-2">{title}</span>
      </div>
    </Link>
  );
};
export default ProfileItem;
