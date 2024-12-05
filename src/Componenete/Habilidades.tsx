import "../Style/Habilidades.css";
import Icon from "./Icon";
import css3 from "../assets/svg/css3.svg";
import html5 from "../assets/svg/html5.svg";
import js from "../assets/svg/js.svg";
import typreScript from "../assets/svg/typescript.svg";
import bootstrap from "../assets/svg/bootstrap.svg";
import material from "../assets/svg/material-ui.png";
import react from "../assets/svg/react.svg";
import php from "../assets/svg/phpfont.svg";
import laravel from "../assets/svg/laravel.svg";
import mysql from "../assets/svg/Mysql.svg";
import node from "../assets/svg/node.svg";
import git from "../assets/svg/git.svg";
function Habilidades() {
  return (
    <div className="Habilidades">
      HABILIADES
      <div className="aprendiendo-container">
        <div>
          Front-end
          <div className="aprendiendo-front">
            <div
              style={{
                backgroundColor: "#1572B6",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              <Icon src={css3} />
              <div style={{ textAlign: "center", fontSize: "25px" }}>CSS</div>
            </div>
            <div
              style={{
                backgroundColor: "#E34F26",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              {" "}
              <Icon src={html5} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "110px",
                  height: "40px",
                  marginLeft: "-22px",
                }}
              >
                HTML
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#F4D03F",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              {" "}
              <Icon src={js} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "110px",
                  height: "40px",
                  marginLeft: "-25px",
                }}
              >
                JavaScript
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#7952B3",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              {" "}
              <Icon src={bootstrap} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "110px",

                  marginLeft: "-25px",
                }}
              >
                Bootstrap
              </div>
            </div>
            <div
              style={{
                backgroundColor: "White",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              {" "}
              <Icon src={material} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "120px",
                  height: "40px",
                  marginLeft: "-30px",
                }}
              >
                Material-ui
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#61DAFB",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              {" "}
              <Icon src={react} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "110px",
                  height: "40px",
                  marginLeft: "-25px",
                }}
              >
                React
              </div>
            </div>
          </div>
        </div>
        <div>
          Back-end
          <div className="aprendiendo-back">
            <div
              style={{
                backgroundColor: "#1572B6",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              <Icon src={typreScript} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "110px",
                  height: "40px",
                  marginLeft: "-25px",
                }}
              >
                TypeScript
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#7952B3",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              <Icon src={php} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "110px",
                  height: "40px",
                  marginLeft: "-25px",
                }}
              >
                Php
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              <Icon src={mysql} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "110px",
                  height: "40px",
                  marginLeft: "-25px",
                }}
              >
                MySql
              </div>
            </div>
            <div
              style={{
                backgroundColor: "White",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              <Icon src={laravel} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "110px",
                  height: "40px",
                  marginLeft: "-25px",
                }}
              >
                Laravel
              </div>
            </div>
            <div
              style={{
                backgroundColor: "White",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              <Icon src={node} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "110px",
                  height: "40px",
                  marginLeft: "-25px",
                }}
              >
                Node
              </div>
            </div>
          </div>
        </div>
        <div>
          Complememnetarias
          <div className="aprendiendo-complementos">
            <div
              style={{
                backgroundColor: "White",
                borderRadius: "15px",
                display: "inline-block",
                width: "60px",
                height: "60px",
                paddingTop: "10px",
              }}
            >
              <Icon src={git} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  width: "110px",
                  height: "40px",
                  marginLeft: "-25px",
                }}
              >
                Git
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
