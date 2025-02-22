import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function Verify(){
     return(
        <div className="min-h-screen w-full flex items-center justify-center">
            <Card className="w-[380px] px-5">
                <CardHeader className="text-center ">
                    <div className="mb-4 mx-auto flex size-20 items-center justify-center rounded-full bg-blue-200">
                        <Mail className="size-12 text-blue-500"/>
                    </div>
                    <CardTitle className="text-2xl font-bold">
                        Check your Email
                    </CardTitle>
                    <CardDescription>
                        We have sent a verification link to your email address.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mt-4 rounded-medium bg-yellow-50 border-yellow-300 p-4">
                        <div className="flex items-center">
                            <AlertCircle className="size-5 text-yellow-500"/>

                            <p className="text-sm font-medium text-yellow-700 ml-3">Check your spam folder too!</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Link href="/" className={buttonVariants({
                        className: "w-full",
                        variant: "outline"
                    })}>
                        <ArrowLeft className="mr-2 size-4"/>Back to Homepage.
                    </Link>
                </CardFooter>
            </Card>
        </div>
     )
}