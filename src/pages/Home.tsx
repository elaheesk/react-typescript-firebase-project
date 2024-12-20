import { homeAvatarUrl, homepageText } from "../data";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
            <div>
                <h2 className="text-3xl font-bold text-center sm:text-5xl">Welcome to My Portfolio Application!</h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">This app is designed to showcase my development skills by integrating various features and functionalities. Each page demonstrates a different aspect of my expertise in front-end and back-end development.</p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                    <h3 className="text-xl font-bold ml-4">What You Can Do:</h3>
                    <div className="mt-4 space-y-12">
                        {homepageText.map((textRow, idx) =>
                            <div key={idx} className="flex">
                                <div className="ml-4">
                                    <Link to={textRow.route} className="text-lg font-medium leadi ">{textRow.title}</Link>
                                    <p>{textRow.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                    <img alt="Computer avatar" width="600" height="600" src={homeAvatarUrl} className="mx-auto rounded-lg shadow-lg dark-bg-gray-500" style={{ color: "transparent" }}></img>
                </div>
            </div>
        </section>
    )
}
export default Home;
























