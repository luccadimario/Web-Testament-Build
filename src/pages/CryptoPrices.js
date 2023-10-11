import CryptoPrice from "../components/CryptoPrice"
export default function CryptoPrices() {
    return(
        <body>
            <section className="pt-12 mb-6 text-center">
                <div className="mx-auto max-w-[800px] md:px-3">
                    <header className="text-gray-300 mb-12 text-6xl font-bold">Current Top 10 Traded Cryptos:</header>
                </div>
            </section>
            <div className="container my-24 mx-auto max-w-[700px] md:px-6 bg-slate-300 rounded-3xl">
                <section className="mb-32 text-center">
                    <div className="p-8 mx-auto max-w-[700px] md:px-3">
                <CryptoPrice/>
                    </div>
                </section>
            </div>
        </body>
    )
}