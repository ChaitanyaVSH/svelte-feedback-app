import { writable } from "svelte/store";


export const FeedbackStore = writable([
    {
        id: 0,
        rating: 9,
        description: "This is the best product I have ever seen, this is amazin to the next level."
    },
    {
        id: 1,
        rating: 5,
        description: "Average to use product, comes with lots of ifs and buts. Does not recommend for children."
    },
    {
        id: 2,
        rating: 1,
        description: "Worst product so far from this company, do not use at all."
    },
    {
        id: 3,
        rating: 1,
        description: "Worst product so far from this company, do not use at all."
    }
]);
