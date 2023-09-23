<script>
    import FeedbackItem from "./FeedbackItem.svelte";
    export let feedbacks = [];
    export let handleDelete;
</script>

{#each feedbacks as feedback (feedback.id)}
    <FeedbackItem item={feedback} handleDelete={handleDelete}/>
{/each}
