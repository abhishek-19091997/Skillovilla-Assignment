import logo from "./logo.svg";
import "./App.css";
import CommentBox from "./components/CommentBox";
import Comments from "./components/Comments";
import Like from "./components/Like";
function App() {
  return (
    <div className="App">
      <CommentBox />
      <Comments />
      
    </div>
  );
}

export default App;
