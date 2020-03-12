import React, {useState} from 'react'
import DEFAULT_GENRES from './Genres.js'

const Survey = () => {
    const [genres, setGenres] = useState(DEFAULT_GENRES);
    let [, setState] = useState();

    const toggleStar = (genre) => {
        // Match on id/name
        const moveToFirst = genre;

        // Find the element to move to the top
        const matching = genres.filter((elem) => {
            return elem.name === moveToFirst.name
        });

        matching.forEach((elem) => {
            if (!elem.hasOwnProperty("starred")) {
                elem.starred = true;
            } else {
                elem.starred = !elem.starred;
            }
        });
        setState({});
    }

    const reorderFirst = (genre) => {
        // Match on id/name
        const moveToFirst = genre;

        // Find the element to move to the top
        const matching = genres.filter((elem) => {
            return elem.name === moveToFirst.name
        });

        // Find all other elements in order
        const unmatching = genres.filter((elem) => {
            return elem.name !== moveToFirst.name
        });

        const newArray = matching.concat(unmatching);
        setGenres(newArray);
    }

    return (

        <ul className="genre-list">
            {
                genres.map((genre) => {
                    return (
                        <li
                            className='genre-item'
                            onClick={() => reorderFirst(genre)}
                            key={genre.name}
                        >
                            {genre.name}
                            <span
                                className={`star fa fa-star ${genre.starred ? "" : "un"}starred`}
                                onClick={(e) => {toggleStar(genre); e.stopPropagation();}}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}


export default Survey