import Image from "next/image";
import Button from "../ui/Button";
import mail from "../../assets/mail.webp";

function SubscriptionLogic() {
  return (
    <section
      className='mt-24'
      style={{ backgroundColor: "rgba(0, 51, 86, 0.98)" }}>
      <article className='container mx-auto'>
        <div className='h-full lg:h-96 w-full flex items-center flex-wrap justify-center'>
          <div className='w-4/5 md:w-1/2 lg:w-[40%] h-full flex items-center justify-center'>
            <Image src={mail} alt='mail' width={"300rem"} height='300rem' />
          </div>
          <div className='w-full md:w-2/3 lg:w-[60%] h-full flex flex-col justify-center items-center px-4'>
            <div className='lg:h-4/5 flex flex-col justify-evenly items-start px-2'>
              <h1 className='heading font-bold text-3xl text-[#f1f7fd] lg:text-4xl px-4 text-center md:text-center lg:text-left'>
                Rencoin.com in your inbox
              </h1>
              <p className='heading px-4 text-sm sm:text-base text-[#f1f7fd] my-4 text-center lg:text-left lg:w-[70%] '>
                A weekly rundown of the news that matters, plus educational
                resources and updates on products & services that support
                economic freedom
              </p>
              <form className='px-4 lg:my-0 mx-auto w-full'>
                <input
                  className='py-3 px-4 mb-4 lg:w-96 w-full mr-3 rounded bg-[#e3e3e3]'
                  type='email'
                  placeholder='Your email address'
                  required
                />
                <Button
                  styles={
                    "w-full lg:w-40 bg-[#3a7700] text-white text-bold py-3 rounded transition-all ease-in duration-300ms shadow hover:shadow-lg hover:scale-1.5"
                  }>
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default SubscriptionLogic;
