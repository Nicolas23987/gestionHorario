


export function Selec_Tarjet(Info){
    console.log(Info.text)
    return(
        <div>
          <section className="flex w-52 h-52 items-center justify-start flex-col rounded-lg border border-black hover:translate-x-full duration-75">
            <div className="flex w-10/12 h-3/6 items-center justify-center bg-gray-200 rounded-xl my-5">
               <img className="w-5" src={Info.img} alt="" /> 
            </div>
            <h4 className="text-black" >{Info.text}</h4>

          </section>
        </div>
    )
}