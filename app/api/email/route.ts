
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WelcomeEmail from '@/app/email/welcome';
import InquiryEmail from '@/app/email/inquiry';

const resend = new Resend(process.env.RESEND_API_KEY);

//API for the Email sending process
export async function POST(request: Request) {
    const { firstName, email, phone, option, message } = await request.json();

    try {
        await resend.sendEmail({
            from: 'hello@zero-one.online',
            to: email,
            subject: 'Unlock the Power of AI for Your Business! 🦾',
            react: WelcomeEmail({
                firstName,
            })
        });
        await resend.sendEmail({
            from: 'contact@zero-one.online',
            to: 'hello@zero-one.online',
            subject: `New Inquiry`,
            react: InquiryEmail({
                firstName, email, phone, option, message
            })
        });
        return NextResponse.json({
            status: 'Ok'
        }, {
            status: 200
        })
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(`Failed to send email: ${e.message}`);
        }
        return NextResponse.json({
            error: 'Internal server error.'
        }, {
            status: 500
        })
    }


}