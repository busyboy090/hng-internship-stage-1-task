const timeElement = document.querySelector('[data-testid="test-user-time"]');
timeElement.textContent = Date.now();


// test script
function test () {
    const testIds = [
        "test-profile-card",
        "test-user-name",
        "test-user-bio",
        "test-user-time",
        "test-user-avatar",
        "test-user-social-links",
        "test-user-social-twitter",
        "test-user-social-github",
        "test-user-hobbies",
        "test-user-dislikes"
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