interface ButtonProps{
  title: string,
  id: number
}

function Button(props: ButtonProps) {
  return(
    <button>
    {props.title} {props.id}
    </button>
    )  
}

function App(){
  return <div><Button title="ENVIAAEW" id={1} />
  <Button title="ENVIAAEW" id={4} />
  <Button title="ENVIAAEW" id={3} /></div>
}

export default App
