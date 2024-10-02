
![Alt text](https://res.cloudinary.com/dklv0c2br/image/upload/v1724440589/cafe_rfyeor.png)    

### Environment Variables

To run the application successfully, the following environment variables need to be configured:

- **NEXT_PUBLIC_MONGO_URL**:  
  MongoDB connection string to connect the application to the database.  
  Example: `NEXT_PUBLIC_MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority`

- **NEXTAUTH_URL**:  
  Base URL of your application. It is required by NextAuth.js for authentication purposes.  
  Example: `NEXTAUTH_URL=https://yourapp.com`

- **NEXT_PUBLIC_SECRET**:  
  A secret key used by NextAuth.js for encrypting session tokens and sensitive data.  
  Example: `NEXT_PUBLIC_SECRET=your-secret-key`

- **ENDPOINT**:  
  External API or service endpoint that the application interacts with.  
  Example: `ENDPOINT=https://api.example.com`

- **BUCKET_NAME**:  
  The name of your cloud storage bucket (e.g., AWS S3) where files, images, or assets are stored.  
  Example: `BUCKET_NAME=my-app-bucket`

- **ACCESS_KEY**:  
  Access key ID for authenticating to your cloud storage provider (e.g., AWS S3).  
  Example: `ACCESS_KEY=your-access-key-id`

- **SECRET_KEY**:  
  Secret key for your cloud storage provider corresponding to the `ACCESS_KEY`.  
  Example: `SECRET_KEY=your-secret-access-key`

**Note**: Ensure all environment variables are stored securely and never exposed in public repositories. Consider using environment management tools such as `.env` files or secret managers for production environments.
sample.env:
NEXT_PUBLIC_MONGO_URL=

NEXTAUTH_URL=

NEXT_PUBLIC_SECRET=

ENDPOINT = 

BUCKET_NAME = 

ACCESS_KEY=

SECRET_KEY=
