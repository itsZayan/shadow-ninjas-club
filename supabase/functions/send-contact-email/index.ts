
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  branch: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Preferred Branch:</strong> ${formData.branch}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `;

    // Send to both email addresses
    const emailPromises = [
      resend.emails.send({
        from: "Shadow Ninjas Club <onboarding@resend.dev>",
        to: ["mughal.zayan@gmail.com"],
        subject: `New Inquiry from ${formData.firstName} ${formData.lastName}`,
        html: emailContent,
        reply_to: formData.email,
      }),
      resend.emails.send({
        from: "Shadow Ninjas Club <onboarding@resend.dev>",
        to: ["shadowartacademy@gmail.com"],
        subject: `New Inquiry from ${formData.firstName} ${formData.lastName}`,
        html: emailContent,
        reply_to: formData.email,
      })
    ];

    await Promise.all(emailPromises);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error sending contact emails:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
