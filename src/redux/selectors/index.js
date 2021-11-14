
// Function to find an article with its ID
export const findArticleById = (articles, id) => {
    return articles.find(art => art.id === Number(id));
}