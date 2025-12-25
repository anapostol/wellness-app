const { db } = require('../config/firebaseConfig');

class FirestoreService {
  
//select *
    async getCollection(collectionName) {
        try {
            const snapshot = await db.collection(collectionName).get();
            
            if (snapshot.empty) {
                return [];
            }

            const documents = [];
            snapshot.forEach(doc => {
                documents.push({
                id: doc.id,
                ...doc.data()
                });
            });

            return documents;
        } catch (error) {
            console.error(`Error getting collection ${collectionName}:`, error);
            throw error;
        }
    }

//select by id
    async getDocument(collectionName, docId) {
        try {
            const docRef = db.collection(collectionName).doc(docId);
            const doc = await docRef.get();

            if (!doc.exists) {
                return null;
            }

            return {
                id: doc.id,
                ...doc.data()
            };
        } catch (error) {
            console.error(`Error getting document ${docId}:`, error);
            throw error;
        }
    }

//create 
    async createDocument(collectionName, data) {
        try {
            const docRef = await db.collection(collectionName).add({
                ...data,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });

            const newDoc = await docRef.get();

            return {
                id: newDoc.id,
                ...newDoc.data()
            };
        } catch (error) {
            console.error(`Error creating document in ${collectionName}:`, error);
            throw error;
        }
    }

//update
    async updateDocument(collectionName, docId, data) {
        try {
            const docRef = db.collection(collectionName).doc(docId);
            
            await docRef.update({
                ...data,
                updatedAt: new Date().toISOString()
            });

            const updatedDoc = await docRef.get();

            return {
                id: updatedDoc.id,
                ...updatedDoc.data()
            };
        } catch (error) {
            console.error(`Error updating document ${docId}:`, error);
            throw error;
        }
    }

//delete
    async deleteDocument(collectionName, docId) {
        try {
            await db.collection(collectionName).doc(docId).delete();
            return true;
        } catch (error) {
            console.error(`Error deleting document ${docId}:`, error);
            throw error;
        }
    }

//query cu filtre
    async queryDocuments(collectionName, filters = []) {
        try {
            let query = db.collection(collectionName);

            //apply filters
            filters.forEach(filter => {
                query = query.where(filter.field, filter.operator, filter.value);
            });

            const snapshot = await query.get();

            if (snapshot.empty) {
                return [];
            }

            const documents = [];
            snapshot.forEach(doc => {
                documents.push({
                id: doc.id,
                ...doc.data()
                });
            });

            return documents;
        } catch (error) {
            console.error(`Error querying ${collectionName}:`, error);
            throw error;
        }
    }
}

module.exports = new FirestoreService();