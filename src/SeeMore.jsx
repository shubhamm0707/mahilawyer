
function SeeMore({ data, showMore, setShowMore }) {
    return (
        <div className="container flex" style={styles.seeMoreContainer}>
            {data.length > 3 && <div className="see-more" style={styles.seeMore} onClick={() => setShowMore(!showMore)}>See More</div>}
        </div>
    )
}

export default SeeMore;


const styles = {
    seeMore: {
        cursor: "pointer",
        textAlign: "end",
        fontWeight: "bold",
        color: "#000",
        display: "inline-block",
        border: "1px solid #000",
        padding: "10px",
        borderRadius: "5px",
        margin: "20px 0",
        width: "fit-content",
        "&:hover": {
            backgroundColor: "#000",
            color: "#fff"
        }
    },

    seeMoreContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "100%",
        height: "100%",

    }
}
