import { IUsersLeavingReviews } from "../types";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";

export const addReview = async (review: string, rating: number): Promise<IUsersLeavingReviews> => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        throw new Error("You must log in to leave a review.");
    }

    const newReview: IUsersLeavingReviews = {
        reviewId: `review-${Date.now()}`,
        userId: user.uid,
        username: user.isAnonymous ? "Anonymous" : user.email || "User",
        review,
        rating,
        timestamp: new Date().toISOString(),
    };

    try {
        const docRef = await addDoc(collection(db, "reviews"), newReview);
        return { ...newReview, docId: docRef.id };
    } catch (error) {
        throw error; 
    }
};
