import {prisma} from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ invoiceId: string }>;
  }
) {
  try {
    const session = await requireUser();

    const { invoiceId } = await params;

    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
        userId: session.user?.id,
      },
    });

    if (!invoiceData) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    const sender = {
      email: "hello@demomailtrap.com",
      name: "Chirag Damani",
    };

    emailClient.send({
      from: sender,
      to: [{ email: "22btrsn010+github@jainuniversity.ac.in" }],
      template_uuid: "62c26e7c-3c82-4900-b0d5-c1050b5416b9",
      template_variables: {
        first_name: invoiceData.clientName,
        company_info_name: "Paylio",
        company_info_address: "Chad street 124",
        company_info_city: " Bangalore",
        company_info_zip_code: "560061",
        company_info_country: "India",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send Email reminder" },
      { status: 500 }
    );
  }
}