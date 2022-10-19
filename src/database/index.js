import {
  doc,
  setDoc,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  onSnapshot,
  Timestamp,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebaseConfig";

const addData = async (collectionName, data) => {
  var ref = await addDoc(collection(db, collectionName), {
    ...data,
    created: Timestamp.now(),
  });

  updateData(collectionName, { uid: ref.id }, ref.id);
};

const updateData = async (collectionName, data, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
  } catch (e) {}
};
const fetchData = async (collectionName, setData) => {
  const q = query(collection(db, collectionName));

  onSnapshot(q, (querySnapShot) => {
    setData(querySnapShot.docs.map((doc) => ({ data: doc.data()})));
  });
};

const deleteData = async (collectionName, id) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};

const fetchById = async (collectionName, id, setData) => {
  const q = query(collection(db, collectionName), where("uid", "==", id));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    setData(doc.data());
  });
};

const deleteDocument = (uid, collectionName) => {
  const docRef = doc(db, collectionName, uid);
  deleteDoc(docRef);
};

// const deleteUser = (uid) => {
//   const docRef = doc(db, "users", uid);
//   deleteDoc(docRef);
// };

const findAndDelete = async (collectionName, fieldName, fieldValue) => {
  const collectionRef = collection(db, collectionName);

  const q = query(collectionRef, where(fieldName, "==", fieldValue));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDocument(doc.id, collectionName);
  });
};

export {
  fetchData,
  addData,
  fetchById,
  deleteDocument,
  updateData,
  deleteData,
  findAndDelete,
};
