export default function Footer() {
  const item = "hover:cursor-pointer text-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]";
  return (
    <div className="bg-blue-400 text-white tetx-sm font-thin flex flex-col justify-center items-center p-5">
      <footer className={item}>Gmail:yohansngus8@gamil.com</footer>
      <h1 className={item}>Github:yohansngus</h1>
      <h1 className={item}>Linkdn:yohansngus</h1>
    </div>
  );
}
