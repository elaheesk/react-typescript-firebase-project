import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../UsersContext";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { IUserReviewInput, IUsersLeavingReviews } from "../types";
import { addReview } from "../utils/backendFunctions";
import { ratingValues } from "../data";
const AddReview = () => {
    const { user, setUser, setEmail, setPassword, userReviewInput, setReviewsList, setUserReviewInput, reviewsList } = useContext(UsersContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            setEmail("");
            setPassword("");
            setUser(null);
            navigate("/reviews")
        } catch (err) {
            alert(err)
        }
    };
    const handleAddReview = async () => {
        if (!userReviewInput.review || userReviewInput.rating <= 0) {
            alert("Please provide a valid review and rating.");
            return;
        }
        try {
            const newReview = await addReview(
                userReviewInput.review,
                userReviewInput.rating
            );
            setReviewsList((prevReviews: IUsersLeavingReviews[]) => [...prevReviews, newReview]);
            setUserReviewInput({ review: "", rating: 0 });
        } catch (error) {
            alert("There was an issue submitting your review. Please try again.");
        }
    };

    const deleteReview = async (reviewId: string) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            alert("You must log in to delete a review.");
            return;
        }

        try {
            const reviewRef = doc(db, "reviews", reviewId);
            const reviewDoc = await getDoc(reviewRef);

            if (!reviewDoc.exists()) {
                alert("Review not found.");
                return;
            }
            const reviewData = reviewDoc.data();

            if (reviewData?.userId === user.uid) {
                await deleteDoc(reviewRef);

                alert("Review successfully deleted.");
            } else {
                alert("You can only delete your own reviews.");
            }
        } catch (error) {
            alert(error)
        }
    };
    const handleSelectRating = (e: any) => {
        const val = e.target.value;
        setUserReviewInput((prev: IUserReviewInput) => ({
            ...prev,
            rating: Number(val),
        }))
    }
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-xl text-gray-700 font-extrabold md:text-xl lg:text-4xl">Welcome!</h1>
                <h2 className="text-xl text-gray-700 font-bold md:text-xl lg:text-2xl mb-4"> You can now leave a review or rank your favorite feature.</h2>
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1  px-4 bg-gray-300 dark:bg-gray-700 rounded">
                        <h3 className="text-xl text-gray-700 font-bold my-4">Add review</h3>
                        <div className="h-[460px] rounded-lg  mb-4">
                            <div className="shadow-2xl bg-gray-200  rounded px-4 pt-4 pb-6 mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Write your review
                                    </label>
                                    <textarea
                                        placeholder="Write your review"
                                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={userReviewInput.review}
                                        onChange={(e) =>
                                            setUserReviewInput((prev: IUserReviewInput) => ({ ...prev, review: e.target.value }))
                                        }
                                    >
                                    </textarea>
                                </div>
                                <div className="mb-4 w-[6rem]">
                                    <label className="block text-gray-700  text-sm font-bold mb-2">
                                        Add Rating
                                    </label>
                                    <select name="rating" value={userReviewInput.rating} onChange={handleSelectRating} id="countries"
                                        className="p-2 border border-gray-300 text-gray-900 text-sm rounded">
                                        {ratingValues.map((option) =>
                                            <option key={option.title} value={option.value}>{option.title}</option>
                                        )}
                                    </select>
                                </div>
                                <button type="button" onClick={handleAddReview} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">Submit Review</button>
                            </div>
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-2/3 px-2">
                                <p className="w-full dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold ">Logged in as {user?.email || "an anonymous user"}!</p>
                            </div>
                            <div className="w-1/3 px-2">
                                <button onClick={handleLogout} type="button" className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" >Logout</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-xl mb-2 font-bold text-gray-700 dark:text-whitemb-2">All reviews</h2>
                        {reviewsList.map((review: IUsersLeavingReviews) => (
                            <div key={review.reviewId} className="mb-2 rounded p-4 pt-1 bg-gray-300">
                                <div className="flex mb-1 bg-gray-300 w-full flex justify-between">
                                    <div className="mr-4 ">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Written by </span>
                                        <span className="text-gray-600 dark:text-gray-300">{review.username}</span>
                                    </div>
                                    <div className="">
                                        <span className="text-gray-600 dark:text-gray-300">{review.timestamp.slice(0, 10)}</span>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Rated: {review.rating}/5</span>
                                    <div className="flex items-center mt-0">
                                        <button className={`w-3 h-3 rounded-full mr-1 ${review.rating === 1 || review.rating > 1 ? "bg-green-500" : "bg-gray-500"}`}></button>
                                        <button className={`w-3 h-3 rounded-full mr-1 ${review.rating === 2 || review.rating > 2 ? "bg-green-500" : "bg-gray-500"}`}></button>
                                        <button className={`w-3 h-3 rounded-full mr-1 ${review.rating === 3 || review.rating > 3 ? "bg-green-500" : "bg-gray-500"}`}></button>
                                        <button className={`w-3 h-3 rounded-full mr-1 ${review.rating === 4 || review.rating > 4 ? "bg-green-500" : "bg-gray-500"}`}></button>
                                        <button className={`w-3 h-3 rounded-full mr-1 ${review.rating === 5 ? "bg-green-500" : "bg-gray-500"}`}></button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center mt-2 italic">
                                        {review.review} </div>
                                </div>
                                {auth.currentUser?.uid === review.userId && (
                                    <button className="bg-gray-900 dark:bg-gray-600 text-white py-1 px-4 rounded font-bold hover:bg-gray-800 " onClick={() => deleteReview(review.docId ? review.docId : "")}>Delete</button>)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddReview;