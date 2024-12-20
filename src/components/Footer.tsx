import { FC } from "react";
import { externalLinks, routes } from "../data";

const Footer: FC = () => {
    return (
        <>
            <footer className="">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        {routes.map((eachRoute, idx) =>
                            <div key={idx} className="px-5 py-2">
                                <a href={eachRoute.route} className="text-base leading-6 text-gray-500 hover:text-gray-900" rel="noreferrer" target="_blank">
                                    { eachRoute.title}
                                </a> 
                            </div>
                        )}
                    </nav>
                    <div className="flex justify-center mt-8 space-x-6">
                        {externalLinks.map((link,idx) =>
                            <a key={idx} href={ link.url} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{ link.title}</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox={link.title === "Linkedin" ? "0 0 44 44" : "0 0 24 24" }>
                                    <path fillRule="evenodd" d={link.svgPath}  clipRule="evenodd"></path>
                                </svg>
                            </a>
                        )}
                    </div>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        This application is built with React, TypeScript, TailwindCSS, and Firebase.
                    </p>
                </div>
            </footer>
        </>
    )
}
export default Footer;