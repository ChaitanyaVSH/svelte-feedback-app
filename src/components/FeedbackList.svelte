<script>
    import FeedbackItem from "./FeedbackItem.svelte";
    export let feedbacks = [];
</script>

{#each feedbacks as feedback (feedback.id)}
    <FeedbackItem item={feedback} on:delete-handler/>
{/each}
