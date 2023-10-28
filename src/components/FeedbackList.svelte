<script>
    import { fade, scale } from 'svelte/transition';
    import FeedbackItem from "./FeedbackItem.svelte";
    export let feedbacks = [];
</script>

{#each feedbacks as feedback (feedback.id)}
    <div
        in:scale
        out:fade={{ delay: 0, duration: 300}}
    >
        <FeedbackItem item={feedback} on:delete-handler/>
    </div>
{/each}
