
declare module 'star-ratings-react' {
    interface StarRatingProps {
        rating: number
        starDimension?: string;
        starSpacing?: string;
        changeRating?: (newRating: number) => void;
        // Add other props as needed
    }
    return 

    export const StarRating: React.FC<StarRatingProps>;
    export default StarRating;
}
