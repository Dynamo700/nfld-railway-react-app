function Map() {
    return (
      <iframe 
        src={`${process.env.PUBLIC_URL}/map/index.html`} 
        title="Map view"
        width="50%"
        height="650"
      ></iframe>
    )
  }

  export default Map;