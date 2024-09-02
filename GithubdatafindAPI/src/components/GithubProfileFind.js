import { useEffect, useState } from "react";
import User from "./User";
const GithubProfileFind = () => {

    const [userName, setUsername] = useState("radadiyadeep");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        if (data) {
            setUserData(data);
            setLoading(false);
            setUsername("");
        }
        console.log(data);
    }
    useEffect(() => {
        fetchGithubUserData();
    }, []);

    function handleSubmit() {
        fetchGithubUserData();
    }
    if(loading){
        return <h1>Loading data ! please wait. </h1>
    }

    return (

        <>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <input type="text" class="form-control my-3" placeholder="Search Github Username..." value={userName} onChange={(event) => { setUsername(event.target.value) }} />

                        <button class="btn btn-primary my-2 mx-auto w-25" onClick={handleSubmit}>Search</button>
                    </div>

                </div>
                { userData !== null ?   <User user={userData}   /> : null}
            </div>

        </>


    );
}

export default GithubProfileFind;