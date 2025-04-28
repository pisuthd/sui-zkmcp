import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-auto  bg-transparent">

            <div className="  py-5 border-t-2 border-white/5  bg-none">
                <div className="mx-auto relative px-2 max-w-6xl">
                    <div className="  text-sm   text-white flex flex-row">
                        <div className='hidden md:flex flex-1'>
                            © {new Date().getFullYear() + ' '}
                            <Link href="https://tamagolabs.com" target="_blank" className="ml-1 text-white transition ">
                                Tamago Labs Japan
                            </Link>
                        </div>
                        <div className=' flex flex-1 flex-row mt-1 justify-center md:justify-end   md:mt-0'>
                            <div className="text-xs md:text-sm px-0 md:px-2">
                                Made with ❤️ during Sui Overflow Hackathon 2025
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
