<script>
    import { FeedbackStore } from "../stores/feedbacksStore";

    $: count = $FeedbackStore.length
    $: average = $FeedbackStore.reduce((a, {rating}) => a + rating, 0) / $FeedbackStore.length
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
