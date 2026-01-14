import Image from "next/image";
export default function Ad() {
  return (
    <div className="relative flex h-68 mx-5 my-5 p-1 bg-gray-200">
      <Image
        className="object-cover"
        fill
        alt="bottel of alchol"
        src="/images/adbottle.jpg"
      />
      <div className="absolute top-1/2 left-1 -translate-y-1/2 hover:cursor-pointer hover:scale-125">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
      </div>
      <div className="absolute top-1/2 right-1 -translate-y-1/2 hover:cursor-pointer hover:scale-125">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </div>
    </div>
  );
}
