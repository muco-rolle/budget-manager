import React from "react";
import Entry from "./Entry";


const Entries = () => {
    return (
        <div className="entries">
            <Entry type="income" amount={21244} />
            <Entry type="expense" amount={21244} />
        </div>
    );
}


export default Entries;