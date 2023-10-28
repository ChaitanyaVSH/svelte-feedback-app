<script>
    import { onMount, onDestroy } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    import { FeedbackStore } from "../stores/feedbacksStore";
    import FeedbackItem from "./FeedbackItem.svelte";
    let feedbacks = [];
    let unsubscribe = () => {}

    onMount(() => {
        unsubscribe = FeedbackStore.subscribe((data) => feedbacks = data);
    })

    onDestroy(() => {
        unsubscribe();
    });
</script>

{#each feedbacks as feedback (feedback.id)}
    <div
        in:scale
        out:fade={{ delay: 0, duration: 300}}
    >
        <FeedbackItem item={feedback} on:delete-handler/>
    </div>
{/each}
