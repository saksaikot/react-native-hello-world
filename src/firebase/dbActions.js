// import { dbTutorials as db } from "../firebase";
// const db = firebase.ref("/tutorials");

export default function actions(db) {
  const getAll = () => {
    return db;
  };

  const create = (data) => {
    return db.push(data);
  };

  const update = (key, data) => {
    return db.child(key).update(data);
  };

  const remove = (key) => {
    return db.child(key).remove();
  };

  const removeAll = () => {
    return db.remove();
  };
  const getAllAsArray = () => {
    return new Promise((resolve, reject) => {
      const arr = [];
      db.once(
        "value",
        (snapshot) => {
          const snapshotValues = snapshot.val();
          for (let key in snapshotValues) {
            arr.push({ key, ...snapshotValues[key] });
          }
          // return arr;
          resolve(arr);
        },
        (errorObject) => {
          reject(errorObject.name);
          // console.log("The read failed: " + errorObject.name);
        }
      );
    });
  };
  return {
    getAll,
    create,
    update,
    remove,
    removeAll,
    getAllAsArray,
  };
}
