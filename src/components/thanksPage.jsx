const ThanksPage = () => {
    return <main className="w-[80vw] h-[80vh] content-center">
        <div className="w-4/5 h-2/3 text-black mx-auto mt-16">
        <p className="text-2xl font-semibold my-2">Thank you for listing your property with us,</p>
        <p className="text-lg my-4">Your listing will be reviewed and will go live within 24 hours.</p>
        <p className="text-lg my-2 w-4/5">We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference.</p>
        <p className="text-base my-6 text-[#122B49]">-Dylan Estates</p>
        <input type="button" className="px-4 mt-4 mr-8  bg-[#122B49] border-[#122B49] py-1 border-2 rounded-md text-white" value="Edit Property Listing" />
        <input type="button" className="px-4 mt-4  bg-[#122B49] border-[#122B49] py-1 border-2 rounded-md text-white" value="Preview Property Listing" />
        </div>
    </main>
}

export default ThanksPage;