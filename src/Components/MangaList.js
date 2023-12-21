import React, { useState } from "react";

export const MangaList = ({ mangalist, setMangaInfo, mangaComponent, handleList }) => {
    const [showSynopsis, setShowSynopsis] = useState(false);
    const AddToList = mangaComponent;


    const handleMangaClick = (manga) => {
        setMangaInfo(manga);
        setShowSynopsis(true);
    };

    return (
        <>
            {mangalist ? (
                mangalist.map((manga, index) => {
                    return (
                        <div className="card" key={index} onClick={() => setMangaInfo(manga)}>
                            <img src={manga.images.jpg.large_image_url} alt="mangaImage" />
                            <div className="manga-info">
                                <h4>{manga.title}</h4>
                                {showSynopsis && (
                                    <div className="overlay" onClick={() => handleList(manga)}>
                                        <h4>{manga.title_japanese}</h4>


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
