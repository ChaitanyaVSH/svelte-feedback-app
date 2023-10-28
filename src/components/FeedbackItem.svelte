<script>
    import { FeedbackStore } from "../stores/feedbacksStore";
    import Card from "./Card.svelte";
    export let item;

    const handleDelete = (id) => FeedbackStore.update((feedbacks) => feedbacks.filter((fb) => fb.id!=id));

</script>

<Card>
    <div class="rating">
        {item.rating}
    </div>

    <button class="close" on:click={() => handleDelete(item.id)}>X</button>

    <p class="text">{item.description}</p>
</Card>

<style>
    .rating {
        position: absolute;
        top: -10px;
        left: 10px;
        border: 1px solid #fff;
        width: 50px;
        height: 50px;
        background-color: #ff6a95;
        color: #fff;
        border-radius: 50%;
        text-align: center;
        padding: 10px;
        font-size: 19px;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
    }

    .close:hover {
        color: red;
    }
</style>
