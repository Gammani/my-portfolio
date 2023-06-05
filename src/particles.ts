export const particlesOptions: any = {
  "window": "fill",
  "fpsLimit": 60,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 300,
        "duration": 2,
        "opacity": 0.5,
        "size": 40
      },
      "push": {
        "quantity": 4
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "particles": {
    "color": {
      "value": ["#f1c40f", "#031a63", "#aa0a3a", "#174014", "#3b9735", "#60c2b5"]
    },
    "links": {
      "color": ["#f1c40f", "#031a63", "#aa0a3a", "#174014", "#3b9735", "#60c2b5"],
      "distance": 150,
      "enable": true,
      "opacity": 0.3,
      "width": 1
    },
    "collisions": {
      "enable": true
    },
    "move": {
      "direction": "none",
      "enable": true,
      "outMode": "bounce",
      "random": false,
      "speed": 1.5,
      "straight": false
    },
    "number": {
      "density": {
        "enable": true,
        "value_area": 800
      },
      "value": 50
    },
    "opacity": {
      "value": 1
    },
    "shape": {
      "type": "circle"
    },
    "size": {
      "random": true,
      "value": 3
    }
  },
  "detectRetina": true
}