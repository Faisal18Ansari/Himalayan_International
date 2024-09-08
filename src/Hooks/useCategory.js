import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

const useCategory = (c) => {
  const [Category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        setError(null);

        // Reference to the categories collection
        const CategoriesRef = collection(db, "Categories");

        // Query to filter categories by status and optionally by category name
        const q = query(
          CategoriesRef,
          where("Status", "==", true)
          // Add more filters if necessary, e.g., where("Name", "==", c)
        );

        // Fetch the documents
        const querySnapshot = await getDocs(q);
        const fetchedCategories = querySnapshot.docs.map((doc) => doc.data().Name);

        setCategory(fetchedCategories);
       
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [c]); // Dependency array includes 'c' to refetch when 'c' changes

  return Category;
};

export { useCategory };
