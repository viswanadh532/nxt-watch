const FailureView = ({onRetry}) => (
  <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      alt="failure view"
    />
    <button onClick={onRetry}>Retry</button>
  </div>
)

export default FailureView
