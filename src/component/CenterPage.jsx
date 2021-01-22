import React, {useState} from "react";
import "./style.css";
import coutinho from "../images/coutinho.jpg";

const CenterComponent = () => {

    const [rowCount, setRowCount] = useState(1)
    console.log(rowCount)
    const numberOfWords = (e)=>{
        const words = e.target.value
        let numberOfWords = words.length

        if(numberOfWords === 40){
            setRowCount(prevState =>prevState + 1)
        }

        if(numberOfWords === 80){
            setRowCount(prevState =>prevState + 1)
        }

        if(numberOfWords === 120){
            setRowCount(prevState =>prevState + 1)
        }

        if(numberOfWords === 140){
            setRowCount(prevState =>prevState + 1)
        }
    }
  return (
    <>
      <div className="centerComponent">
        <div className="content-head">
          <h3 style={{ textAlign: "start", width: "50%", marginLeft: "10px" }}>
            Home
          </h3>
          <h3 style={{ textAlign: "end", width: "50%", marginRight: "10px" }}>
            {" "}
            About 
          </h3>
        </div>

        <div>
          <div style={{ display: "flex", margin: "10px" }}>
            <img
              style={{ borderRadius: "50%" }}
              alt=""
              src={coutinho}
              width="50px"
              height="50px"
            />
            <textarea
              class="form-control"
              rows={rowCount}
              id="comment"
              name="text"
              placeholder="What's happening?"
              onChange={numberOfWords}
            ></textarea>
          </div>

          <div>
            <button
              style={{
                borderRadius: "15px",
                backgroundColor: "lightskyblue",
                float: "right",
                margin: "0px 10px 0px 0px",
                color: "white",
                border: "white",
                width: "60px",
                height: "30px",
              }}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterComponent;
