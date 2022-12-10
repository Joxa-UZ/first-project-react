import "./movies-add-form.css"

const MoviesAddForm = () => {
  return (
    <div className="movies-add-form">
    <h3>Yangi kino qo'shish</h3>

    <form className="add-form d-flex">
        <input className="form-control new-post-label" type="text" placeholder="Qanday kino ?" />
        <input className="form-control new-post-label" type="number" placeholder="Nechi marotaba ko'rilgan ?" />

        <button className="btn btn-outline-dark" type="submit">
            Qo'shish
        </button>
    </form>
    </div>
  )
}

export default MoviesAddForm