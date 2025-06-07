document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.classescon button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {

            alert('Added to cart!'); 
        });
    });
});Copilot said: To add someone to your GitHub Pages

To add someone to your GitHub Pages site, you’ll need to add them as a collaborator to the repository that hosts your GitHub Pages site. Here’s how you can do it:

    Go to your repository on GitHub.
    Click on the Settings tab.
    In the left sidebar, click on Collaborators & teams (or Manage access).
    Click the Add people button.
    Enter the username, full name, or email address of the person you want to add.
    Select their role (usually “Write” for content updates).
    Click Add.

Once they accept the invitation, they will be able to contribute to your GitHub Pages site by pushing changes to the repository.

If you need more specific guidance (such as giving them access to just a branch, or setting up a custom workflow for content collaboration), let me know!