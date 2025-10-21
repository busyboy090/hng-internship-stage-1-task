// test script
function test () {
    const testIds = [
        "test-about-page",
        "test-about-bio",
        "test-about-goals",
        "test-about-confidence",
        "test-about-future-note",
        "test-about-extra"
    ]

    for (const id of testIds) {
        const element = document.querySelector(`[data-testid="${id}"]`);
        if(element) {
            console.log(`Element with data-testid="${id}" found.`);
        } else {
            console.log(`Element with data-testid="${id}" not found.`)
        }
    }
}

test()