
const Home = () => {
  return (
    <div className="main container d-flex align-items-center justify-content-center my-3" style={{ minHeight: "650px" }}>
      <div className="row w-100">
        <div className="col-lg-6 text-center p-md-5 my-md-4 p-1 my-1">
          <h1 className="my-2">RMK ENGINEERING COLLEGE</h1>
          <h1 className="my-md-2 my-1 py-md-3 py-1">30 Years of Excellence</h1>
          <p className="my-2 text-lg-start">
            30 years. 8 Institutions. One Heart. From cutting-edge to leading edge,
            RMK offers an ever adapting and dynamic learning process across all its institutions.
            A highly qualified faculty, across disciplines. Uniform class size and student-to-faculty
            ratio facilitating healthy student-teacher interactions and learning partnerships
            <button className="btn btn-primary mx-3" onClick={() => window.open("https://www.rmkec.ac.in/2023/", "_blank")}>
              Read more...
            </button>
          </p>
        </div>
        <div className="col-lg-6 img">
        </div>
      </div>
    </div>
  )
}

export default Home