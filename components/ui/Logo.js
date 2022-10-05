import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";

export default function LogoImage() {
  return (
    <Link href='/'>
      <Image src={Logo} alt='Rencoin' className='cursor-pointer' />
    </Link>
  );
}
