import "./index.scss";
import LogoImg from "./../res/images/logo-no-background.svg";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <div className="logo mb-4  block h-[30px] w-[100px]">
      <Link href="/">
        <Image src={LogoImg} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
