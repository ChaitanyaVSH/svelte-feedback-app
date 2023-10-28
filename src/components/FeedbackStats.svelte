<script>
    import { FeedbackStore } from "../stores/feedbacksStore";
    let count = 0;
    let average = 0;

    FeedbackStore.subscribe((data) => {
        count = data.length;
        average = data.reduce((a,{rating}) => a + rating, 0) / data.length;
    })
</script>

<div class="stats">
    <h3>{count} Reviews</h3>
    <h3>Ratings Average: {average}</h3>
</div>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
