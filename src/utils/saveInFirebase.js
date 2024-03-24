// Add a second document with a generated ID.
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
export default async function saveInDb(company, employees, email) {
  try {
    if (!email) throw new Error("Email necesario");
    const docRef = await addDoc(collection(db, "emails"), {
      company: company,
      employees: employees,
      email: email,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
