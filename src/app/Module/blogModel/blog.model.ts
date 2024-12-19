import { model, Schema } from "mongoose";
import { BlogPost } from "./blog.interface";

const blogPostSchema = new Schema<BlogPost>(
    {
      title: {
        type: String,
        required: [true, 'Title is required.'],
        trim: true,
        minlength: [5, 'Title must be at least 5 characters long.'],
        maxlength: [100, 'Title cannot exceed 100 characters.'],
      },
      content: {
        type: String,
        required: [true, 'Content is required.'],
        minlength: [5, 'Content must be at least 5 characters long.'],
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'Author is required.'],
        default:"676446dc2b9521e31651e03f"
      },
      isPublished: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true, // Automatically handles createdAt and updatedAt
    }
  );
  
  // Create the Mongoose model
  const BlogPostModel = model<BlogPost>('BlogPost', blogPostSchema);
  export default BlogPostModel