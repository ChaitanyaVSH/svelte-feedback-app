<script>
    export let count;
    export let average = 0;
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
