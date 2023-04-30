import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import React, { useState } from 'react';
import Button from "@mui/material/Button";
// import PDF from "./Components/PDF";


function App() {
  // const [signType, setSignType] = useState(true);
  // const handleSignType = (event) => {
  //   setSignType(!signType);
  // };
  const [open, setOpen] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const logInfo = () => {
    console.log(userInfo);
  };
  function executeScript() {
    fetch('http://localhost:3333/execute-script')
      .then(response => response.text())
      .then(output => {
        console.log(output);
        // do something with the script output here
      })
      .catch(error => {
        console.error(error);
        // handle the error here
      });
  }


  return (
    <div className="App">
      <Button variant="outlined" onClick={executeScript}>  Execute my script please</Button>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign in
      </Button >
      <Signin
        open={open}
        onClose={handleClose}
        setUserInfo={setUserInfo}
      />
      <Button onClick={logInfo}>Log info</Button>
    </div>

  );
}

export default App;

// import React from 'react';
// import PDF from './Components/PDF';
// import { PDFDownloadLink, Font } from '@react-pdf/renderer';

// const App = () => {
//   Font.register({
//     family: 'Arial',
//     src: './Components/arial.ttf'
//   });
//   return (

//     <div>
//       <PDFDownloadLink document={<PDF name="אריק" id="12345" />} fileName="business-card.pdf">
//         {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
//       </PDFDownloadLink>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import JSZip from "jszip";
// import { saveAs } from "file-saver";
// import { Document, Packer, Paragraph, TextRun } from "docx";
// import streamSaver from "streamsaver";

// function App() {
//   const [name, setName] = useState("");
//   const [birthdate, setBirthdate] = useState("");

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleBirthdateChange = (event) => {
//     setBirthdate(event.target.value);
//   };

//   const handleExport = () => {
//     const doc = new Document();
//     doc.properties.creator = "Siuu";

//     const generalInfoParagraph = new Paragraph({
//       text: "מידע כללי:",
//       style: "heading1",
//     });
//     const nameRun = new TextRun({
//       text: `שם: ${name}`,
//       bold: true,
//     });
//     const birthdateRun = new TextRun({
//       text: `תאריך לידה: ${birthdate}`,
//       bold: true,
//     });
//     const nameParagraph = new Paragraph({
//       children: [nameRun],
//     });
//     const birthdateParagraph = new Paragraph({
//       children: [birthdateRun],
//     });

//     doc.addSection({
//       children: [
//         generalInfoParagraph,
//         nameParagraph,
//         birthdateParagraph,
//       ],
//     });

//     const blob = new Blob([Packer.toBuffer(doc)], {
//       type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     });

//     const fileStream = streamSaver.createWriteStream("מידע כללי.docx", {
//       size: blob.size,
//     });

//     const readableStream = blob.stream();

//     if (window.WritableStream && readableStream.pipeTo) {
//       return readableStream.pipeTo(fileStream);
//     } else {
//       const writer = fileStream.getWriter();
//       return new Response(readableStream).body.pipeTo(writer);
//     }
//   };

//   return (
//     <div>
//       <label>
//         שם:
//         <input type="text" value={name} onChange={handleNameChange} />
//       </label>
//       <br />
//       <label>
//         תאריך לידה:
//         <input type="date" value={birthdate} onChange={handleBirthdateChange} />
//       </label>
//       <br />
//       <button onClick={handleExport}>ייצא ל-Word</button>
//     </div>
//   );
// }

// export default App;
