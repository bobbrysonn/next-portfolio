import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { FiDribbble } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import Image from "next/image";

export default function App() {
    return (
        <div className="md:flex items-center justify-between flex-row-reverse">
            <div className="flex justify-end items-end max-md:pt-4">
                <div className="relative">
                    {/* <Image className="w-full transform -scale-x-100" width={600} height={696} src="/man.png" alt="Hero Image" /> */}
                    <div className="w-[60%] overflow-hidden h-[70%] z-[-1] top-[10%] left-[20%] rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 absolute"></div>
                </div>
            </div>

            <div className="p-4 pl-0 mt-5 sm:mt-20">
                {/* Introductory text */}
                <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">Hello</p>
                <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2  lg:pt-6'>I&apos;m Bob<p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4'>A Front End Developer </p></h1>
                <p className='text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-5'>bringing imagination to live websites.</p>
            
                {/* Contacts section */}
                <div className='flex items-center mt-6 md:mt-14'>

                    {/* Social media icons */}
                    <ul className='flex items-center space-x-2 sm:space-x-5 mr-6 my-4 '>
                        <li><a href="https://twitter.com/bobbrysonn" className='transition ease-in duration-150'><AiOutlineTwitter size={24} className="hover:opacity-100 opacity-50" /></a></li>
                        <li><a href="" className='transition ease-in duration-150'><GrInstagram size={24} className="hover:opacity-100 opacity-50" /></a></li>
                        <li><a href="" className='transition ease-in duration-150'><FiDribbble size={24} className="hover:opacity-100 opacity-50" /></a></li>
                        <li><a href="" className='transition ease-in duration-150'><AiOutlineGithub size={24} className="hover:opacity-100 opacity-50" /></a></li>
                    </ul>

                    {/* Email me */}
                    <a href="mailto:official.bobmoriasi@gmail.com?subject=Inquiry" className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-500 rounded-2xl border-[0.5px] border-[#363636]'>Email me</a>
                </div>
            </div>
        </div>
    )
}