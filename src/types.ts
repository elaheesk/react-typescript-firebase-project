
export interface IProductReview {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}
export interface IProduct {
    id: number;
    title: string;
    category: string;
    brand: string;
    price: number;
    description: string;
    thumbnail: string;
    stock: number;
    availabilityStatus: string;
    rating: number;
    reviews: IProductReview[];
    count: number;
}

export interface IFormData {
    name: IFormDataObject;
    email: IFormDataObject;
    message: IFormDataObject;
}

export interface IFormDataObject {
    value: string;
    hasError: boolean;
    touched: boolean;
    errorMessage?: string;
}

export interface IUser {
    uid: string;
    email: string | null;
    emailVerified: boolean;
    isAnonymous: boolean;
}

export interface IUsersLeavingReviews {
    reviewId: string;
    userId: string;
    username: string;
    review: string;
    rating: number,
    timestamp: string;
    docId?: string;
}
export interface IUserReviewInput {
    review: string;
    rating: number;
}
export interface LoginFormProps {
    onLogin: () => void;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    tab: string;
}

export interface IAlertProps {
    headingAlert: string;
    messageAlert: string;
    bgColor: string;
}