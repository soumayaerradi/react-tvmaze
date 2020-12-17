import React, { Fragment } from "react";
import { Series } from "../model/series";
import css from './TVMazeResults.module.css';

export interface TVMazeResultsProps {
    result: Series[];
    itemClick: (Series: Series) => void;
}

export const TVMazeResults: React.FC<TVMazeResultsProps> = (props) => {
    return <Fragment>
        {/* {props.result.length} results */}
        <div className={css.grid}>
            {props.result.map(series => {
                const { show: { id, image, name } } = series;
                return <div key={id} className={css.gridItems}>
                    <div className={css.movie} onClick={() => props.itemClick(series)}>
                        {
                            image ? <img src={image?.medium} alt="" /> : <NoImage />
                        }
                        <div className={css.movieText}>{name}</div>
                    </div>
                </div>
            })
            }
        </div>
    </Fragment>
}

export const NoImage = () => {
    return <div className={css.noImage}></div>
}