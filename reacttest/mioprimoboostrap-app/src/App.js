import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';
import './bootstrap.min.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Mostra Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Header del toast</strong>
        </Toast.Header>
        <Toast.Body>{children}
        </Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Benvenuto nel primo esempio di React</h1>
      <p>Questo testo esterno</p>
      <ExampleToast>
        Figli del toast! 
        <span role="img" aria-label="tada">
          🎉
        </span>
        <p>Ciao dal contenuto del box!</p>
      </ExampleToast>
    </Container>
  </Container>
);

export default App;