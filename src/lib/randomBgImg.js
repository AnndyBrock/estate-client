export const getRandomBackgroundImage = () => {
    const randomNumber = Math.floor(Math.random() * 7) + 1; // Generates a number between 1 and 7
    return `/bg/${randomNumber}.png`;
}
