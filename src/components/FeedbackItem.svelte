<script>
    import Card from "./Card.svelte"
    export let item;
</script>

<Card>
    <div class="rating">
        {item.rating}
    </div>

    <div class="close">X</div>

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
    }

    .close:hover {
        color: red;
    }
</style>
