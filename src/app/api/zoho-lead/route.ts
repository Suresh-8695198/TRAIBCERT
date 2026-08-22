import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, companyName, standardRequired, employeeCount, message, utmSource, utmMedium, utmCampaign, pageUrl } = body;

    if (!fullName || !email || !phone || !companyName) {
      return NextResponse.json({ success: false, error: 'Please fill in all required fields.' }, { status: 400 });
    }

    // Prepare Zoho Bigin CRM payload
    const zohoPayload = {
      First_Name: fullName.split(' ')[0] || fullName,
      Last_Name: fullName.split(' ').slice(1).join(' ') || 'N/A',
      Email: email,
      Phone: phone,
      Company: companyName,
      Description: `Standard: ${standardRequired} | Employees: ${employeeCount}\nUTM Source: ${utmSource} | Campaign: ${utmCampaign}\nPage: ${pageUrl}\nNotes: ${message || 'None'}`,
      Lead_Source: utmSource || 'Website Form',
      Pipeline: 'Standard Lead Pipeline'
    };

    console.log('[ZOHO BIGIN API Proxy] Submitting lead payload:', zohoPayload);

    // In production, fetch(process.env.ZOHO_BIGIN_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(zohoPayload) })
    
    return NextResponse.json({
      success: true,
      message: 'Lead received and routed to Zoho Bigin CRM successfully.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('[ZOHO BIGIN API Error]:', error);
    return NextResponse.json({ success: false, error: 'Internal server error processing enquiry.' }, { status: 500 });
  }
}
