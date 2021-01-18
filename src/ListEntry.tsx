import React from "react";

type Props = {
    entry: any
}

const ListEntry: React.FC<Props> = ({entry}) => {
    const [isDetailVisible, setIsDetailVisible] = React.useState(true);

    const onEntryClicked = () => {
        setIsDetailVisible(!isDetailVisible)
    };

    return (<>
        <div className="App-list-entry-title" data-testid="entryContainer">
            <h4 className="App-title-clickable" onClick={onEntryClicked}>
                {entry.name}
            </h4>
            <h5>{entry.status}</h5>
        </div>
        {isDetailVisible && <div className="App-list-entry-body" data-testid="entryBody">
            <p>
                Location:  {entry.location.name}, {entry.location.type}
            </p>
        </div>}
    </>)
};

export default ListEntry;