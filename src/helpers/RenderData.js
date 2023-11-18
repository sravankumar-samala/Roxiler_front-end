export default function RenderData({
  isLoading,
  error,
  data,
  renderSuccessComponent,
  noDataView,
  loadingComponent,
}) {
  return (
    <>
      {isLoading && loadingComponent}
      {error && <p>{error}</p>}
      {!isLoading && (
        <>
          {!data.length && noDataView}
          {data.length && renderSuccessComponent(data)}
        </>
      )}
    </>
  );
}
