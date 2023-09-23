<script>
    import FeedbackList from "./components/FeedbackList.svelte";
    import FeedbackStats from "./components/FeedbackStats.svelte";

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

    $: count = feedbacks.length;
    $: average = feedbacks.reduce((a,{rating}) => a + rating, 0) / feedbacks.length;

    const deleteHandler = (event) => {
        console.log("event", event);
        const updatedFeedbacks = feedbacks.filter((fb) => fb.id!=event.detail.id)
        feedbacks = updatedFeedbacks;
    }
</script>

<div class="container">
    <FeedbackStats {count} {average}/>
    <FeedbackList {feedbacks} on:delete-handler={(event) => deleteHandler(event)}/>
</div>
