import React, { useState } from "react";
import Header from "../components/Header";
import CircularProgress from "@mui/material/CircularProgress";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DoneIcon from "@mui/icons-material/Done";
function Playground() {
  const [result, setresult] = useState("");
  const [errorMsg, seterrorMsg] = useState("");
  const [error, seterror] = useState();
  const [url, seturl] = useState("");
  const [loading, setloading] = useState(false);
  const [results, setresults] = useState([]);
  const checkPhishing = async () => {
    try {
      seterror(false);
      setloading(true);
      const request = await fetch("http://127.0.0.1:8000/model", {
        method: "POST",
        body: JSON.stringify({ url_name: url }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await request.json();
      console.log(response)
      if (response.success) {
        const object = {
          url: url,
          result: response.output,
        };
        setresults((e) => [...e, object]);
        setresult(response.output);
        setloading(false);
        if(response.output == "Phishing URL"){
          seterror(true);
          seterrorMsg(response.output);
        }
      } else {
        seterrorMsg(response.output);
        setloading(false);
        seterror(true);
      }
    } catch (error) {
      setloading(false);
      seterrorMsg("Internal server error");
      seterror(true);
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 9999,
        color: "white",
        top: 20,
        left: 20,
        width: "100%",
      }}
    >
      <Header />
      <h1 className="text-5xl text-center mt-10 h-auto">Playground</h1>
      <p className="text-xl mt-5 text-center">
        With the help of our machine learning model you can acknowledge if a url
        is phishing or not.
      </p>
      <div className="flex flex-row mt-2 ">
        <div className="w-full border-r-[1px] border-white pr-4">
          <div className="h-[83vh] w-full flex flex-col mt-10 items-center">
            <div className="flex flex-row gap-10 w-full justify-center">
              <input
                value={url}
                onChange={(e) => seturl(e.target.value)}
                className="w-[70%] h-[60px] border-[1px] border-white rounded-lg placeholder:text-gray-300 placeholder:text-xl text-xl text-white pl-5 bg-transparent"
                placeholder="Enter Url here"
              />
              <button
                onClick={checkPhishing}
                className="w-[150px] text-md h-[60px] bg-white border-white border-[1px] rounded-lg text-black "
              >
                {loading ? <CircularProgress /> : <p>Submit</p>}
              </button>
            </div>
            <div className="mt-10 flex flex-col justify-center items-center">
              {results.length === 0 && !loading ? (
                <p className="pb-10">Result will be displayed here</p>
              ) : loading ? (
                <CircularProgress />
              ) : error ? (
                <span>
                  {errorMsg} <ReportProblemIcon sx={{ color: "red" }} />
                </span>
              ) : (
                <span>
                  {result} <DoneIcon sx={{ color: "green" }} />
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full pt-10 pl-10">
          <p className="text-xl text-white">Results : </p>
          {results.map((e) => {
            return (
              <p className="mt-2">
                {e.url} {"->"} {e.result}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Playground;
