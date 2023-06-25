import Image from "next/image"

const Main = ({children})=>{
    return(
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />

    <div
    class="bg-scroll
      max-w-full
      
      bg-[url('/background.jpg')]
      h-[972px] 
      min-h-screen
       overflow-auto">

      <div class="container max-w-5xl mx-auto px-4">
       <div>
          {children}
        </div> 
      </div>
    </div>
    </>)
}

export default Main