import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
    const query = req.query;

    try {
      const posts = await prisma.post.findMany({
        where: {
          city: query.city || undefined,
          type: query.type || undefined,
          property: query.property || undefined,
          bedroom: parseInt(query.bedroom) || undefined,
          price: {
            gte: parseInt(query.minPrice) || undefined,
            lte: parseInt(query.maxPrice) || undefined,
          },
        },
      });
  
      // setTimeout(() => {
      res.status(200).json(posts);
      // }, 3000);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to get posts" });
    }
};

export const getPost = async (req, res) => {
    const id = req.params.id;
    try {
      const post = await prisma.post.findUnique({
        where: { id },
        include: {
          postDetail: true,
          user: {
            select: {
              username: true,
              avatar: true,
            },
          },
        },
      });
   
      res.status(200).json({ ...post, isSaved: false });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to get post" });
    }
};