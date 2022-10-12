import { PARTNERS } from "../../app/PARTNERS";

export const selectAllPartners = () => {
    return PARTNERS
};

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner)=>partner.featured);
};