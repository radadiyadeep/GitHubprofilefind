const User = ({ user }) => {

    const { avatar_url, followers, following, public_repos, name, login,created_at, bio, company, location } = user;

    const createdData = new Date(created_at);

    return (
        <>
            <div className="row mx-auto justify-content-center">
                <div className="col-md-4">
                    <div className="card my-5">
                        <img src={avatar_url} className="card-img-top" alt="..." style={{width: "346px", height: "250px"}} />
                        <div className="card-body">

                            <h5 className="card-title">Location is : {location}</h5>
                            <p className="card-text">Bio is : {bio}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Created On :{createdData.toLocaleDateString()}</li>
                            <li className="list-group-item">Public Repo count is :{public_repos}</li>
                            <li className="list-group-item">Followers : {followers}</li>
                            <li className="list-group-item">Following : {following}</li>

                        </ul>
                        <div className="card-body">

                            <a href={`https://github.com/${login}`} className="card-link">{name || login}</a>

                            <a className="card-link">Company : {company}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
    export default User;