function CardUser({ photo, name, email, position }) {
    return (
        <article className="card">
            <div className="card__items">
                <img className="card__avatar" src={photo} alt="user's photo" width="230px" height="200px" />
                <div className="card__info">
                    <h1 className="card__name">{name}</h1>
                    <p className="card__position">{position}</p>
                    <p className="card__email">{email}</p>
                </div>
            </div>
        </article>
    )
}

export default CardUser;