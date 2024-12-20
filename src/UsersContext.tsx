import React, { createContext, ReactNode, useState } from "react";
import { IUser, IUserReviewInput, IUsersLeavingReviews } from "./types";

const UsersContext = createContext<any>(null);
type UsersProviderProps = {
    children: ReactNode;
};
const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
    const [reviewsList, setReviewsList] = useState<IUsersLeavingReviews[]>([]);
    const [user, setUser] = useState<IUser | null>(null);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [userReviewInput, setUserReviewInput] = useState<IUserReviewInput>({
        review: "",
        rating: 0,
    });
  
    return (
        <UsersContext.Provider value={{ reviewsList, setReviewsList, userReviewInput, setUserReviewInput, user, setUser, email, setEmail, password, setPassword }}>
            {children}
        </UsersContext.Provider>
    )
}
export { UsersContext, UsersProvider };