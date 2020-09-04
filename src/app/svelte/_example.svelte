<script>
    export let name; // prop attribute
    let other = 'striong'; // local state
    setTimeout(() => other = 'other', 2000);

    $: console.log(other) // reactive watch and execute proptery
</script>

<main>
    <h1 on:click={() => other = 'new'}>Hello {other}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
    main {
        background-color: cornflowerblue;
        text-align: center;
        padding: 1em;
        max-width: 75vw;
        margin: 0 auto;
    }
    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
</style>