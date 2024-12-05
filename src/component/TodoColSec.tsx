
function TodoColSec(){
    return(
     <>
     <div className="absolute z-20 bottom-7  justify-end pr-7 bg-violet-800  text-white hover:text-violet-800 hover:bg-white rounded-r-full border-gray-200 py-3  ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>   
</div>

     <section className="w-full grid grid-cols-4 z-10 gap-5 m-4  bg-[#1a1b27]  justify-center  ">
    <div className="grid-rows-2 ">
    <div className="row-span-1">
        <p className="flex justify-center top-2 gap-1 items-center text-xl "><svg className="h-5 w-5 bg-red-900 text-red-900 rounded-full"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12"  fill="currentColor" />  <circle cx="12" cy="12" r="9" /></svg>Todo (1)</p> 
    </div>
    <div className="row-span-1 text-sm font-mono grid grid-rows-5 gap-4  w-full h-auto text-gray-400 flex-col ">
    <div className="w-auto  flex flex-col justify-center items-start p-2 g font-medium bg-gray-800 rounded-lg">
        <p className=" ">S</p>
        <p className="" >2 of 2 task</p>
    </div>
    <div className="w-auto text-md p-4 font-medium bg-gray-800 rounded-lg">
        <p className="">S</p>
        <p className="" >2 of 2 task</p>
    </div>
    <div className="w-auto text-md p-4 font-medium bg-gray-800 rounded-lg">
        <p className="">S</p>
        <p className="" >2 of 2 task</p>
    </div>
    <div className="w-auto text-md p-4 font-medium bg-gray-800 rounded-lg">
        <p className="">S</p>
        <p className="" >2 of 2 task</p>
    </div>
   </div>
    </div>
    <button className="grid col-span-end">
    <div className="w-full h-full overflow-hidden  text-md  flex justify-center items-center font-medium  text-gray-400 bg-gray-800 rounded-lg">
    <p className="text-2xl md:font-bold text-center"><svg className="h-6 w-6 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg></p><p className=" flex-col hidden lg:flex"> New column</p>  
    </div> 
    </button>
   </section>
     </>
    )
}
export default TodoColSec;
