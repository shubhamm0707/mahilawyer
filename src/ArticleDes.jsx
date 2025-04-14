import React, { useEffect } from "react";

const ArticleDes = ({ setShowArticle, articleIndex, articleData }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // scroll to top on component mount
    }, []);

    const article = articleData && articleData[articleIndex];

    return (
        <div className="px-[10%] py-10 text-[#003355] text-sm leading-6 bg-white">
            <button
                onClick={() => setShowArticle(false)}
                className="text-[26px] mb-6 text-[#00446b] rounded transition"
            >
                ←
            </button>

            {article ? (
                <>
                    <h1 className="text-xl font-bold mb-2">{article.cardTitle}</h1>
                    <div className="w-full border-t border-dotted border-gray-400"></div>
                    <div className="mt-4 mb-6">
                        <img
                            src={article.imgUrl}
                            alt={article.cardTitle}
                            className="w-full max-w-[600px] h-auto rounded-lg mx-auto mb-6"
                        />
                    </div>

                    <div className="md:text-justify">
                        {article.des}
                    </div>
                    <br></br>
                    <br></br>
                    <h2 className="text-lg font-bold">References:</h2>
                    <div className="md:text-justify">
                        {article.ref}
                    </div>
                    {/* <div className="space-y-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h2 className="font-bold text-lg mt-4">Key Highlights</h2>
                        <ul className="list-disc ml-6">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate</li>
                        </ul>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div> */}
                </>
            ) : (
                <p>Article not found</p>
            )}
        </div>
    );
};

export default ArticleDes;
