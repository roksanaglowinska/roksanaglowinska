import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, listType } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email jest wymagany.' }, { status: 400 });
    }

    const apiKey = process.env.GETRESPONSE_API_KEY;
    
    // Wybór odpowiedniej kampanii (domyślnie focusletter)
    let campaignId = process.env.GETRESPONSE_CAMPAIGN_ID; 
    if (listType === 'platforma') {
      campaignId = process.env.GETRESPONSE_PLATFORMA_CAMPAIGN_ID;
    }

    if (!apiKey || !campaignId) {
      console.error("Missing GetResponse API Key or Campaign ID.");
      return NextResponse.json({ error: 'Błąd konfiguracji serwera.' }, { status: 500 });
    }

    const response = await fetch('https://api.getresponse.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': `api-key ${apiKey}`,
      },
      body: JSON.stringify({
        name: name || undefined,
        email: email,
        campaign: {
          campaignId: campaignId,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GetResponse error:', errorData);
      
      if (response.status === 409) {
          return NextResponse.json({ message: 'Twój email jest już na naszej liście!' }, { status: 200 });
      }
      
      return NextResponse.json({ error: 'Wystąpił błąd podczas zapisywania. Spróbuj ponownie później.' }, { status: response.status });
    }

    return NextResponse.json({ message: 'Zapisano pomyślnie! Do zobaczenia!' }, { status: 201 });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: 'Wewnętrzny błąd serwera.' }, { status: 500 });
  }
}
