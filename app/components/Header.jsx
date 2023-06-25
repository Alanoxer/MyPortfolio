import Link from "next/link"

const Header = ()=>{
    return(<>
            <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-slate-800">
        <div class="flex flex-wrap gap-20 items-center mx-auto max-w-screen-xl">
           
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Alan Compay</span>
            
            <Link href="/">
                Home
            </Link>


            <Link href="/Projects">
                Projects
            </Link>

            
           
        </div>
    </nav>
</header>
    
    
    
    
    
    </>)
}

export default Header