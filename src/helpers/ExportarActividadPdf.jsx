import React, { useState } from "react";
import Axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { API_KEY } from "./constants";
import { PdfDocument } from "./ActividadPdf";

const years = [
  { value: "2010", text: "2010" },
  { value: "2011", text: "2011" },
  { value: "2012", text: "2012" },
  { value: "2013", text: "2013" },
  { value: "2014", text: "2014" },
  { value: "2015", text: "2015" },
  { value: "2016", text: "2016" },
  { value: "2017", text: "2017" },
  { value: "2018", text: "2018" },
  { value: "2019", text: "2019" }
];

export default function ExportarActividadPdf() {
  const [year, setYear] = useState("");
  const [movieDetails, setDetails] = useState([]);
  const [show, setHide] = useState(false);

/*   state = {
    activity: [] } */



  


  const fetchMovie = async e => {
    setYear(e.target.value);
    try {
      let res = await Axios(
        `http://localhost:3000/activity`
      );
      setDetails(res.data);
      setHide(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>actividades</h2>
      <label htmlFor="movies">Selecionar prioridad</label>
     {/*  <select id="movies" className="select" onChange={fetchMovie}>
        <option defaultValue="" disabled>
          Select your option
        </option>
        {years.map((year, index) => {
          return (
            <option key={index} value={year.value}>
              {year.text}
            </option>
          );
        })}
      </select> */}
<button  id="movies" className="select" onClick={fetchMovie}> Descargar actividad </button>
      {show && (
        <PDFDownloadLink
          document={<PdfDocument data={movieDetails} />}
          fileName="movielist.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}
