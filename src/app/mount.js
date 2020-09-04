import App from './svelte/app.html'

const app = new App({
    target: document.body,
    props: {
        name: 'worldio'
    }
});

export default app