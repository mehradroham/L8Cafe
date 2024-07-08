import Link from "next/link";
export default function unauthenticated() {
  return (
    <>
    <div className="flex ml-[12px] sm:ml-[40px] flex-col md:flex-row">
    <Link
        href={"/register"}
        className="  rounded-full hover:text-primary text-nowrap text-light px-8 py-2  "
      >
        ثبت نام{" "}
      </Link>

      <Link
        href={"/login"}
        className="bg-primary hover:bg-secondary  text-light   px-8 py-1"
      >
        ورود
      </Link>
    </div>
    
    </>
  );
}
