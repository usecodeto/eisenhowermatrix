import { redirect } from "next/navigation";

export default async function Refresh(){
    "use server"
    console.log("redirecting to home page ....")
    await redirect("/");
} 