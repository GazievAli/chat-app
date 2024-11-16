import Chat from "./components/chat/Chat";
import Detail from "./components/chat/Detail";
import List from "./components/chat/List";

const App = () => {
  return (
    <div className='container'>
      <List />
      <Chat />
      <Detail />
    </div>
  )
}

export default App