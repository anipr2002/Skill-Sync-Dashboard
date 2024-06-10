import { create } from 'zustand';

export interface IListing {
    jobID : string;
    positionName : string;
    companyName : string;
    location : string;
    iconSrc : string | undefined;
    tags? : SkillTag[];
    href : string;
}

export type SkillTag = "Software Engineering" |"Technology"|  "Data Science" | "Product Management" | "Sales" | "Marketing" | "Design" | "Finance" | "Human Resources" | "Operations" | "Customer Support" | "Legal" | "Human Resources"| "Other"

interface IListingStore {
    activeSkillTag : SkillTag[];
    setActiveSkillTag : (tag : SkillTag[]) => void;
}

export const useListingStore = create<IListingStore>((set) => ({
    activeSkillTag : [],
    setActiveSkillTag : (tag) => set((state) => ({...state, activeSkillTag : tag}))
}));