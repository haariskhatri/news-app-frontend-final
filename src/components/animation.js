import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function animation() {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="login-animation">
      <Particles
        id="tsparticles"
        init={particlesInit}
        params={{
          background: {
            color: "rgb(255, 255, 255)",
            opacity: 0,
          },
          fpsLimit: 60,
          particles: {
            line_linked: {
              enable: true,
              distance: 150,
              color: "#1F363D",
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1.4,
            },
            color: {
              value: "#f1f1f1",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 130,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 1.6,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 1,
            },
            move: {
              enable: true,
            },
            interactivity: {
              detects_on: "canvas",
              events: {
                resize: true,
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
          },
          retina_detect: true,
        }}
        canvas={{
          style: {
            position: "absolute",
            width: "100%",
            height: "100%",
          },
        }}
      />
    </div>
  );
}
