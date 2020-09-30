import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png';

class Home extends React.Component {
    render() {
      return (
        <div className="top-page" 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <img src={logo} />
        </div>
      );
    }
  }

// ========================================

ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );