import './Article.css';
import { motion } from 'framer-motion';

function Article({ cardTitle, borderColor, imgUrl }) {
    return (
        <motion.div
            className="px-5 py-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% in view
        >
            <div
                className="card w-full rounded-lg shadow-md bg-white flex flex-col px-5 pt-5 gap-5 flex-nowrap"
                style={{ borderLeft: `5px solid ${borderColor}` }}
            >
                <img
                    className='w-[100px] h-[100px] rounded-lg object-contain'
                    src={imgUrl}
                    alt="Blog Post"
                />
                <div className="flex-1">
                    <div className="card-title text-center font-bold mb-2 text-[18px]">{cardTitle}</div>
                    <div className="author mb-4 text-[12px] text-gray-400 text-center">
                        Mahima Chaudhary &bull; 6 Comments
                    </div>
                    <div className="description text-center">
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form...
                    </div>

                    <div className="w-full border-t border-dotted border-gray-200"></div>

                    <div className="flex justify-between">
                        <div className="tags">
                            <span style={{ color: borderColor }}>#Lifestyle</span>{" "}
                            <span style={{ color: borderColor }}>#Trending</span>
                        </div>
                        <div className="stats flex justify-between text-[12px] text-gray-400 py-3">
                            <div>&#128293; 302 Views</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Article;
