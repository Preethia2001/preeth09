import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
class College extends React.Component{
  render(){
    return<h1>Shridevi College of Engineering</h1>
}
}
const root1=ReactDOM.createRoot(document.getElementById('root'))
root1.render(<College/>)
function Department(){
  return(
    <div>
    <College/>
    <h2>Ece Department</h2>
  </div>
  )
}
const root2=ReactDOM.createRoot(document.getElementById('root'))
root2.render(<Department/>)
function Section(props){
  return(
    <div>
      <College/>
      <Department/>
      <p>section is{props.sec}</p>
    </div>
  )
}
const root3=ReactDOM.createRoot(document.getElementById('root'))
root3.render(<div>
  <Section sec="A"/>
  <Section sec="B"/>
</div>)
reportWebVitals();




