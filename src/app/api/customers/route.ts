import { NextRequest, NextResponse } from "next/server";
// import { uploadMiddleware, runMiddleware } from "./multerMiddleware";
import { addCustomer } from "@/controllers/customer.controller";

export async function POST(req: NextRequest) {
  try {
    // Run the Multer middleware

    // Access the uploaded file
    const file = req;
    console.log(file)
    // If you need to do something with the file, you can do it here
    // For example, you could add the file data to the request body

    // Call the controller function
    return addCustomer(req);
  } catch (error) {
    console.error("Error in route:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
