export function Loading() {
  return <div className="loading">Loading...</div>;
}

export function Error({ message }) {
  return <div className="error">Error: {message}</div>;
}
