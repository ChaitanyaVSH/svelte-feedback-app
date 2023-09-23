<script>
	let firstName = "Chaitu"
	let lastName = "Maverick"
	$: name = firstName + " " + lastName;
	
	let color = "orange";
	let showText = false;

	let todos = [
		{
			id: 1,
			task: "Learn svelte"
		},
		{
			id: 2,
			task: "Write test cases"
		},
		{
			id: 3,
			task: "Raise CRs"
		}
	];

	const clickHandler = () => {
		// alert("Clicked")
		color = (color == "red") ? "blue" : "red";
		showText = !showText;
		todos = [...todos, {
			id: 4,
			task: "Wash clothes"
		}]
	}

	

	console.log("Yayyy!");
</script>

<main>
	<h1>Hello <span style="color: {color}">{name}!</span></h1>
	{#if showText}
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{:else}
		<p>No text</p>
	{/if}
	<button on:click={() => clickHandler()}>Click me !</button>
	{#each todos as todo}
		<p>{todo.id}: {todo.task}</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>