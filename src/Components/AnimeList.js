import React from "react";

export const AnimeList = ({ animelist }) => {
    return (
        <>
            {
                animelist ? (
                    animelist.map((anime, index) => {
                        return (
                            <div className="card">
                                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                                <div className="anime-info">
                                    <h4>{anime.title}</h4>
                                </div>
                            </div>

                        )
                    })
                ) : "Not found"
            }


        </>

    )
}