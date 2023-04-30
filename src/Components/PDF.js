// import React, { useState, useEffect } from "react";
// import jsPDF from "jspdf";
// // import "jspdf-autotable"; // import jspdf-autotable plugin
// import font from "./David.ttf"; // import the font file

// function IdCard() {
//     const [name, setName] = useState("");
//     const [birthdate, setBirthdate] = useState("");

//     useEffect(() => {
//         // Load the font in the document
//         jsPDF.API.registerFont("NotoSansHebrew", font, "normal");
//     }, []);

//     const handleExport = () => {
//         const doc = new jsPDF();
//         doc.setFont("David", "normal"); // Set the font family and style
//         doc.setFontSize(16);
//         doc.text(`תעודת זהות`, 70, 20);
//         doc.setFontSize(14);
//         doc.text(`שם: ${name}`, 20, 40);
//         doc.text(`תאריך לידה: ${birthdate}`, 20, 50);
//         doc.save("id-card.pdf");
//     };

//     return (
//         <div>
//             <h1>תעודת זהות</h1>
//             <div>
//                 <label htmlFor="name">שם:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="birthdate">תאריך לידה:</label>
//                 <input
//                     type="date"
//                     id="birthdate"
//                     value={birthdate}
//                     onChange={(e) => setBirthdate(e.target.value)}
//                 />
//             </div>
//             <button onClick={handleExport}>יצוא ל-PDF</button>
//         </div>
//     );
// }

// export default IdCard;



import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PDF = ({ name, id }) => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        },
        header: {
            fontSize: 24,
            marginBottom: 10,
            textAlign: 'right',
            fontFamily: 'Arial'
        },
        label: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
            textAlign: 'right',
            fontFamily: 'Arial'
        },
        value: {
            fontSize: 16,
            marginBottom: 10,
            textAlign: 'right',
            fontFamily: 'Arial'
        }
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>כרטיס ביקור</Text>
                    <Text style={styles.label}>שם:</Text>
                    <Text style={styles.value}>{name}</Text>
                    <Text style={styles.label}>תז:</Text>
                    <Text style={styles.value}>{id}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default PDF;
