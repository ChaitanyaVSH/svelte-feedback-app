<script>
    import { FeedbackStore } from "../stores/feedbacksStore";
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";

    let text = ""
    let message = null;
    let min = 10;
    let rating = 10;
    let btnDisabled = true;

    const handleSelect = (event) => {
        rating = event.detail;
    }

    const handleInput = () => {
        if(text.trim().length <= min) {
            message = `Text must be at least ${min} characters`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisabled = false
        }
    }

    const handleSubmit = () => {
        const newItem = {
            id: Math.random(),
            rating: rating,
            description: text,
        };
        text = "";
        FeedbackStore.update((feedbacks) => {
          return [newItem, ...feedbacks];
        })
    }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us ?</h2>
    </header>
    <RatingSelect on:rating-select={handleSelect}/>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="input-group">
          <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back">
          <Button disabled={btnDisabled} type="submit">Send</Button>
        </div>
        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
    </form>
</Card>

<style>
    header {
      max-width: 400px;
      margin: auto;
      margin-bottom: 15px;
    }

    header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }

    .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
    }

    input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
    }

    input:focus {
      outline: none;
    }

    .message {
      padding-top: 10px;
      text-align: center;
      color: rebeccapurple;
    }
</style>
