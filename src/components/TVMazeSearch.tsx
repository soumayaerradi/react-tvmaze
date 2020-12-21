import { useState } from "react";

export interface TVMazeSearchProps {
    search: (text: string) => void
}

export const TVMazeSearch: React.FC<TVMazeSearchProps> = ({ search }) => {

    const [text, setText] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };    

    const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        search(text);
    };
    return <div>
        <form onKeyUp={searchHandler}>
            <input
                type="search"
                placeholder="search TV series"
                value={text}
                onChange={onChangeHandler}
            />
        </form>
    </div>
}