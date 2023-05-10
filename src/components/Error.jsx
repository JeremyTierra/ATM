import imgError from "../assets/imgError.svg"
function Error() {
    return(<>
 <div className="bg-gray-100 h-screen flex flex-col justify-center">
      <div className="bg-white p-6  md:mx-auto">
        <div  className="text-green-600 w-16 h-16 mx-auto my-6">
           <img src={imgError} alt="" />
        </div>
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
            <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
            <p> Have a great day!  </p>
            <div className="py-10 text-center">
                <a href="#" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK 
               </a>
            </div>
        </div>
    </div>
  </div>
    </>);
}
export default Error;