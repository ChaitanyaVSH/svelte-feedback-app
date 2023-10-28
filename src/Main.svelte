<script>
    import FeedbackForm from "./components/FeedbackForm.svelte";
    import FeedbackList from "./components/FeedbackList.svelte";
    import FeedbackStats from "./components/FeedbackStats.svelte";

    // const submitRating = (event) => {
    //     const updatedFeedbacks = [...feedbacks, event.detail]
    //     feedbacks = updatedFeedbacks;
    // }

    // const deleteHandler = (event) => {
    //     console.log("event", event);
    //     const updatedFeedbacks = feedbacks.filter((fb) => fb.id!=event.detail.id)
    //     feedbacks = updatedFeedbacks;
    // }
</script>

<div class="container">
    <FeedbackForm />
    <FeedbackStats />
    <FeedbackList />
</div>
