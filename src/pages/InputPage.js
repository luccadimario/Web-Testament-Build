import InputField from "../components/inputField"
export default function InputPage() {
    return (
    <div className="container my-24 max-w-[700px] mx-auto md:px-6 bg-slate-300 rounded-3xl">
        <section className="mb-32 text-center">
        <div className="p-8 mx-auto max-w-[700px] md:px-3">
            <h1 className="pb-4 text-3xl text-gray-600 font-bold">
                Enter the page you would like to visit
            </h1>
            <h1 className="text-3xl text-gray-700 font-bold">
            <InputField/>
            </h1>
            </div>
        </section>
    </div>
  )
}