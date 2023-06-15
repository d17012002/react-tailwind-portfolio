import styled from "styled-components";
import { useEffect, useState } from "react";

const BIRD_HEIGHT = 28;
const BIRD_WIDTH = 33;
const WALL_HEIGHT = 350;
const WALL_WIDTH = 350;
const GRAVITY = 5;
const OBJ_WIDTH = 52;
const OBJ_SPEED = 8;
const OBJ_GAP = 200;

function App() {
  const [isStart, setIsStart] = useState(false);
  const [birdpos, setBirspos] = useState(300);
  const [objHeight, setObjHeight] = useState(0);
  const [objPos, setObjPos] = useState(WALL_WIDTH);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let intVal;
    if (isStart && birdpos < WALL_HEIGHT - BIRD_HEIGHT) {
      intVal = setInterval(() => {
        setBirspos((birdpos) => birdpos + GRAVITY);
      }, 24);
    }
    return () => clearInterval(intVal);
  });

  useEffect(() => {
    let objval;
    if (isStart && objPos >= -OBJ_WIDTH) {
      objval = setInterval(() => {
        setObjPos((objPos) => objPos - OBJ_SPEED);
      }, 24);

      return () => {
        clearInterval(objval);
      };
    } else {
      setObjPos(WALL_WIDTH);
      setObjHeight(Math.floor(Math.random() * (WALL_HEIGHT - OBJ_GAP)));
      if (isStart) setScore((score) => score + 1);
    }
  }, [isStart, objPos]);

  useEffect(() => {
    let topObj = birdpos >= 0 && birdpos < objHeight;
    let bottomObj =
      birdpos <= WALL_HEIGHT &&
      birdpos >=
        WALL_HEIGHT - (WALL_HEIGHT - OBJ_GAP - objHeight) - BIRD_HEIGHT;

    if (
      objPos >= OBJ_WIDTH &&
      objPos <= OBJ_WIDTH + 80 &&
      (topObj || bottomObj)
    ) {
      setIsStart(false);
      setBirspos(300);
      setScore(0);
    }
  }, [isStart, birdpos, objHeight, objPos]);
  const handler = () => {
    if (!isStart) setIsStart(true);
    else if (birdpos < BIRD_HEIGHT) setBirspos(0);
    else setBirspos((birdpos) => birdpos - 50);
  };
  return (
    <section className="bg-gray-900 p-5 sm:p-19 md:flex md:items-center ">
      <div className="mx-10 px-4 md:w-1/2 ">
        <center>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How far can you go?</h2>
        <h1 className="text-base mt-5 text-red-500 font-semibold tracking-wide uppercase">{" < "}Flappy Bird Game {" /> "}</h1>
        </center>
      </div>
      <div className="mx-auto px-4  md:w-1/2">
        <Home onClick={handler}>
          <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
            {!isStart ? <Startboard>Less Go!</Startboard> : null}
            <Obj
              height={objHeight}
              width={OBJ_WIDTH}
              left={objPos}
              top={0}
              deg={180}
            />
            <Bird
              height={BIRD_HEIGHT}
              width={BIRD_WIDTH}
              top={birdpos}
              left={100}
            />
            <Obj
              height={WALL_HEIGHT - OBJ_GAP - objHeight}
              width={OBJ_WIDTH}
              left={objPos}
              top={
                WALL_HEIGHT - (objHeight + (WALL_HEIGHT - OBJ_GAP - objHeight))
              }
              deg={0}
            />
          </Background>
        </Home>
      </div>
    </section>
  );
}

export default App;

const Home = styled.div`
  margin-left: 15%;
  margin-top: 30px;
`;
const Background = styled.div`
  background-image: url("../src/assets/background-day.png");
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  overflow: hidden;
  border: 2px solid black;
  border-radius: 5%;
`;

const Bird = styled.div`
  position: absolute;
  background-image: url("../src/assets/yellowbird-upflap.png");
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

const Obj = styled.div`
  position: relative;
  background-image: url("../src/assets/pipe-green.png");
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: rotate(${(props) => props.deg}deg);
`;

const Startboard = styled.div`
  position: relative;
  top: 49%;
  background-color: black;
  padding: 6px;
  width: 80px;
  left: 50%;
  margin-left: -50px;
  text-align: center;
  font-size: 13px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
`;
