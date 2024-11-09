import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function checkPrismaConnection() {
    try {
      // Try to fetch a post or any other model you have
      const post = await prisma.post.findFirst(); 
  
      if (post) {
        console.log('Prisma connected and fetched data:', post);
      } else {
        console.log('Prisma connected but no data found.');
      }
    } catch (error) {
      console.error('Error connecting to the database with Prisma:', error.message);
    } finally {
      await prisma.$disconnect();
    }
  }

  checkPrismaConnection()


export default prisma;