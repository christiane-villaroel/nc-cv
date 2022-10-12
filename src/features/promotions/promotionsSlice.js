import { PROMOTIONS } from "../../app/PROMOTIONS";

export const selectFeaturedPromotion = () =>{
    return PROMOTIONS.find((promotion) => promotion.featured);
};