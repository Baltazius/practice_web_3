export default function Token({onClick, className, text}) {

    return  <div method="POST" action="" onClick={onClick} className={"flex justify-center items-center bg-black text-amber-50 w-[100px] h-[100px] border rounded-[100%] m-3 overflow-hidden" + className}>
                {text}
            </div>
}