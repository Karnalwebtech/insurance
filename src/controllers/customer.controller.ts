import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import CustomerModel from "@/model/customer.model";

export async function addCustomer(req: Request) {
  try {
    // Connect to the database
    await connectDB();

    // Parse request body safely
    const data = await req.json();
    if (!data) {
      return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
    }

    console.log("Received Data:", data);

    // Save customer data (if needed)
    const newCustomer = new CustomerModel(data);
    await newCustomer.save();

    return NextResponse.json(
      { message: "Customer added successfully", customer: newCustomer },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { message: "An error occurred", error: err },
      { status: 500 }
    );
  }
}
