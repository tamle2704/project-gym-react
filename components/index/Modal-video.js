export default function ModalVideo() {
  return (
    <div>
      <div
        className="modal fade video-modal"
        id="videoModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="videoModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close btn-round btn-primary"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="" allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
