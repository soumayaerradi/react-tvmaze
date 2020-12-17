import { useState } from 'react';
import Axios from 'axios';
import { Series, Show } from '../model/series';

export function useTVMaze() {
    const [details, setDetails] = useState<Show | null>(null);
    const [result, setResult] = useState<Series[]>([]);

    const searchHandler = (text: string) => {
        Axios.get<Series[]>(`http://api.tvmaze.com/search/shows?q=${text}`)
            .then(res => setResult(res.data));
    };

    const itemClickHandler = (series: Series) => {
        // window.open(series.show.url);
        setDetails(series.show)
    };

    const closeModal = () => {
        setDetails(null);
    }

    return {
        series: result,
        details,
        search: searchHandler,
        itemClick: itemClickHandler,
        closeModal
    }
}

