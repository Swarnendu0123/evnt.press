import { useParams } from "react-router-dom";

const Location = () => {
    // extract the id 
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>Location: {id}</h1>
        </div>
    );
}


export default Location;