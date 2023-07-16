export default function MdxTitle({ children }) {
  return (
    <section className="page-header blg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            <div className="cont text-center">
              <h2 style={{ fontSize: "6rem !important" }}>{children}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
