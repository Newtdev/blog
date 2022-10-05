// import { DesktopNav, MobileNav } from "../navigation/Navigation";
import { DesktopNav, MobileNav } from "../navigation/Navigation";

const PageHeadLogic = () => {
  return (
    <header
      className='h-full w-screen overflow-x-hidden'
      style={{
        backgroundImage: "linear-gradient(90deg,#3a7700,#003356)",
      }}>
      <div className='container mx-auto'>
        <nav className='w-full lg:h-24 h-fit'>
          <MobileNav />
          <DesktopNav />
        </nav>
      </div>
    </header>
  );
};

export default PageHeadLogic;
