import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CounterCard extends Component {
  state = {
    count: 0,
    memory: null,
  };
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  componentDidMount() {
    this.setState({ memory: setInterval(() => this.inc(), 1000) });
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage:
              "url(data:image/jpeg;base64,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) ",
          }}
        >
          <Card
            style={{
              width: "800px",
              height: "1000px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "25%",
            }}
          >
            <Button style={{ width: "800px" }}>FRANZ BECKENBAUER</Button>
            <Card.Img
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0rFPQKYKzi4Qa-MPPJMb97X13jSRcA7XYQ&usqp=CAU) ",
              }}
              variant="top"
              src="https://pbs.twimg.com/media/COmvWX7WsAArwOT.png"
            />
            <Card.Body
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0rFPQKYKzi4Qa-MPPJMb97X13jSRcA7XYQ&usqp=CAU) ",
              }}
            >
              <Card.Title>FRANZ BECKENBAUER CAREER</Card.Title>
              <Card.Text>
                Sné le 11 septembre 1945 à Munich et mort le 7 janvier 2024 à
                Salzbourg en Autriche, est un footballeur international puis
                entraîneur allemand. Grand nom de l'histoire du football au
                poste de libéro, Beckenbauer signe sa domination au plus haut
                niveau international en remportant en tant que capitaine de
                l'équipe d'Allemagne de l'Ouest le Championnat d'Europe de 1972
                et la Coupe du monde deux ans plus tard. En plus de ses succès
                internationaux, Beckenbauer mène également son club du Bayern
                Munich au triplé en Coupe des clubs champions européens
                (1974-76) et est élu deux fois Ballon d'or, en 1972 et 1976 (il
                est à ce jour l'un des trois seuls défenseurs à avoir décroché
                la récompense avec son compatriote Matthias Sammer du Borussia
                Dortmund en 1996 et l'Italien Fabio Cannavaro de la Juve en
                2006). Le Bavarois devient ensuite sélectionneur de l'Allemagne
                et remporte notamment la Coupe du monde 19901.
              </Card.Text>
              <Button
                style={{ width: "80px", borderRadius: "20px" }}
                variant="primary"
              >
                {this.state.count}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}