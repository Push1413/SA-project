import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    // Build the queryParams object
    const queryParams = {
      ...(query.city && { city: query.city }),
      ...(query.property && { property: query.property }),
      ...(query.bedroom && !isNaN(Number(query.bedroom)) && { bedroom: Number(query.bedroom) }),
      price: {
        ...(query.minPrice && !isNaN(Number(query.minPrice)) && { gte: Number(query.minPrice) }),
        ...(query.maxPrice && !isNaN(Number(query.maxPrice)) && { lte: Number(query.maxPrice) }),
      },
    };
  
    // Fetch posts with dynamic where clause
    const posts = await prisma.post.findMany({ where: queryParams });
  
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    res.status(500).json({ message: "Failed to get posts" });
  }
  
  
};

export const getPost = async (req, res) => {
    const id = req.params.id;
    try {
      const post = await prisma.post.findUnique({
        where: { id },
        include: {
          postDetail: true
        },
      });
   
      res.status(200).json({ ...post, isSaved: false });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to get post" });
    }
};