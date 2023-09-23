<script>
    import FeedbackList from "./components/FeedbackList.svelte";

    let feedbacks = [
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
            description: "Worst produt so far from this company, do not use at all."
        }
    ];

    const deleteHandler = (id) => {
        const updatedFeedbacks = feedbacks.filter((fb) => fb.id!=id)
        feedbacks = updatedFeedbacks;
    }
</script>

<div class="container">
    <FeedbackList {feedbacks} handleDelete={(id) => deleteHandler(id)}/>
</div>
