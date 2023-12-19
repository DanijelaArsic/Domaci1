import React, { useState } from "react";

export const AnimeList = ({ animelist, setAnimeInfo }) => {
    const [showSynopsis, setShowSynopsis] = useState(false);

    const handleAnimeClick = (anime) => {
        setAnimeInfo(anime);
        setShowSynopsis(true);
    };

    return (
        <>
            {animelist ? (
                animelist.map((anime, index) => {
                    return (
                        <div className="card" key={index} onClick={() => handleAnimeClick(anime)}>
                            <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                            <div className="anime-info">
                                <h4>{anime.title}</h4>
                                {showSynopsis && (
                                    <div className="overlay">
                                        <h4>{anime.title_japanese}</h4>

                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })
            ) : (
                "Not found"
            )}
        </>
    );
};
