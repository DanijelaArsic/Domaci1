import React from "react";

export const AnimeInfo = (props) => {
    const { title, images: { jpg: { large_image_url } }, rank, score, popularity, synopsis } = props.animeInfo
    return (
        <>
            <div className="anime-content">
                <h3>{title}</h3> <br />
                <img src={large_image_url} alt="" />
                <div className="info">
                    <h3>#Rank: {rank}</h3>
                    <h3>#Score: {score}</h3>
                    <h3>#Popularity: {popularity}</h3>
                    <h4>Synopsis: {synopsis}</h4>
                    <hr /><br />




                </div>
            </div>
        </>
    )
}