import imgError from "../assets/imgError.svg"
function Error({ msg }) {
    return (<>
        <div className="bg-gray-100 h-screen flex flex-col justify-center">
            <div className="bg-white p-6  md:mx-auto">
                <div className="text-green-600 w-16 h-16 mx-auto my-6">
                    <img src={imgError} alt="" />
                </div>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Error!</h3>
                    <p className="text-gray-600 my-2">{msg}</p>
                </div>
            </div>
        </div>
    </>);
}
export default Error;