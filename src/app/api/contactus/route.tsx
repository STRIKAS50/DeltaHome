import { connectToDatabase } from '../../dbConfig';
import userData from "../../modal/DataRecieveing"
import { NextRequest, NextResponse } from "next/server";

connectToDatabase();
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phoneNumber,description } = body;
        console.log(body)

        const userExist = await userData.findOne({ email: email }).maxTimeMS(30000);

        if (userExist) {
            return NextResponse.json({
                message: "User Already Exists!",
                data:userExist,
                code:999
            });
        } else {
            const saveUserData = new userData({
                name,
                email,
                phoneNumber,
                description
            });
            const savedUser = await saveUserData.save();
            console.log('Data saved to MongoDB', saveUserData);

            return NextResponse.json({
                message: "User created successfully",
                data: savedUser,
                code:998
            });
        }
    } catch (error) {
        console.error('Error saving data to MongoDB:', error);
        return NextResponse.json({
            message: "Error in Data Saving",
        });
    }
}