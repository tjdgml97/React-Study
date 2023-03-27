function Example() {
  const helloStr = "Hello, first exercise";

  return (
    <div onClick= {()=>{alert("클릭 됨")}} style={{marginTop : "32px" , backgroundColor : "skyblue"}} class="test">{helloStr}</div>
  )
}

export default Example;
