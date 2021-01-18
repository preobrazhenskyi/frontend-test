import React from "react";
import { fetchCharacters } from './api';
import ListEntry from './ListEntry';

type Props = {
    page?: number
}

const List: React.FC<Props> = ({page = 1}) => {
    const [entries, setEntries] = React.useState<any[]>([]);

    React.useEffect(() => {
        const retrieveListItems = async () => {
            const results = await fetchCharacters(page);

            setEntries(results)
        };

        retrieveListItems();
    }, [setEntries, page]);

    return (
        <section className="App-list">
            <h4>All the charactesrs from Rick and Morty Multiverse</h4>
            <div className="App-list-controls">
                <div className="App-list-control">
                    <label htmlFor="pagination">
                        Page #
                    </label>
                    <select name="pagination" id="pagination" data-testid="pagination">
                        <option value="">-</option>
                    </select>
                </div>
                <div className="App-list-control">
                    <label htmlFor="textSearch">
                        Search
                    </label>
                    <input name="textSearch" id="textSearch"
                        placeholder="Type name..."
                        data-testid="textSearch"/>
                </div>
            </div>
            <ul>{
                entries.map((entry) => <li key={entry.id}>
                    <ListEntry entry={entry}/>
                </li>)
            }</ul>
        </section>
    )
};

export default List;