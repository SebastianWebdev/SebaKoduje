const pwaCotoJest = require("./PWA-post1/index")

const postsMap = new Map()
postsMap.set(pwaCotoJest.data.id, pwaCotoJest.data.html)
const getPostContent = (postId) => {
    return postsMap.get(postId)
}

module.exports.getPostContent = getPostContent